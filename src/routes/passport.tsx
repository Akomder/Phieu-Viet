import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, LockKeyhole, Stamp, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useJourney } from "@/components/site/JourneyContext";
import { stations } from "@/lib/journey";
import { pageHead } from "@/lib/meta";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/passport")({
  head: () =>
    pageHead(
      "Việt Ký",
      "Góp nhặt hành trình, lưu giữ ký ức. Mỗi bộ sưu tập là một câu chuyện để bạn tự mình khám phá và hoàn thiện.",
    ),
  component: Passport,
});

const themeDisplayMap: Record<string, string> = {
  "phu-binh": "01 · ÁNH SÁNG",
  "tan-khanh": "02 · ĐẤT",
  "to-he": "03 · BỘT GẠO",
  "quang-san-art-museum": "04 · NGHỆ THUẬT",
  "independence-palace": "05 · LỊCH SỬ",
};

function Passport() {
  const { journey } = useJourney();
  const { t } = useTranslation();

  return (
    <main>
      {/* 1. HEADER BANNER */}
      <div className="bg-deep py-16 text-primary-foreground">
        <div className="section-wrap flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow !text-gold">{t("HÀNH TRÌNH ĐỂ LƯU GIỮ")}</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">{t("Việt Ký")}</h1>
            <p className="mt-3 text-lg opacity-80">
              {t("Hành trình văn hóa của bạn, từng ký ức một.")}
            </p>
          </div>
          <div className="border-l border-gold pl-6">
            <span className="font-display text-5xl">{journey.completed.length} / 3</span>
            <p className="mt-2 text-xs uppercase tracking-widest text-gold">
              {t("ĐIỂM ĐẾN ĐÃ HOÀN THÀNH")}
            </p>
          </div>
        </div>
      </div>

      {/* 2. CÁC ĐỊA ĐIỂM ĐỐI TÁC PHIÊU VIỆT / VỆT NẮNG NĂM THÁNG */}
      <div className="section-wrap pt-10">
        <div className="border border-gold bg-card p-6 sm:p-8 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="inline-block px-3 py-1 bg-gold/15 text-gold border border-gold/40 rounded-full text-xs font-bold uppercase tracking-wider">
                {t("CÁC ĐỊA ĐIỂM ĐỐI TÁC PHIÊU VIỆT")}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                {t("BỘ SƯU TẬP VIỆT KÝ")}
              </span>
            </div>
            <h2 className="font-display text-3xl mb-2 text-foreground font-bold">
              {t("Vệt Nắng Năm Tháng")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
              {t(
                "Theo dấu những ký ức tuổi thơ qua ánh sáng của lồng đèn, hình hài của heo đất và sắc màu của tò he.",
              )}
            </p>
          </div>
          <Button asChild variant="editorial" size="lg" className="shrink-0 w-full sm:w-auto">
            <Link to="/vet-nang-nam-thang">
              {t("Xem chi tiết nội dung bộ sưu tập")} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* 3. THU THẬP TRÊN HÀNH TRÌNH */}
      <div className="section-wrap py-12">
        <div className="flex items-end justify-between gap-5 mb-8">
          <div>
            <p className="eyebrow">{t("THU THẬP TRÊN HÀNH TRÌNH")}</p>
            <h2 className="mt-3 font-display text-4xl">{t("Những mảnh ký ức của bạn")}</h2>
          </div>
          <Link
            to="/rewards"
            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex hover:text-gold transition-colors"
          >
            {t("Xem phần thưởng")} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stations.map((s) => {
            const done = journey.completed.includes(s.id);
            return (
              <div
                key={s.id}
                className="border border-gold/40 bg-card rounded-lg overflow-hidden flex flex-col justify-between shadow-sm hover:border-gold hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={s.name}
                      width={1008}
                      height={752}
                      className={`h-full w-full object-cover transition-all ${
                        done ? "" : "grayscale blur-sm opacity-60"
                      }`}
                    />
                    {!done && (
                      <div className="absolute inset-0 flex items-center justify-center bg-deep/40">
                        <LockKeyhole className="text-white drop-shadow-md" size={32} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="eyebrow !text-gold font-bold">
                      {t(themeDisplayMap[s.id] || `${s.number} · ${s.theme}`)}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{t(s.name)}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {done ? t(s.teaser) : t("Một ký ức vẫn đang chờ được tìm thấy.")}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  {done ? (
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                      <Stamp size={16} /> {t("Đã thu thập dấu ấn số")}
                    </div>
                  ) : (
                    <Button asChild variant="editorial" className="mt-4 w-full">
                      <Link to="/stories/$stationId" params={{ stationId: s.id }}>
                        {t("Khám phá câu chuyện")} <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. PHẦN THƯỞNG CỦA BẠN */}
        <div className="mt-16 border-t border-border pt-10">
          <div className="flex items-center gap-3">
            <Trophy className="text-gold" size={28} />
            <h2 className="font-display text-3xl">{t("Phần thưởng của bạn")}</h2>
          </div>
          <p className="mt-3 text-muted-foreground">
            {journey.completed.length}{" "}
            {t(
              "con dấu đã thu thập. Mỗi chương hoàn thành sẽ đưa bạn đến gần hơn với phần thưởng tiếp theo.",
            )}
          </p>
          <div className="mt-5 h-2 max-w-lg bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 rounded-full"
              style={{ width: `${Math.min((journey.completed.length / 3) * 100, 100)}%` }}
            />
          </div>
          <Button asChild variant="editorial" className="mt-6">
            <Link to="/rewards">
              {t("Xem các cột mốc phần thưởng")} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
