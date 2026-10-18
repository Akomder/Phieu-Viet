import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Compass, Palette, BookOpen, Search, Star, QrCode, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { pageHead } from "@/lib/meta";
import hero from "@/assets/hero-lanterns.jpg";
import lantern from "@/assets/craft-lantern.jpg";
import st1 from "@/assets/st1.png";
import st2 from "@/assets/st2.png";
import st3 from "@/assets/st3.png";
import st4 from "@/assets/st4.png";
import vt1 from "@/assets/vt1.png";
import vt2 from "@/assets/vt2.png";
import vt3 from "@/assets/vt3.png";

export const Route = createFileRoute("/")({
  head: () => pageHead("Trang chủ", "Phiêu lưu giữa những câu chuyện văn hóa Việt."),
  component: Home,
});

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    navigate({
      to: "/discover",
      search: query ? { q: query } : {},
    });
  };

  return (
    <main className="page-enter">
      {/* SECTION 1 - HERO */}
      <section className="relative flex min-h-[610px] items-center overflow-hidden bg-deep text-primary-foreground lg:min-h-[690px]">
        <img
          src={hero}
          alt="Vietnam heritage"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="section-wrap relative z-10 py-24 w-full flex flex-col items-center text-center">
          <h1 className="font-display text-7xl sm:text-[100px] font-bold tracking-widest drop-shadow-lg mb-2">
            PHIÊU VIỆT
          </h1>
          <p className="mt-4 font-sans text-3xl sm:text-5xl font-semibold drop-shadow-md">
            {t("Phiêu lưu giữa những câu chuyện văn hóa Việt.")}
          </p>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl opacity-90 drop-shadow-md">
            {t("Mỗi điểm đến mở ra một câu chuyện văn hóa đang chờ bạn khám phá.")}
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-12 w-full max-w-3xl bg-transparent border border-white/30 backdrop-blur-md rounded-full p-2 flex items-center shadow-2xl relative"
          >
            <Search className="w-6 h-6 text-white/80 ml-6 mr-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Tìm địa điểm, làng nghề, bảo tàng hoặc trải nghiệm...")}
              className="flex-1 !bg-transparent !border-none !shadow-none text-white placeholder:text-white/70 h-14 text-lg focus:outline-none focus:ring-0 min-w-0"
            />
            <button
              type="submit"
              className="w-14 h-14 bg-[#D48A76] hover:bg-[#D48A76]/90 transition-colors rounded-full flex items-center justify-center shadow-md ml-2 flex-shrink-0"
            >
              <ArrowRight className="text-white w-6 h-6" />
            </button>
          </form>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-sm sm:text-base opacity-90">
            <span>{t("Gợi ý:")}</span>
            <Link
              to="/discover"
              search={{ q: "Làng lồng đèn" }}
              className="hover:text-gold transition-colors"
            >
              {t("Làng lồng đèn")}
            </Link>
            <span>&middot;</span>
            <Link
              to="/discover"
              search={{ q: "Gốm" }}
              className="hover:text-gold transition-colors"
            >
              {t("Gốm")}
            </Link>
            <span>&middot;</span>
            <Link
              to="/discover"
              search={{ q: "Bảo tàng" }}
              className="hover:text-gold transition-colors"
            >
              {t("Bảo tàng")}
            </Link>
            <span>&middot;</span>
            <Link
              to="/discover"
              search={{ q: "Workshop" }}
              className="hover:text-gold transition-colors"
            >
              Workshop
            </Link>
            <span>&middot;</span>
            <Link
              to="/discover"
              search={{ q: "Nghệ nhân" }}
              className="hover:text-gold transition-colors"
            >
              {t("Nghệ nhân")}
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Button
              asChild
              className="bg-[#D48A76] hover:bg-[#D48A76]/90 text-white rounded-full px-10 py-7 text-xl font-medium shadow-lg transition-transform hover:scale-105"
            >
              <Link to="/discover">
                Explore ngay <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-xl font-medium shadow-lg transition-transform hover:scale-105"
            >
              <Link to="/passport">
                <BookOpen className="mr-3 w-5 h-5" /> See the journey
              </Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="bg-gold text-deep hover:bg-gold/90 rounded-full px-10 py-7 text-xl font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform hover:scale-105"
            >
              <Link to="/mvp">
                Trải nghiệm MVP <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PHIÊU VIỆT CÓ GÌ? */}
      <section className="bg-[#FFFDF9] py-20 sm:py-28">
        <div className="section-wrap text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold/50"></div>
            <Star className="text-gold w-5 h-5 fill-gold" />
            <div className="h-[1px] w-12 bg-gold/50"></div>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[#8C271E] font-bold">
            {t("Phiêu Việt có gì?")}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            {t("Bạn có thể chọn cách khám phá phù hợp với mình.")}
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3 text-left max-w-6xl mx-auto">
            <div className="bg-[#FFFDF9] rounded-2xl border border-gold/20 p-8 flex flex-col shadow-sm hover:shadow-md hover:border-gold/40 transition-all group">
              <div className="h-56 w-full rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={vt1}
                  alt="Điểm khám phá"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
              <h3 className="font-display text-2xl mb-3 text-[#8C271E]">{t("Điểm khám phá")}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                {t("Làng nghề, bảo tàng, di tích và những không gian văn hóa.")}
              </p>
              <Link
                to="/discover"
                className="text-[#8C271E] font-semibold text-sm flex items-center gap-2 hover:text-gold transition-colors tracking-widest uppercase"
              >
                <ArrowRight className="w-4 h-4" /> {t("Khám phá")}
              </Link>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl border border-gold/20 p-8 flex flex-col shadow-sm hover:shadow-md hover:border-gold/40 transition-all group">
              <div className="h-56 w-full rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={vt2}
                  alt="Hoạt động trải nghiệm"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
              <h3 className="font-display text-2xl mb-3 text-[#8C271E]">
                {t("Hoạt động trải nghiệm")}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                {t("Thử làm, thử học và gặp gỡ những người đang giữ nghề.")}
              </p>
              <Link
                to="/discover"
                className="text-[#8C271E] font-semibold text-sm flex items-center gap-2 hover:text-gold transition-colors tracking-widest uppercase"
              >
                <ArrowRight className="w-4 h-4" /> {t("Khám phá")}
              </Link>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl border border-gold/20 p-8 flex flex-col shadow-sm hover:shadow-md hover:border-gold/40 transition-all group">
              <div className="h-56 w-full rounded-xl mb-6 flex items-center justify-center overflow-hidden bg-[#F5EBE1]">
                <img
                  src={vt3}
                  alt="Việt Ký"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply"
                />
              </div>
              <h3 className="font-display text-2xl mb-3 text-[#8C271E]">{t("Việt Ký")}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                {t("Nhiều điểm đến được nối lại bằng một câu chuyện chung.")}
              </p>
              <Link
                to="/journeys"
                className="text-[#8C271E] font-semibold text-sm flex items-center gap-2 hover:text-gold transition-colors tracking-widest uppercase"
              >
                <ArrowRight className="w-4 h-4" /> {t("Việt Ký")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - HÀNH TRÌNH VIỆT KÝ NỔI BẬT */}
      <section className="bg-warm py-20 sm:py-28 border-t border-border/50">
        <div className="section-wrap grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow !text-gold mb-4">{t("Hành trình Việt Ký nổi bật")}</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-4">{t("Vệt Nắng Năm Tháng")}</h2>
            <p className="font-display text-2xl text-primary/80 mb-6">{t("Mảnh Ghép Tuổi Thơ")}</p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t("Một bức tranh ký ức đang chờ được hoàn thiện.")}
            </p>
            <Button asChild size="lg" className="px-8 text-lg">
              <Link to="/vet-nang-nam-thang">
                {t("Khám phá bộ sưu tập")} <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2 aspect-square max-w-md mx-auto w-full group/grid cursor-pointer">
            <Link
              to="/vet-nang-nam-thang"
              className="relative overflow-hidden bg-card/40 border border-gold/20 flex flex-col items-center justify-center p-4 rounded-tl-2xl hover:z-10 hover:scale-105 hover:rotate-2 hover:shadow-2xl transition-all duration-300"
            >
              <img src={st1} className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-deep/40 mix-blend-multiply" />
              <span className="relative z-10 font-bold text-sm uppercase drop-shadow-md text-white">
                {t("Ánh sáng")}
              </span>
            </Link>
            <Link
              to="/vet-nang-nam-thang"
              className="relative overflow-hidden bg-card/40 border border-gold/20 flex flex-col items-center justify-center p-4 rounded-tr-2xl hover:z-10 hover:scale-105 hover:-rotate-2 hover:shadow-2xl transition-all duration-300"
            >
              <img src={st2} className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-deep/40 mix-blend-multiply" />
              <span className="relative z-10 font-bold text-sm uppercase drop-shadow-md text-white">
                {t("Hình hài")}
              </span>
            </Link>
            <Link
              to="/vet-nang-nam-thang"
              className="relative overflow-hidden bg-card/40 border border-gold/20 flex flex-col items-center justify-center p-4 rounded-bl-2xl hover:z-10 hover:scale-105 hover:-rotate-2 hover:shadow-2xl transition-all duration-300"
            >
              <img src={st3} className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-deep/40 mix-blend-multiply" />
              <span className="relative z-10 font-bold text-sm uppercase drop-shadow-md text-white">
                {t("Sắc màu")}
              </span>
            </Link>
            <Link
              to="/vet-nang-nam-thang"
              className="relative overflow-hidden bg-card/40 border border-gold/20 flex flex-col items-center justify-center p-4 rounded-br-2xl hover:z-10 hover:scale-105 hover:rotate-2 hover:shadow-2xl transition-all duration-300"
            >
              <img src={st4} className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-deep/40 mix-blend-multiply" />
              <span className="relative z-10 font-bold text-sm uppercase text-center drop-shadow-md text-white">
                {t("Ký ức của chính bạn")}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - HÀNH TRÌNH NÀY LÀ CỦA BẠN */}
      <section className="bg-[#2D1615] text-white py-24 sm:py-32">
        <div className="section-wrap max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 sm:mb-24">
            <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">
              {t("CÂU CHUYỆN CỦA BẠN BẮT ĐẦU TỪ ĐÂY")}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-wide">
              {t("Hành trình này là của bạn.")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="flex flex-col items-start border-t border-white/10 pt-8">
              <Compass className="text-gold w-7 h-7 mb-8" strokeWidth={1.5} />
              <p className="text-gold text-xs font-semibold mb-3 tracking-widest">01 / 04</p>
              <h3 className="font-display text-2xl mb-4 tracking-wide">{t("Khám phá")}</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {t("Tìm địa điểm, hoạt động hoặc bộ sưu tập mà bạn muốn trải nghiệm.")}
              </p>
            </div>

            <div className="flex flex-col items-start border-t border-white/10 pt-8">
              <BookOpen className="text-gold w-7 h-7 mb-8" strokeWidth={1.5} />
              <p className="text-gold text-xs font-semibold mb-3 tracking-widest">02 / 04</p>
              <h3 className="font-display text-2xl mb-4 tracking-wide">{t("Chọn và chuẩn bị")}</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {t("Xem thông tin, thời gian và đặt chỗ nếu hoạt động yêu cầu đăng ký trước.")}
              </p>
            </div>

            <div className="flex flex-col items-start border-t border-white/10 pt-8">
              <QrCode className="text-gold w-7 h-7 mb-8" strokeWidth={1.5} />
              <p className="text-gold text-xs font-semibold mb-3 tracking-widest">03 / 04</p>
              <h3 className="font-display text-2xl mb-4 tracking-wide">
                {t("Trải nghiệm và hoàn thành thử thách")}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {t("Đến địa điểm, tìm hiểu câu chuyện, nhận manh mối và hoàn thành nhiệm vụ.")}
              </p>
            </div>

            <div className="flex flex-col items-start border-t border-white/10 pt-8">
              <Gift className="text-gold w-7 h-7 mb-8" strokeWidth={1.5} />
              <p className="text-gold text-xs font-semibold mb-3 tracking-widest">04 / 04</p>
              <h3 className="font-display text-2xl mb-4 tracking-wide">
                {t("Lưu lại trong Việt Ký")}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {t(
                  "Mở khóa dấu hoặc mảnh ghép và tiếp tục khám phá những phần còn lại của bộ sưu tập.",
                )}
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-[#2D1615] font-bold rounded-full px-12 py-7 text-sm tracking-widest uppercase shadow-lg transition-transform hover:scale-105"
            >
              <Link to="/discover">{t("BẮT ĐẦU KHÁM PHÁ")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5 - LỜI KỂ TỪ HÀNH TRÌNH */}
      <section className="bg-[#FFFDF9] py-24 sm:py-32 border-t border-gold/20">
        <div className="section-wrap max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#D48A76] font-bold tracking-widest uppercase text-xs mb-16">
            {t("LỜI KỂ TỪ HÀNH TRÌNH")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-8 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <p className="font-display italic text-2xl sm:text-[26px] text-[#8C271E] leading-relaxed mb-8 flex-grow">
                “Mình thích nhất là mỗi nơi không chỉ để ghé qua chụp hình, mà còn có câu chuyện và
                nhiệm vụ để mình chú ý hơn đến những chi tiết xung quanh.”
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase font-semibold">
                Ngọc Anh &middot; Sinh viên
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-8 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <p className="font-display italic text-2xl sm:text-[26px] text-[#8C271E] leading-relaxed mb-8 flex-grow">
                “Đi theo hành trình như vậy dễ hơn tự tìm từng chỗ riêng lẻ. Mình biết nên bắt đầu
                từ đâu, đi tiếp chỗ nào và mỗi điểm đều có cái để nhớ.”
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase font-semibold">
                Hoàng Minh &middot; Nhân viên văn phòng
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-8 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <p className="font-display italic text-2xl sm:text-[26px] text-[#8C271E] leading-relaxed mb-8 flex-grow">
                “Phần mình thấy thú vị nhất là mấy dấu và mảnh ghép trong Việt Ký. Hoàn thành xong
                một điểm thì có cảm giác muốn đi tiếp cho đủ cả hành trình.”
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase font-semibold">
                Thảo Vy &middot; Sinh viên
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Add a simple LockKeyhole icon component if lucide-react fails
function LockKeyhole({ className }: { className?: string }) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  );
}
