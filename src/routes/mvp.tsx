import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import videoCover from "@/assets/phieu-viet-video-cover.jpg";
import {
  PlayCircle,
  Circle,
  Fish,
  Star,
  CheckCircle,
  LoaderCircle,
  ExternalLink,
} from "lucide-react";

const INTRO_VIDEO_ID = "1vAHZs5HxU5XFrSE-iWS_tfbRHCu8D-rq";
const INTRO_VIDEO_URL = `https://drive.google.com/file/d/${INTRO_VIDEO_ID}/view`;
const INTRO_VIDEO_EMBED_URL = `https://drive.google.com/file/d/${INTRO_VIDEO_ID}/preview`;

export const Route = createFileRoute("/mvp")({
  component: MvpRoute,
});

function MvpRoute() {
  const { t } = useTranslation();
  const [videoRequested, setVideoRequested] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [step, setStep] = useState<"intro" | "station1" | "search" | "survey" | "done">("intro");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wrongClicks, setWrongClicks] = useState(0);
  const [searchStatus, setSearchStatus] = useState<"playing" | "wrong" | "found" | "success">(
    "playing",
  );
  const [memoryCodeInput, setMemoryCodeInput] = useState("");
  const [survey, setSurvey] = useState({
    fun: 3,
    understandable: 3,
    wantToVisit: 3,
    interestingThing: "",
  });

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleLanternClick = (correct: boolean) => {
    if (searchStatus === "found" || searchStatus === "success") return;
    if (correct) {
      setSearchStatus("found");
    } else {
      setSearchStatus("wrong");
      setWrongClicks((prev) => prev + 1);
    }
  };

  const handleCodeSubmit = () => {
    if (memoryCodeInput.toUpperCase() === "ANHSANG01") {
      setSearchStatus("success");
    } else {
      alert(t("Mã chưa đúng, vui lòng thử lại!"));
    }
  };

  const submitData = async () => {
    const endTime = Date.now();
    const payload = {
      startTime: startTime ? new Date(startTime).toLocaleString("vi-VN") : null,
      endTime: new Date(endTime).toLocaleString("vi-VN"),
      wrongClicks: wrongClicks,
      foundCorrectImage: searchStatus === "success" || searchStatus === "found",
      enteredCorrectCode: searchStatus === "success",
      station1Status: "Completed",
      surveyScores: `Enjoyment: ${survey.fun}/5 | Clarity: ${survey.understandable}/5 | Visit interest: ${survey.wantToVisit}/5`,
      userComment: survey.interestingThing,
    };

    console.log("Submitting MVP Data to Google Sheets:", payload);

    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxHr5QI_bTfvBTeFfiKfrS5e_6obnn1pEkkRiuohsyufsgLaRRu3zvAakmClTTEWwoX/exec";

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
      console.error("Error submitting survey data:", error);
    }

    setStep("done");
  };

  return (
    <main className="min-h-[100dvh] bg-deep text-primary-foreground p-4 py-8 sm:p-8 flex justify-center items-start sm:items-center font-sans">
      <div className="relative w-full max-w-3xl min-w-0 overflow-hidden rounded-2xl bg-card p-4 text-card-foreground shadow-2xl sm:p-6 md:p-8">
        {step === "intro" && (
          <div className="min-w-0 space-y-5 text-center animate-in fade-in zoom-in duration-500 sm:space-y-6">
            <h1 className="font-display text-2xl font-bold sm:text-3xl">
              {t("Giới thiệu Phiêu Việt")}
            </h1>
            <div className="relative aspect-[16/9] w-full min-w-0 overflow-hidden rounded-lg border border-[#d8b991] bg-[#f3d9b6]">
              {videoRequested ? (
                <>
                  {!videoReady && (
                    <div
                      className="absolute inset-0 z-10 flex items-center justify-center bg-[#f3d9b6] text-[#765b4c]"
                      aria-live="polite"
                    >
                      <LoaderCircle className="h-10 w-10 animate-spin" aria-hidden="true" />
                      <span className="sr-only">{t("Đang tải video")}</span>
                    </div>
                  )}
                  <iframe
                    title={t("Video giới thiệu Phiêu Việt")}
                    src={`${INTRO_VIDEO_EMBED_URL}?autoplay=1`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="eager"
                    onLoad={() => setVideoReady(true)}
                  />
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoRequested(true)}
                  className="group absolute inset-0 flex w-full items-center justify-center text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#c97864]"
                  aria-label={t("Phát video giới thiệu Phiêu Việt")}
                >
                  <img
                    src={videoCover}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    fetchPriority="high"
                  />
                  <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/30" />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#7d1015]/85 shadow-lg ring-2 ring-white/80 transition-transform group-hover:scale-110">
                    <PlayCircle className="h-10 w-10" aria-hidden="true" />
                  </span>
                </button>
              )}
            </div>
            <Button
              type="button"
              onClick={() => setStep("station1")}
              className="w-full text-lg h-12 touch-manipulation"
            >
              {t("Tiếp theo")}
            </Button>
          </div>
        )}

        {step === "station1" && (
          <div className="space-y-6 text-center animate-in slide-in-from-right duration-500">
            <h2 className="font-display text-2xl font-bold uppercase text-primary">
              {t("Trạm 1 – Làng lồng đèn Phú Bình")}
            </h2>
            <p className="font-semibold text-xl text-muted-foreground">
              {t("Thử thách: Truy tìm ánh sáng cũ")}
            </p>
            <div className="bg-muted/30 p-4 rounded-lg text-left text-sm leading-relaxed border border-border">
              {t(
                "Mỗi dịp Trung thu về, con hẻm nhỏ tại Phú Bình lại rực rỡ ánh đèn giấy kiếng. Những chiếc lồng đèn thủ công không chỉ mang ánh sáng đêm rằm mà còn chứa đựng bao kỷ niệm tuổi thơ.",
              )}
            </div>
            <div className="bg-primary/10 p-4 rounded-lg font-medium text-primary">
              {t(
                "Nhiệm vụ: Giữa những chiếc lồng đèn đang được treo tại trạm, hãy tìm chiếc lồng đèn ngôi sao năm cánh có dải lụa đỏ.",
              )}
            </div>
            <Button
              onClick={() => {
                const GOOGLE_SCRIPT_URL =
                  "https://script.google.com/macros/s/AKfycbxHr5QI_bTfvBTeFfiKfrS5e_6obnn1pEkkRiuohsyufsgLaRRu3zvAakmClTTEWwoX/exec";
                const payload = {
                  startTime: startTime
                    ? new Date(startTime).toLocaleString("vi-VN")
                    : new Date().toLocaleString("vi-VN"),
                  endTime: "",
                  wrongClicks: 0,
                  foundCorrectImage: false,
                  enteredCorrectCode: false,
                  station1Status: "Started searching",
                  surveyScores: "",
                  userComment: "",
                };

                fetch(GOOGLE_SCRIPT_URL, {
                  method: "POST",
                  headers: { "Content-Type": "text/plain;charset=utf-8" },
                  body: JSON.stringify(payload),
                  mode: "no-cors",
                }).catch(console.error);

                setStep("search");
              }}
              className="w-full text-lg h-12"
            >
              {t("Bắt đầu tìm kiếm")}
            </Button>
          </div>
        )}

        {step === "search" && (
          <div className="space-y-6 text-center animate-in fade-in duration-500">
            <h2 className="font-display text-2xl font-bold">{t("Tìm lồng đèn")}</h2>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleLanternClick(false)}
                className="aspect-square bg-muted/50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-muted border border-transparent hover:border-border transition-colors"
              >
                <Circle className="w-12 h-12 text-blue-500" />
                <span className="text-sm font-medium">{t("Lồng đèn hình tròn")}</span>
              </button>
              <button
                onClick={() => handleLanternClick(false)}
                className="aspect-square bg-muted/50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-muted border border-transparent hover:border-border transition-colors"
              >
                <Fish className="w-12 h-12 text-orange-500" />
                <span className="text-sm font-medium">{t("Lồng đèn hình cá")}</span>
              </button>
              <button
                onClick={() => handleLanternClick(false)}
                className="aspect-square bg-muted/50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-muted border border-transparent hover:border-border transition-colors"
              >
                <Star className="w-12 h-12 text-yellow-500" />
                <span className="text-sm font-medium">
                  {t("Lồng đèn ngôi sao không có dải lụa")}
                </span>
              </button>
              <button
                onClick={() => handleLanternClick(true)}
                className="aspect-square bg-muted/50 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-muted border border-transparent hover:border-border transition-colors relative overflow-hidden"
              >
                <Star className="w-12 h-12 text-red-500 fill-red-500/20" />
                <div className="absolute bottom-2 w-8 h-2 bg-red-500 rounded-full" />
                <span className="text-sm font-medium">
                  {t("Lồng đèn ngôi sao năm cánh có dải lụa đỏ")}
                </span>
              </button>
            </div>

            {searchStatus === "wrong" && (
              <p className="text-red-500 font-medium animate-in fade-in">
                {t("Chưa đúng! Hãy quan sát lại manh mối và thử thêm một lần nữa.")}
              </p>
            )}

            {searchStatus === "found" && (
              <div className="space-y-4 bg-primary/10 p-4 rounded-xl border border-primary/20 animate-in zoom-in">
                <p className="text-xl font-bold text-primary">
                  {t("Bạn đã tìm thấy ánh sáng cũ!")}
                </p>
                <div className="bg-background p-3 rounded-lg border">
                  <p className="text-xs text-muted-foreground uppercase mb-1">{t("MÃ KÝ ỨC")}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold tracking-widest">ANHSANG01</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText("ANHSANG01")}
                    >
                      {t("COPY MÃ")}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-medium">
                    {t("Nhập mã để xác nhận hoàn thành thử thách:")}
                  </p>
                  <div className="flex gap-2">
                    <Input
                      value={memoryCodeInput}
                      onChange={(e) => setMemoryCodeInput(e.target.value)}
                      placeholder={t("Nhập mã tại đây...")}
                      className="uppercase font-mono"
                    />
                    <Button onClick={handleCodeSubmit}>{t("Xác nhận mã")}</Button>
                  </div>
                </div>
              </div>
            )}

            {searchStatus === "success" && (
              <div className="space-y-6 animate-in slide-in-from-bottom-4">
                <div className="bg-green-500/10 text-green-600 border border-green-500/20 p-4 rounded-xl flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-bold text-lg">
                    {t("✓ ĐÃ HOÀN THÀNH TRẠM 1 – ÁNH SÁNG")}
                  </span>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40 border border-yellow-500/30 p-6 rounded-xl shadow-inner">
                  <p className="text-center font-medium text-yellow-800 dark:text-yellow-200">
                    {t("Bạn đã mở khóa Mảnh ghép Ánh sáng.")}
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => setStep("survey")}
                  className="w-full text-lg h-12 touch-manipulation"
                >
                  {t("Tiếp theo")}
                </Button>
              </div>
            )}
          </div>
        )}

        {step === "survey" && (
          <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <h2 className="font-display text-2xl font-bold text-center">
              {t("Khảo sát trải nghiệm")}
            </h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t(
                    "Bạn cảm thấy thử thách vừa rồi như thế nào? (1 - Rất không thú vị, 5 - Rất thú vị)",
                  )}
                </label>
                <div className="flex gap-2 justify-between">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <Button
                      key={v}
                      variant={survey.fun === v ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSurvey((s) => ({ ...s, fun: v }))}
                    >
                      {v}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t("Bạn có dễ hiểu cách chơi không? (1 - Rất khó hiểu, 5 - Rất dễ hiểu)")}
                </label>
                <div className="flex gap-2 justify-between">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <Button
                      key={v}
                      variant={survey.understandable === v ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSurvey((s) => ({ ...s, understandable: v }))}
                    >
                      {v}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t(
                    "Bạn có muốn trải nghiệm phiên bản thực tế tại Làng lồng đèn Phú Bình không? (1 - Hoàn toàn không muốn, 5 - Rất muốn)",
                  )}
                </label>
                <div className="flex gap-2 justify-between">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <Button
                      key={v}
                      variant={survey.wantToVisit === v ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => setSurvey((s) => ({ ...s, wantToVisit: v }))}
                    >
                      {v}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {t("Bạn cảm thấy điều gì thú vị nhất trong trải nghiệm vừa rồi?")}
                </label>
                <Input
                  value={survey.interestingThing}
                  onChange={(e) => setSurvey((s) => ({ ...s, interestingThing: e.target.value }))}
                  placeholder={t("Chia sẻ cảm nghĩ của bạn...")}
                />
              </div>
            </div>

            <Button onClick={submitData} className="w-full text-lg h-12 mt-4">
              {t("Gửi đánh giá")}
            </Button>
          </div>
        )}

        {step === "done" && (
          <div className="space-y-6 text-center animate-in zoom-in duration-500 py-12">
            <h2 className="font-display text-4xl font-bold text-primary">{t("Cảm ơn!")}</h2>
            <p className="text-muted-foreground text-lg">
              {t(
                "Cảm ơn bạn đã tham gia trải nghiệm MVP Việt Ký. Dữ liệu của bạn đã được ghi nhận.",
              )}
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/">{t("Về trang chủ")}</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
