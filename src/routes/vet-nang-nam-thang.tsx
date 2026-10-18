import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Lock, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/meta";
import { useTranslation } from "react-i18next";
import { useJourney } from "@/components/site/JourneyContext";
import st1 from "@/assets/st1.png";
import st2 from "@/assets/st2.png";
import st3 from "@/assets/st3.png";
import st4 from "@/assets/st4.png";
import heroLanterns from "@/assets/hero-lanterns.jpg";
import craftPiggy from "@/assets/craft-piggy.jpg";
import craftTohe from "@/assets/craft-tohe.jpg";

export const Route = createFileRoute("/vet-nang-nam-thang")({
  head: () =>
    pageHead(
      "Vệt Nắng Năm Tháng",
      "Hành trình trải nghiệm thuộc hệ sinh thái Việt Ký, được xây dựng từ những hình ảnh, âm thanh, màu sắc và vật dụng quen thuộc từng gắn với tuổi thơ...",
    ),
  component: VetNang,
});

function VetNang() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleStartPlaying = (
    stationId: string = "phu-binh",
    stationName: string = "Làng lồng đèn Phú Bình",
  ) => {
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxHr5QI_bTfvBTeFfiKfrS5e_6obnn1pEkkRiuohsyufsgLaRRu3zvAakmClTTEWwoX/exec";
    const payload = {
      startTime: new Date().toLocaleString("vi-VN"),
      endTime: "",
      wrongClicks: 0,
      foundCorrectImage: false,
      enteredCorrectCode: false,
      station1Status: `Bắt đầu chơi - ${stationName}`,
      surveyScores: "",
      userComment: "",
    };

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      mode: "no-cors",
    }).catch(console.error);

    if (stationId === "phu-binh") {
      navigate({ to: "/mvp" });
    } else {
      navigate({ to: "/play/$stationId", params: { stationId } });
    }
  };
  const { journey } = useJourney();

  const isPhuBinhCompleted = journey.completed.includes("phu-binh");
  const isTanKhanhCompleted = journey.completed.includes("tan-khanh");
  const isToHeCompleted =
    journey.completed.includes("to-he") || journey.completed.includes("to-he-clay");

  const allCompleted = isPhuBinhCompleted && isTanKhanhCompleted && isToHeCompleted;

  return (
    <main>
      {/* SECTION 1 - ĐẦU TRANG */}
      <section className="bg-deep py-24 text-primary-foreground">
        <div className="section-wrap text-center max-w-4xl mx-auto">
          <p className="font-bold tracking-widest uppercase text-gold text-sm mb-6">
            {t("BỘ SƯU TẬP VIỆT KÝ")}
          </p>
          <h1 className="font-display text-5xl sm:text-7xl uppercase tracking-wider mb-4">
            {t("VỆT NẮNG NĂM THÁNG")}
          </h1>
          <h2 className="font-display text-2xl sm:text-4xl text-primary/90 mb-8">
            {t("Mảnh Ghép Tuổi Thơ")}
          </h2>
          <p className="text-xl opacity-90 italic font-medium">
            {t("Tìm lại ký ức, chạm vào nguyên bản.")}
          </p>
        </div>
      </section>

      {/* SECTION 2 - CÂU CHUYỆN CỦA BỘ SƯU TẬP */}
      <section className="bg-background py-24">
        <div className="section-wrap max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl mb-10 text-primary">
            {t("Một vài ký ức không chỉ để nhớ.")}
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg text-justify">
            <p>
              {t(
                "“Vệt Nắng Năm Tháng” là hành trình trải nghiệm thuộc hệ sinh thái Việt Ký, được xây dựng từ những hình ảnh, âm thanh, màu sắc và vật dụng quen thuộc từng gắn với tuổi thơ của nhiều thế hệ người Việt.",
              )}
            </p>
            <p>
              {t(
                "Đó có thể là ánh sáng xuyên qua lớp giấy kiếng của chiếc lồng đèn mỗi dịp Trung thu, tiếng gõ khuôn tại những xưởng làm heo đất hay những hình tò he nhỏ nhiều màu sắc được tạo nên từ bột và đôi bàn tay người làm nghề.",
              )}
            </p>
            <p>
              {t(
                "Theo thời gian, nhiều hình ảnh quen thuộc này dần ít xuất hiện trong đời sống hiện đại. Tuy nhiên, những nghề thủ công và phương thức tạo ra chúng vẫn đang được duy trì tại một số làng nghề, xưởng sản xuất và không gian trải nghiệm.",
              )}
            </p>
            <p>
              {t(
                "Từ đó, Phiêu Việt xây dựng “Vệt Nắng Năm Tháng” như một hành trình giúp người tham gia tìm lại những dấu vết tuổi thơ thông qua trải nghiệm trực tiếp. Thay vì chỉ quan sát hoặc tiếp nhận thông tin, người tham gia được chủ động tìm kiếm, tương tác, thực hiện một phần thao tác thủ công và trò chuyện với người làm nghề tại từng trạm.",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - NHỮNG MẢNH KÝ ỨC CỦA BẠN */}
      <section className="bg-secondary/30 py-24">
        <div className="section-wrap">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl">{t("NHỮNG MẢNH KÝ ỨC CỦA BẠN")}</h2>
          </div>

          <div className="grid gap-12 max-w-5xl mx-auto">
            {/* 01 - ÁNH SÁNG */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card border border-border p-8 rounded-2xl shadow-sm">
              <div className="rounded-xl overflow-hidden aspect-video">
                <img src={heroLanterns} alt="Ánh Sáng" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-gold font-bold tracking-widest text-sm mb-2">
                  {t("01 - ÁNH SÁNG")}
                </span>
                <h3 className="font-display text-3xl mb-4">{t("Làng lồng đèn Phú Bình")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t(
                    "Tìm lại ánh sáng của những mùa Trung Thu qua câu chuyện của nghề làm lồng đèn thủ công.",
                  )}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Button asChild variant="editorial">
                    <Link to="/stories/$stationId" params={{ stationId: "phu-binh" }}>
                      {t("Khám phá điểm này")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleStartPlaying("phu-binh", "Làng lồng đèn Phú Bình")}
                    variant="default"
                  >
                    {t("Bắt đầu chơi")} <Play className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* 02 - HÌNH HÀI */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card border border-border p-8 rounded-2xl shadow-sm">
              <div className="rounded-xl overflow-hidden aspect-video md:order-2">
                <img src={craftPiggy} alt="Hình Hài" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start md:order-1">
                <span className="text-gold font-bold tracking-widest text-sm mb-2">
                  {t("02 - HÌNH HÀI")}
                </span>
                <h3 className="font-display text-3xl mb-4">{t("Xóm/lò heo đất Tân Khánh")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t(
                    "Theo dấu hành trình từ một khối đất đến chú heo đất từng xuất hiện trong ký ức của nhiều thế hệ.",
                  )}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Button asChild variant="editorial">
                    <Link to="/stories/$stationId" params={{ stationId: "tan-khanh" }}>
                      {t("Khám phá điểm này")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleStartPlaying("tan-khanh", "Xóm/lò heo đất Tân Khánh")}
                    variant="default"
                  >
                    {t("Bắt đầu chơi")} <Play className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* 03 - SẮC MÀU */}
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card border border-border p-8 rounded-2xl shadow-sm">
              <div className="rounded-xl overflow-hidden aspect-video">
                <img src={craftTohe} alt="Sắc Màu" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-gold font-bold tracking-widest text-sm mb-2">
                  {t("03 - SẮC MÀU")}
                </span>
                <h3 className="font-display text-3xl mb-4">{t("Tò He CLAY")}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t(
                    "Chạm lại những sắc màu tuổi thơ qua những hình hài nhỏ bé được tạo nên từ đôi bàn tay người làm nghề.",
                  )}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Button asChild variant="editorial">
                    <Link to="/stories/$stationId" params={{ stationId: "to-he" }}>
                      {t("Khám phá điểm này")} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleStartPlaying("to-he", "Tò He CLAY")}
                    variant="default"
                  >
                    {t("Bắt đầu chơi")} <Play className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Phần Mảnh Ghép Tuổi Thơ */}
      <section className="bg-deep py-24 text-primary-foreground border-t border-primary-foreground/10">
        <div className="section-wrap max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl text-gold mb-6">
              {t("Hoàn thiện Mảnh Ghép Tuổi Thơ")}
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              {t(
                "Mỗi điểm hoàn thành sẽ mở khóa một mảnh ghép. Khi đủ ba mảnh đầu tiên, mảnh cuối cùng sẽ được mở ra cho chính bạn.",
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <PuzzlePieceCard
              image={st1}
              title="Ánh sáng"
              number="01"
              isUnlocked={isPhuBinhCompleted}
            />
            <PuzzlePieceCard
              image={st2}
              title="Hình hài"
              number="02"
              isUnlocked={isTanKhanhCompleted}
            />
            <PuzzlePieceCard image={st3} title="Sắc màu" number="03" isUnlocked={isToHeCompleted} />
            <PuzzlePieceCard
              image={st4}
              title="Ký ức của chính bạn"
              number="04"
              isUnlocked={allCompleted}
              lockedText="Mở sau khi hoàn thành 3 điểm"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function PuzzlePieceCard({
  image,
  title,
  number,
  isUnlocked,
  lockedText = "Chưa mở",
}: {
  image: string;
  title: string;
  number: string;
  isUnlocked: boolean;
  lockedText?: string;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border ${isUnlocked ? "border-gold" : "border-white/10"} bg-card/10 aspect-[3/4] flex flex-col transition-all duration-500`}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${isUnlocked ? "opacity-90 scale-100" : "opacity-20 scale-110 grayscale blur-sm"}`}
        />
        <div
          className={`absolute inset-0 mix-blend-multiply ${isUnlocked ? "bg-deep/40" : "bg-black/60"}`}
        ></div>
      </div>

      <div className="relative z-10 p-6 flex flex-col h-full justify-between items-center text-center">
        <span
          className={`text-sm font-bold tracking-widest ${isUnlocked ? "text-gold" : "text-white/50"}`}
        >
          {t("Mảnh")} {number}
        </span>

        <div className="flex flex-col items-center">
          <h3
            className={`font-display text-2xl mb-4 ${isUnlocked ? "text-white drop-shadow-md" : "text-white/50"}`}
          >
            {t(title)}
          </h3>

          <div
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-md ${isUnlocked ? "bg-green-900/40 text-green-300 border border-green-500/30" : "bg-black/40 text-white/60 border border-white/10"}`}
          >
            {isUnlocked ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>{t("Đã mở khóa")}</span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>{t(lockedText)}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
