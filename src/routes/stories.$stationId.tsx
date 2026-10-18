import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  Clock3,
  MapPin,
  Tag,
  Play,
  Eye,
  Users,
  Search,
  Calendar,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useJourney } from "@/components/site/JourneyContext";
import { getStation, money } from "@/lib/journey";
import { pageHead } from "@/lib/meta";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/stories/$stationId")({
  head: ({ params }) =>
    pageHead(
      getStation(params.stationId)?.name || "Khám phá",
      "Khám phá địa điểm văn hóa Việt Nam.",
    ),
  component: Story,
});

function Story() {
  const { stationId } = Route.useParams();
  const station = getStation(stationId);
  const { journey } = useJourney();
  const { t } = useTranslation();

  if (!station) {
    return (
      <main className="section-wrap py-24 text-center">
        <h1 className="font-display text-3xl mb-4">{t("Không tìm thấy địa điểm")}</h1>
        <Link
          to="/discover"
          className="inline-flex items-center text-primary font-medium hover:text-gold transition-all hover:-translate-x-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("Quay lại khám phá")}
        </Link>
      </main>
    );
  }

  const isMvp = ["phu-binh", "tan-khanh", "to-he"].includes(station.id);

  // Activities logic
  const defaultActivities = [
    { title: "Tham quan", type: "sightseeing" },
    { title: "Xem nghệ nhân làm nghề", type: "watching" },
    { title: "Tham gia hoạt động", type: "participating" },
  ];
  const activities = station.activities || defaultActivities;

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "sightseeing":
        return <Search size={24} className="text-primary mb-3" />;
      case "watching":
        return <Eye size={24} className="text-primary mb-3" />;
      case "participating":
        return <Users size={24} className="text-primary mb-3" />;
      default:
        return <Tag size={24} className="text-primary mb-3" />;
    }
  };

  return (
    <main className="bg-background">
      {/* 1. Giới thiệu */}
      <div className="relative h-[440px] bg-deep sm:h-[540px]">
        <img
          src={station.image}
          alt={station.name}
          width={1008}
          height={752}
          className="h-full w-full object-cover"
        />
        <div className="dark-shade absolute inset-0" />
        <div className="section-wrap absolute inset-x-0 bottom-12 text-primary-foreground">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-gold mb-3 flex items-center gap-2">
            <Tag size={14} /> {t(station.category)}
          </p>
          <h1 className="max-w-3xl font-display text-5xl sm:text-6xl">{station.name}</h1>
          <div className="mt-5 flex flex-wrap gap-5 text-sm">
            <span className="flex items-center gap-2 font-medium bg-black/40 px-3 py-1.5 rounded-full">
              <MapPin size={16} /> {station.location.split(",")[0]}
            </span>
          </div>
        </div>
      </div>

      <div className="section-wrap grid gap-14 py-16 lg:grid-cols-[1fr_340px] lg:gap-24">
        <article>
          {/* 2. Câu chuyện văn hóa */}
          <section className="mb-16">
            <p className="eyebrow !text-primary">{t("CÂU CHUYỆN VĂN HÓA")}</p>
            <h2 className="mt-4 font-display text-4xl mb-8">
              {t("Câu chuyện phía sau")} {station.name}
            </h2>
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p>{station.story}</p>
              <p className="mt-4">{station.lockedStory}</p>
            </div>
          </section>

          {/* 3. Có thể trải nghiệm gì? */}
          <section className="mb-16 border-t border-border pt-12">
            <h2 className="font-display text-3xl mb-8">{t("Có thể trải nghiệm gì?")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {activities.map((act, idx) => (
                <div
                  key={idx}
                  className="bg-secondary/50 p-6 rounded-lg text-center flex flex-col items-center justify-center border border-border"
                >
                  {getActivityIcon(act.type)}
                  <span className="font-medium text-sm">{t(act.title)}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {station.steps.map((step, idx) => (
                <div key={idx} className="bg-accent/30 p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-lg mb-2">{t(step.title)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              ))}
            </div>

            {isMvp && (
              <div className="mt-8 text-center bg-primary/5 border border-primary/20 p-8 rounded-lg">
                <h3 className="font-display text-2xl mb-4">{t("Tham gia thử thách tương tác")}</h3>
                <p className="text-muted-foreground mb-6">
                  {t("Khám phá câu chuyện này qua một trải nghiệm tìm kiếm thú vị.")}
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/play/$stationId" params={{ stationId: station.id }}>
                    <Play size={18} className="mr-2" /> {t("Bắt đầu chơi")}
                  </Link>
                </Button>
              </div>
            )}
          </section>

          {/* 5. Bộ sưu tập liên quan */}
          {isMvp && (
            <section className="border-t border-border pt-12">
              <h2 className="font-display text-3xl mb-6">{t("Bộ sưu tập liên quan")}</h2>
              <div className="bg-card border border-gold p-6 flex flex-col sm:flex-row gap-6 items-center rounded-lg shadow-sm">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("Địa điểm này thuộc bộ sưu tập")}
                  </p>
                  <h3 className="font-display text-xl text-gold mb-1 font-bold">
                    {t("Vệt Nắng Năm Tháng – Mảnh Ghép Tuổi Thơ")}
                  </h3>
                </div>
                <Button asChild variant="editorial">
                  <Link to="/vet-nang-nam-thang">
                    {t("Xem bộ sưu tập")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          )}
        </article>

        <aside>
          {/* 4. Thông tin cần biết */}
          <div className="sticky top-28 border border-border bg-card p-7 shadow-sm rounded-lg">
            <p className="eyebrow">{t("THÔNG TIN CẦN BIẾT")}</p>
            <h3 className="mt-3 font-display text-2xl mb-6">{t("Tóm tắt")}</h3>

            <div className="space-y-5 text-sm mb-8">
              <div className="flex gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-muted-foreground font-bold mb-1">{t("Địa chỉ")}</span>
                  <span>{station.location}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Calendar size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-muted-foreground font-bold mb-1">
                    {t("Giờ hoạt động")}
                  </span>
                  <span>{station.operatingHours || "08:00 - 17:00 (Mỗi ngày)"}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock3 size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-muted-foreground font-bold mb-1">
                    {t("Thời lượng")}
                  </span>
                  <span>{t(station.duration)}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Tag size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-muted-foreground font-bold mb-1">
                    {t("Giá tham khảo")}
                  </span>
                  <span className="font-bold text-gold text-base">{money(station.price)}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Info size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-muted-foreground font-bold mb-1">{t("Lưu ý")}</span>
                  <span>{station.notes || "Vui lòng đặt lịch trước khi đến."}</span>
                </div>
              </div>
            </div>

            <Button asChild className="w-full mb-3" variant="default">
              <Link to="/book/$stationId" params={{ stationId: station.id }}>
                {t("Đặt trải nghiệm")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(station.name + " " + station.location)}`}
                target="_blank"
                rel="noreferrer"
              >
                {t("Xem bản đồ")} <MapPin className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </aside>
      </div>
    </main>
  );
}
