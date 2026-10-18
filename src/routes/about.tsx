import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, HandHeart, CheckCircle, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/meta";
import hero from "@/assets/hero-lanterns.jpg";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/about")({
  head: () => pageHead("Về Phiêu Việt", "Phiêu lưu giữa những câu chuyện văn hóa Việt."),
  component: About,
});

function About() {
  const { t } = useTranslation();

  return (
    <main>
      {/* 1. Phần Đầu Trang */}
      <section className="relative flex min-h-[470px] items-center bg-deep text-primary-foreground">
        <img
          src={hero}
          alt="Lantern craft village"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="section-wrap relative py-16 text-center w-full mt-10">
          <p className="eyebrow !text-gold tracking-widest">{t("PHIÊU VIỆT")}</p>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl mx-auto max-w-4xl leading-tight">
            {t("Phiêu lưu giữa những câu chuyện văn hóa Việt.")}
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto opacity-80 leading-relaxed">
            {t(
              "Phiêu Việt bắt đầu từ mong muốn đưa những câu chuyện văn hóa đến gần hơn với người trẻ, không chỉ để xem hay nghe kể, mà để tự mình tìm đến, trải nghiệm và ghi nhớ.",
            )}
          </p>
        </div>
      </section>

      {/* 2. Về Phiêu Việt & Ý nghĩa tên gọi */}
      <section className="section-wrap py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow !text-primary">{t("VỀ CHÚNG TÔI")}</p>
            <h2 className="mt-4 font-display text-4xl mb-6">{t("Về Phiêu Việt")}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t(
                  "Những giá trị văn hóa vẫn hiện diện trong làng nghề, bảo tàng, di tích, những xưởng thủ công hay trong đôi bàn tay của những người vẫn đang giữ nghề mỗi ngày.",
                )}
              </p>
              <p>
                {t(
                  "Nhưng để tìm được một nơi phù hợp, hiểu câu chuyện phía sau và biết mình có thể trải nghiệm điều gì tại đó đôi khi vẫn còn khá rời rạc.",
                )}
              </p>
              <p className="text-foreground font-medium">
                {t(
                  "Phiêu Việt được tạo ra để kết nối những điểm đến, con người và trải nghiệm ấy theo một cách gần gũi hơn với người trẻ.",
                )}
              </p>
            </div>
          </div>
          <div className="bg-accent/30 p-10 border border-border">
            <h2 className="font-display text-3xl mb-8">{t("Ý nghĩa tên gọi")}</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{t("Phiêu")}</h3>
                <p className="text-muted-foreground">
                  {t(
                    "Là tinh thần tự do khám phá, không nhất thiết phải đi theo một lịch trình cố định. Bạn có thể chọn một nơi, một hoạt động hoặc một bộ sưu tập phù hợp với thời gian của mình.",
                  )}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{t("Việt")}</h3>
                <p className="text-muted-foreground">
                  {t(
                    "Là những câu chuyện, con người, nghề, ký ức và nét văn hóa Việt Nam mà Phiêu Việt muốn đưa người dùng đến gần hơn.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="font-display text-3xl sm:text-5xl text-gold">
            "{t("Phiêu")} {t("là cách mình đi.")} {t("Việt")} {t("là điều mình tìm đến.")}"
          </h2>
        </div>
      </section>

      {/* 4. Sứ mệnh & Tầm nhìn & 5. Giá trị */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="section-wrap">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-display text-4xl mb-4">{t("Sứ mệnh")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  "Tạo ra một cách khám phá văn hóa gần gũi, chủ động và thú vị hơn, đặc biệt với những người trẻ muốn hiểu thêm về văn hóa Việt qua trải nghiệm thực tế.",
                )}
              </p>
            </div>
            <div>
              <h2 className="font-display text-4xl mb-4">{t("Tầm nhìn")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  "Từng bước kết nối thêm nhiều địa điểm, nghệ nhân và câu chuyện ở các vùng miền khác nhau để mỗi chuyến đi đều có thêm một điều đáng nhớ.",
                )}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl text-center mb-12">
              {t("Giá trị Phiêu Việt theo đuổi")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 border border-border text-center">
                <CheckCircle className="mx-auto text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{t("Chân thực")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(
                    "Câu chuyện và trải nghiệm cần bắt đầu từ chính địa điểm, con người và giá trị văn hóa đang hiện hữu.",
                  )}
                </p>
              </div>
              <div className="bg-card p-8 border border-border text-center">
                <Palette className="mx-auto text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{t("Sáng tạo")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(
                    "Văn hóa có thể được kể theo những cách mới, miễn là không làm mất đi giá trị vốn có.",
                  )}
                </p>
              </div>
              <div className="bg-card p-8 border border-border text-center">
                <HandHeart className="mx-auto text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{t("Bền vững")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(
                    "Mỗi trải nghiệm không chỉ tạo giá trị cho người tham gia mà còn hướng đến sự tôn trọng và đồng hành lâu dài với những người đang giữ nghề.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Đội ngũ Phiêu Việt */}
      <section className="section-wrap py-20 text-center">
        <h2 className="font-display text-4xl mb-4">{t("Đội ngũ Phiêu Việt")}</h2>
        <p className="text-xl text-muted-foreground mb-12">
          {t("Những người đứng sau Phiêu Việt")}
        </p>
        <div className="flex justify-center flex-wrap gap-8 max-w-4xl mx-auto">
          {[
            { name: "Nguyễn Thanh Tuyền", title: "Giám đốc Điều hành" },
            { name: "Nguyễn Ngọc Như Quỳnh", title: "Giám đốc Chiến lược" },
            { name: "Trương Thị Hồng Tâm", title: "Giám đốc Sản phẩm" },
            { name: "Viphonhiane Phinphana", title: "Giám đốc Công nghệ" },
            { name: "Trần Thị Hồng Luyến", title: "Giám đốc Vận hành" },
            { name: "Nguyễn Thị Mỹ Nương", title: "Giám đốc Tài chính" },
            { name: "Võ Nguyễn Tường Vy", title: "Nghiên cứu Thị trường" },
            { name: "Hồ Thị Ngọc Tú", title: "Trải nghiệm Khách hàng" },
            { name: "Bành Hạnh Nhi", title: "Thương hiệu & Nội dung" },
            { name: "Nguyễn Ngọc Nhật Quỳnh", title: "Giám đốc Sáng tạo" },
          ].map((member) => (
            <div key={member.name} className="w-48">
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm text-gold mt-1">{t(member.title)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Đối tác đồng hành & 8. Phần dành cho đối tác */}
      <section className="bg-deep py-20 text-primary-foreground">
        <div className="section-wrap text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-4">
            {t("Cùng nhau giữ cho câu chuyện được tiếp tục.")}
          </h2>
          <p className="text-lg opacity-80 mb-16 leading-relaxed">
            {t(
              "Phiêu Việt không tự tạo ra những giá trị văn hóa này. Những câu chuyện và trải nghiệm đều bắt đầu từ chính những người và những nơi đang gìn giữ chúng mỗi ngày.",
            )}
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-20 text-left">
            <div className="bg-black/20 p-6 rounded-lg border border-gold/20">
              <h3 className="font-bold text-lg text-gold mb-2">{t("Nghệ nhân")}</h3>
              <p className="text-sm opacity-80">
                {t("Những người trực tiếp gìn giữ và truyền lại kỹ năng, câu chuyện.")}
              </p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg border border-gold/20">
              <h3 className="font-bold text-lg text-gold mb-2">{t("Làng nghề")}</h3>
              <p className="text-sm opacity-80">
                {t("Những nơi tạo nên bối cảnh thật cho mỗi trải nghiệm.")}
              </p>
            </div>
            <div className="bg-black/20 p-6 rounded-lg border border-gold/20">
              <h3 className="font-bold text-lg text-gold mb-2">{t("Bảo tàng")}</h3>
              <p className="text-sm opacity-80">
                {t("Những đơn vị lưu giữ, giới thiệu và lan tỏa các giá trị văn hóa.")}
              </p>
            </div>
          </div>

          <div className="bg-card text-foreground p-12 rounded-xl">
            <h2 className="font-display text-3xl mb-4">
              {t("Bạn đang giữ một câu chuyện văn hóa?")}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t(
                "Nếu bạn là nghệ nhân, cơ sở làng nghề, không gian văn hóa hoặc đơn vị tổ chức trải nghiệm, Phiêu Việt mong muốn được kết nối và cùng xây dựng.",
              )}
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/partner">{t("Trở thành đối tác")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:hello@phieuviet.com">{t("Liên hệ Phiêu Việt")}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
