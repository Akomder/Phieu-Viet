import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useJourney } from "@/components/site/JourneyContext";
import { getStation, saveJourney } from "@/lib/journey";
import { pageHead } from "@/lib/meta";
import { CheckCircle, Lock, Unlock, PlayCircle, Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/play/$stationId")({
  head: ({ params }) => {
    const station = getStation(params.stationId);
    return pageHead(station?.name || "Trải nghiệm", "Hành trình trải nghiệm tương tác");
  },
  component: PlayStation,
});

// Station-specific challenge mock images
const stationMockImages: Record<string, { id: number; text: string; correct: boolean }[]> = {
  "phu-binh": [
    { id: 1, text: "Lồng đèn hình tròn", correct: false },
    { id: 2, text: "Lồng đèn hình cá", correct: false },
    { id: 3, text: "Lồng đèn ngôi sao không có dải lụa", correct: false },
    { id: 4, text: "Lồng đèn ngôi sao năm cánh có dải lụa đỏ", correct: true },
  ],
  "tan-khanh": [
    { id: 1, text: "Heo đất chưa nung màu xám", correct: false },
    { id: 2, text: "Heo đất màu vàng vẽ hoa", correct: false },
    { id: 3, text: "Heo đất màu đỏ không họa tiết", correct: false },
    { id: 4, text: "Chú heo đất có dấu ấn ký ức làng nghề", correct: true },
  ],
  "to-he": [
    { id: 1, text: "Tò he bông hoa ngũ sắc", correct: false },
    { id: 2, text: "Tò he hình con rồng", correct: false },
    { id: 3, text: "Tò he nhân vật truyện tranh", correct: false },
    { id: 4, text: "Nhân vật tò he dân gian theo yêu cầu", correct: true },
  ],
};

function PlayStation() {
  const { stationId } = Route.useParams();
  const station = getStation(stationId);
  const { journey, update } = useJourney();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [step, setStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [code, setCode] = useState("");

  const [startTime, setStartTime] = useState<number | null>(null);
  const [wrongClicks, setWrongClicks] = useState(0);
  const [surveyFun, setSurveyFun] = useState("");
  const [surveyWantToVisit, setSurveyWantToVisit] = useState("");
  const [surveyComment, setSurveyComment] = useState("");

  useEffect(() => {
    if (step === 0 && !startTime) {
      setStartTime(Date.now());
    }
  }, [step, startTime]);

  const mockCode =
    stationId === "phu-binh" ? "ANHSANG01" : stationId === "tan-khanh" ? "HINHHAI02" : "SACMAU03";

  const challengeImages = stationMockImages[stationId] || stationMockImages["phu-binh"];

  if (!station) return <div className="p-20 text-center">{t("Không tìm thấy trạm")}</div>;

  const handleNext = () => setStep((s) => s + 1);

  const handleSelectImage = (img: { id: number; text: string; correct: boolean }) => {
    if (img.correct) {
      setErrorMsg("");
      handleNext();
    } else {
      setErrorMsg(t("Chưa đúng! Hãy quan sát lại manh mối và thử thêm một lần nữa."));
      setWrongClicks((prev) => prev + 1);
    }
  };

  const handleVerifyCode = () => {
    if (code.toUpperCase().trim() === mockCode) {
      // Unlock station
      if (!journey.completed.includes(station.id)) {
        update((j) => {
          return { ...j, completed: [...j.completed, station.id] };
        });
      }
      handleNext();
    } else {
      setErrorMsg(t("Mã không chính xác. Hãy thử lại."));
    }
  };

  const handleSubmitSurvey = async (e: React.FormEvent) => {
    e.preventDefault();

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxHr5QI_bTfvBTeFfiKfrS5e_6obnn1pEkkRiuohsyufsgLaRRu3zvAakmClTTEWwoX/exec";
    const payload = {
      startTime: startTime ? new Date(startTime).toLocaleString("vi-VN") : null,
      endTime: new Date().toLocaleString("vi-VN"),
      wrongClicks: wrongClicks,
      foundCorrectImage: true,
      enteredCorrectCode: true,
      station1Status: `Đã hoàn thành - ${station.name}`,
      surveyScores: `Thú vị: ${surveyFun} | Muốn trải nghiệm thực tế: ${surveyWantToVisit}`,
      userComment: surveyComment,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }

    navigate({ to: "/vet-nang-nam-thang" });
  };

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-accent/10">
      <div className="max-w-xl w-full bg-card border border-border p-8 shadow-sm">
        {/* Step 0: Video/Intro */}
        {step === 0 && (
          <div className="text-center space-y-6">
            <h2 className="font-display text-3xl">{t("Hướng dẫn trải nghiệm")}</h2>
            <div className="aspect-video bg-muted flex items-center justify-center rounded-md border border-border/50">
              <PlayCircle size={48} className="text-muted-foreground opacity-50" />
            </div>
            <p className="text-muted-foreground">
              {t("Xem video để hiểu cách tham gia và thu thập mảnh ghép.")}
            </p>
            <Button onClick={handleNext} className="w-full">
              {t("Next")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 1: Story & Clue */}
        {step === 1 && (
          <div className="space-y-6">
            <p className="eyebrow text-gold text-center">
              {t("TRẠM")} {station.number} - {station.name}
            </p>
            <h2 className="font-display text-3xl text-center">{station.challenge}</h2>
            <div className="prose prose-sm mx-auto text-muted-foreground">
              <p>{station.story}</p>
            </div>
            <div className="bg-primary/5 p-4 border border-primary/20 rounded-md mt-6">
              <p className="font-bold text-primary mb-2">{t("Nhiệm vụ:")}</p>
              <p className="italic">
                "
                {stationId === "tan-khanh"
                  ? t(
                      "Tại xưởng nung, hãy tìm chú heo đất mang dấu ấn truyền thống của xóm nghề Tân Khánh.",
                    )
                  : stationId === "to-he" || stationId === "to-he-clay"
                    ? t(
                        "Tại mẹt tò he, hãy quan sát và chọn đúng nhân vật dân gian theo lời kể của nghệ nhân.",
                      )
                    : t(
                        "Giữa những chiếc lồng đèn đang được treo tại trạm, hãy tìm chiếc lồng đèn ngôi sao năm cánh có dải lụa đỏ.",
                      )}
                "
              </p>
            </div>
            <Button onClick={handleNext} className="w-full mt-6">
              {t("Bắt đầu tìm kiếm")}
            </Button>
          </div>
        )}

        {/* Step 2: Image Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="font-display text-2xl text-center mb-6">{t("Quan sát và chọn đúng")}</h2>
            <div className="grid grid-cols-2 gap-4">
              {challengeImages.map((img) => (
                <button
                  key={img.id}
                  onClick={() => handleSelectImage(img)}
                  className="aspect-square bg-muted/50 border border-border hover:border-gold hover:bg-gold/5 flex flex-col items-center justify-center p-4 text-center transition-colors group"
                >
                  <ImageIcon
                    size={32}
                    className="mb-3 text-muted-foreground group-hover:text-gold"
                  />
                  <span className="text-sm">{t(img.text)}</span>
                </button>
              ))}
            </div>
            {errorMsg && (
              <p className="text-destructive text-sm text-center font-medium mt-4">{errorMsg}</p>
            )}
          </div>
        )}

        {/* Step 3: Secret Code */}
        {step === 3 && (
          <div className="text-center space-y-6">
            <h2 className="font-display text-2xl text-green-600 flex items-center justify-center gap-2">
              <CheckCircle /> {t("Bạn đã tìm thấy!")}
            </h2>
            <div className="bg-accent p-6 border border-border my-6">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                {t("MÃ KÝ ỨC")}
              </p>
              <p className="font-mono text-3xl tracking-widest font-bold">{mockCode}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("Hãy copy mã này và nhập vào bên dưới để xác nhận hoàn thành thử thách.")}
            </p>
            <div className="flex gap-2">
              <Input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={t("Nhập mã...")}
                className="font-mono uppercase text-center"
              />
              <Button onClick={handleVerifyCode}>{t("Lưu lại trong Việt Ký")}</Button>
            </div>
            {errorMsg && <p className="text-destructive text-sm font-medium mt-2">{errorMsg}</p>}
          </div>
        )}

        {/* Step 4: Completion Seal */}
        {step === 4 && (
          <div className="text-center space-y-8 py-8 modal-success">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-green-600 text-green-600 mb-4 animate-in zoom-in duration-500">
              <div className="text-center">
                <CheckCircle size={32} className="mx-auto mb-1" />
                <p className="font-bold uppercase text-xs">{t("Lưu thành công")}</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">
                {t("Bạn đã mở khóa Mảnh ghép")} {t(station.puzzlePiece || "")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t("Mảnh ghép đã được thêm vào Việt Ký của bạn.")}
              </p>
            </div>

            <Button onClick={handleNext} className="w-full" size="lg">
              {t("NEXT")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 5: Survey */}
        {step === 5 && (
          <form onSubmit={handleSubmitSurvey} className="space-y-6">
            <h2 className="font-display text-2xl mb-6">{t("Gửi gắm ký ức / Khảo sát")}</h2>

            <div className="space-y-3">
              <label className="text-sm font-bold block">
                {t("Bạn cảm thấy thử thách vừa rồi như thế nào?")}
              </label>
              <select
                value={surveyFun}
                onChange={(e) => setSurveyFun(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">{t("Chọn đánh giá...")}</option>
                <option value="5">{t("5 - Rất thú vị")}</option>
                <option value="4">{t("4 - Thú vị")}</option>
                <option value="3">{t("3 - Bình thường")}</option>
                <option value="2">{t("2 - Không thú vị")}</option>
                <option value="1">{t("1 - Rất không thú vị")}</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold block">
                {t("Bạn có muốn trải nghiệm phiên bản thực tế không?")}
              </label>
              <select
                value={surveyWantToVisit}
                onChange={(e) => setSurveyWantToVisit(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                required
              >
                <option value="">{t("Chọn đánh giá...")}</option>
                <option value="5">{t("5 - Rất muốn")}</option>
                <option value="3">{t("3 - Phân vân")}</option>
                <option value="1">{t("1 - Hoàn toàn không muốn")}</option>
              </select>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold block">
                {t("Bạn cảm thấy điều gì thú vị nhất trong trải nghiệm vừa rồi?")}
              </label>
              <textarea
                value={surveyComment}
                onChange={(e) => setSurveyComment(e.target.value)}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder={t("Nhập phản hồi của bạn...")}
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              {t("Submit")}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              {t("Data tự động lưu vào Google Sheets (Mocked for MVP)")}
            </p>
          </form>
        )}
      </div>
    </main>
  );
}

// ArrowRight mock component if missing from lucide-react in earlier import
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
