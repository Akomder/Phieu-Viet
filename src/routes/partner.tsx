import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, QrCode, Star, Ticket, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useJourney } from "@/components/site/JourneyContext";
import { getStation, money } from "@/lib/journey";
import { pageHead } from "@/lib/meta";
import { useTranslation } from "react-i18next";
export const Route = createFileRoute("/partner")({
  head: () =>
    pageHead(
      "Partner portal",
      "Prototype partner overview for visits, bookings, and experience quality.",
    ),
  component: Partner,
});
function Partner() {
  const { t } = useTranslation();
  const { journey } = useJourney();
  const [commission, setCommission] = useState(20);
  const [id, setId] = useState("");
  const [verified, setVerified] = useState(false);
  const booking = journey.bookings.find((b) => b.id.toLowerCase() === id.trim().toLowerCase());
  const gross = journey.bookings.reduce(
    (sum, b) => sum + (getStation(b.stationId)?.price || 0) * b.participants,
    0,
  );
  return (
    <main className="section-wrap py-16 sm:py-24">
      <p className="eyebrow">{t("Phiêu Việt · Partner workspace")}</p>
      <h1 className="mt-4 font-display text-5xl">{t("Partner Dashboard")}</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        {t("Prototype figures based on bookings saved on this device; not a live partner account.")}
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          [t("Bookings"), journey.bookings.length, Ticket],
          [t("Completed experiences"), journey.completed.length, CheckCircle2],
          [t("Gross booking value"), money(gross), Wallet],
          [t("Reviews"), journey.reviews.length, Star],
        ].map(([label, value, Icon]) => (
          <div key={String(label)} className="border border-border bg-card p-5">
            {typeof Icon === "function" && <Icon size={23} className="text-primary" />}
            <strong className="mt-5 block font-display text-2xl">{String(value)}</strong>
            <span className="mt-2 block text-xs text-muted-foreground">{String(label)}</span>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="border border-gold bg-card p-7">
          <div className="flex items-center gap-3">
            <QrCode className="text-primary" />
            <h2 className="font-display text-2xl">{t("Verify booking")}</h2>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("Enter a prototype booking ID from a digital ticket.")}
          </p>
          <div className="mt-5 flex gap-2">
            <input
              aria-label={t("Booking ID")}
              value={id}
              onChange={(e) => {
                setId(e.target.value);
                setVerified(false);
              }}
              placeholder="PV-..."
              className="min-w-0 flex-1 border border-border bg-background px-3 outline-none focus:border-primary"
            />
            <Button onClick={() => setVerified(true)}>{t("Look up")}</Button>
          </div>
          {verified && (
            <div className="mt-5 border-t border-border pt-5 text-sm">
              {booking ? (
                <>
                  <p className="font-semibold text-primary">{t("Booking found")}</p>
                  <p className="mt-2">{t("Experience")}: {t(getStation(booking.stationId)?.name || "")}</p>
                  <p>
                    {t("Date")}: {booking.date} · {booking.time}
                  </p>
                  <p>{t("Guests")}: {booking.participants}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {t("This lookup does not confirm actual admission.")}
                  </p>
                </>
              ) : (
                <p role="alert" className="text-destructive">
                  {t("No matching prototype booking on this device.")}
                </p>
              )}
            </div>
          )}
        </section>
        <section className="border border-gold bg-card p-7">
          <div className="flex items-center gap-3">
            <Wallet className="text-primary" />
            <h2 className="font-display text-2xl">{t("Revenue breakdown")}</h2>
          </div>
          <label className="mt-6 block text-sm">
            {t("Platform commission")}: <strong>{commission}%</strong>
            <input
              aria-label={t("Platform commission")}
              type="range"
              min="15"
              max="25"
              value={commission}
              onChange={(e) => setCommission(Number(e.target.value))}
              className="mt-4 w-full accent-primary"
            />
          </label>
          <div className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
            <div className="flex justify-between">
              <span>{t("Gross booking value")}</span>
              <strong>{money(gross)}</strong>
            </div>
            <div className="flex justify-between">
              <span>{t("Platform commission")}</span>
              <strong>{money((gross * commission) / 100)}</strong>
            </div>
            <div className="flex justify-between text-primary">
              <span>{t("Partner revenue")}</span>
              <strong>{money(gross * (1 - commission / 100))}</strong>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-12">
        <div className="flex items-center gap-3">
          <Users className="text-primary" />
          <h2 className="font-display text-2xl">{t("Experience quality")}</h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Artisan interaction", "Experience completion", "Customer satisfaction"].map(
            (label) => (
              <div key={label} className="border border-border bg-card p-5">
                <p className="text-sm font-semibold">{t(label)}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {t("Awaiting real partner feedback data")}
                </p>
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}
