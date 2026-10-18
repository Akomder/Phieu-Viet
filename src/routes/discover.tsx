import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StationCard } from "@/components/site/StationCard";
import { stations, type Station } from "@/lib/journey";
import { pageHead } from "@/lib/meta";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/discover")({
  validateSearch: (search: Record<string, unknown>): { q?: string; category?: string } => {
    const params: { q?: string; category?: string } = {};
    if (typeof search.q === "string" && search.q.trim()) {
      params.q = search.q.trim();
    }
    if (typeof search.category === "string" && search.category.trim()) {
      params.category = search.category.trim();
    }
    return params;
  },
  head: () =>
    pageHead(
      "Khám phá",
      "Từ làng nghề, bảo tàng đến những hoạt động cùng nghệ nhân, mỗi điểm đến đều có câu chuyện riêng để bạn khám phá.",
    ),
  component: Discover,
});

const normalize = (str: string) =>
  (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase()
    .trim();

const stationKeywords: Record<string, string> = {
  "phu-binh":
    "lồng đèn lantern long den giấy kính giay kinh trung thu ánh sáng anh sang làng nghề lang nghe thủ công lạc long quân quận 11",
  "tan-khanh":
    "gốm gốm sứ gom gom su đất nung dat nung đất sét dat set heo đất heo dat lò nung lo nung piggy bank clay hình hài hinh hai nguyễn văn nhàn",
  "to-he":
    "tò he to he clay bột gạo bot gao dân gian dan gian sắc màu sac mau gánh hàng rong ganh hang rong workshop nghệ nhân quận 12",
  "quang-san-art-museum":
    "bảo tàng bao tang museum nghệ thuật nghe thuat art mỹ thuật my thuat hội họa hoi hoa tranh lụa quạt giấy workshop sáng tạo quang san nguyễn văn hưởng sài gòn thủ đức",
  "independence-palace":
    "dinh độc lập dinh doc lap di tích di tich lịch sử lich su independence palace bảo tàng bao tang kiến trúc phong thủy hầm ngầm xe tăng 390 bến thành quận 1",
};

const buildSearchableCorpus = (s: Station, t: (key: string) => string) => {
  return normalize(
    [
      s.id,
      s.number,
      s.name,
      t(s.name),
      s.theme,
      t(s.theme),
      s.category,
      t(s.category),
      s.location,
      t(s.location),
      s.artisan,
      t(s.artisan),
      s.puzzlePiece || "",
      s.teaser,
      t(s.teaser),
      s.story,
      s.lockedStory,
      s.challenge,
      stationKeywords[s.id] || "",
      s.steps?.map((step) => `${step.title} ${step.description}`).join(" ") || "",
    ].join(" "),
  );
};

const matchesSearch = (corpus: string, query: string) => {
  const q = normalize(query);
  if (!q) return true;
  const tokens = q.split(/\s+/).filter(Boolean);
  return tokens.every((token) => corpus.includes(token));
};

function Discover() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const searchParams = Route.useSearch();
  const [search, setSearch] = useState(searchParams.q || "");
  const [category, setCategory] = useState(searchParams.category || "All");
  const [duration, setDuration] = useState("Any duration");
  const [sort, setSort] = useState("Featured");
  const categories = [
    "All",
    "Craft Villages",
    "Historical Sites",
    "Museums",
    "Cultural Experiences",
  ];

  // Synchronize state when URL query parameters change (e.g. from homepage search)
  useEffect(() => {
    setSearch(searchParams.q || "");
  }, [searchParams.q]);

  useEffect(() => {
    if (searchParams.category) {
      setCategory(searchParams.category);
    }
  }, [searchParams.category]);

  const submitSearch = (newQuery: string) => {
    const query = newQuery.trim();
    setSearch(newQuery);
    const matched = query
      ? stations.filter((station) => matchesSearch(buildSearchableCorpus(station, t), query))
      : [];

    if (matched.length === 1) {
      navigate({
        to: "/stories/$stationId",
        params: { stationId: matched[0].id },
      });
      return;
    }

    navigate({
      to: "/discover",
      search: (prev) => ({ ...prev, q: query || undefined }),
      replace: true,
    });
  };

  const handleCategorySelect = (c: string) => {
    setCategory(c);
    navigate({
      to: "/discover",
      search: (prev) => ({
        ...prev,
        category: c !== "All" ? c : undefined,
      }),
      replace: true,
    });
  };

  const handleClearFilters = () => {
    setSearch("");
    setCategory("All");
    setDuration("Any duration");
    navigate({
      to: "/discover",
      search: {},
      replace: true,
    });
  };

  let items = stations.filter(
    (s) =>
      (category === "All" || s.category === category) &&
      matchesSearch(buildSearchableCorpus(s, t), search) &&
      (duration === "Any duration" ||
        (duration === "Under 2 hours" ? parseFloat(s.duration) < 2 : parseFloat(s.duration) >= 2)),
  );

  if (sort === "Price: low to high") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "Price: high to low") items = [...items].sort((a, b) => b.price - a.price);

  // Handle direct links from the homepage and other shared search URLs.
  useEffect(() => {
    if (!searchParams.q) return;
    const q = searchParams.q.trim();
    if (!q) return;

    const matched = stations.filter(
      (s) =>
        (category === "All" || s.category === category) &&
        matchesSearch(buildSearchableCorpus(s, t), q),
    );

    if (matched.length === 1) {
      navigate({
        to: "/stories/$stationId",
        params: { stationId: matched[0].id },
        replace: true,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.q]);

  return (
    <main className="pb-24">
      <div className="bg-secondary py-16 sm:py-20">
        <div className="section-wrap text-center">
          <h1 className="mt-4 font-display text-5xl sm:text-6xl uppercase tracking-widest">
            {t("KHÁM PHÁ")}
          </h1>
          <p className="mt-5 max-w-2xl mx-auto leading-8 text-muted-foreground text-lg">
            {t(
              "Từ làng nghề, bảo tàng đến những hoạt động cùng nghệ nhân, mỗi điểm đến đều có câu chuyện riêng để bạn khám phá.",
            )}
          </p>
          <form
            className="relative mt-9 max-w-2xl mx-auto"
            onSubmit={(event) => {
              event.preventDefault();
              submitSearch(search);
            }}
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-primary" size={20} />
            <input
              aria-label={t("Search destinations")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("Tìm địa điểm, làng nghề, bảo tàng hoặc trải nghiệm...")}
              className="h-14 w-full border border-border bg-card pl-14 pr-4 outline-none focus:border-primary shadow-sm"
            />
            <button type="submit" className="sr-only">Search</button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2 text-sm opacity-80 justify-center">
            <span className="font-bold">{t("Gợi ý:")}</span>
            <span
              className="cursor-pointer hover:text-gold"
              onClick={() => submitSearch("Làng lồng đèn")}
            >
              {t("Làng lồng đèn")}
            </span>{" "}
            &middot;
            <span
              className="cursor-pointer hover:text-gold"
              onClick={() => submitSearch("Gốm")}
            >
              {t("Gốm")}
            </span>{" "}
            &middot;
            <span
              className="cursor-pointer hover:text-gold"
              onClick={() => submitSearch("Bảo tàng")}
            >
              {t("Bảo tàng")}
            </span>{" "}
            &middot;
            <span
              className="cursor-pointer hover:text-gold"
              onClick={() => submitSearch("Workshop")}
            >
              {t("Workshop")}
            </span>{" "}
            &middot;
            <span
              className="cursor-pointer hover:text-gold"
              onClick={() => submitSearch("Nghệ nhân")}
            >
              {t("Nghệ nhân")}
            </span>
          </div>
        </div>
      </div>

      <div className="section-wrap pt-9">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <Button
              key={c}
              variant={category === c ? "default" : "outline"}
              onClick={() => handleCategorySelect(c)}
            >
              {t(c)}
            </Button>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-y border-border py-5">
          <span className="text-sm text-muted-foreground font-medium">
            {items.length} {t("trải nghiệm để khám phá")}
          </span>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <SlidersHorizontal size={16} className="text-primary" />
            <select
              aria-label={t("Filter by duration")}
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="Any duration">{t("Mọi thời lượng")}</option>
              <option value="Under 2 hours">{t("Dưới 2 giờ")}</option>
              <option value="2 hours or more">{t("Từ 2 giờ trở lên")}</option>
            </select>
            <select
              aria-label={t("Sort experiences")}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="Featured">{t("Nổi bật")}</option>
              <option value="Price: low to high">{t("Giá: thấp đến cao")}</option>
              <option value="Price: high to low">{t("Giá: cao đến thấp")}</option>
            </select>
          </div>
        </div>

        {items.length ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <StationCard key={s.id} station={s} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center max-w-lg mx-auto">
            <Search size={40} className="mx-auto text-gold opacity-40" />
            <h2 className="mt-6 font-display text-3xl">
              {t("Không tìm thấy trải nghiệm")}
            </h2>
            {search && (
              <p className="mt-3 text-muted-foreground">
                {t("Không có kết quả cho")} <span className="font-semibold text-foreground">"{search}"</span>.{" "}
                {t("Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc.")}
              </p>
            )}
            {!search && (
              <p className="mt-3 text-muted-foreground">
                {t("Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc.")}
              </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button onClick={handleClearFilters}>
                {t("Xóa bộ lọc")}
              </Button>
              <Button asChild variant="outline">
                <Link to="/discover">
                  {t("Xem tất cả")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 border-t border-border pt-8">
              <p className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-widest">
                {t("Gợi ý:")}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Làng lồng đèn", "Gốm", "Bảo tàng", "Workshop", "Nghệ nhân"].map((tip) => (
                  <button
                    key={tip}
                    onClick={() => submitSearch(tip)}
                    className="rounded-full border border-border px-4 py-1.5 text-sm hover:border-gold hover:text-gold transition-colors"
                  >
                    {t(tip)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
