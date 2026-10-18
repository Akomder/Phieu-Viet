import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock3, MapPin, Star } from "lucide-react";
import { stations, money, type Station } from "@/lib/journey";
import { useTranslation } from "react-i18next";

export function StationCard({ station }: { station: Station }) {
  const { t } = useTranslation();

  return (
    <Link
      to="/stories/$stationId"
      params={{ stationId: station.id }}
      className="glass-card neu-press group block overflow-hidden rounded-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={station.image}
          alt={station.name}
          loading="lazy"
          width={1008}
          height={752}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-primary">
          <span>
            {t("Station")} {station.number} · {t(station.theme)}
          </span>
          <ArrowUpRight size={18} />
        </div>
        <h3 className="font-display text-2xl text-foreground">{t(station.name)}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t(station.teaser)}</p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin size={13} />
            {t(station.location)}
          </span>
          <span className="flex items-center gap-1">
            <Clock3 size={13} />
            {t(station.duration)}
          </span>
          <span className="flex items-center gap-1">
            <Star size={13} />
            {station.rating}
          </span>
          <span className="ml-auto font-semibold text-foreground">
            {t("From")} {money(station.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
export { stations };
