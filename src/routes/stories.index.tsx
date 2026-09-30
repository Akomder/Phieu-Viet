import { createFileRoute } from '@tanstack/react-router';
import { StationCard } from '@/components/site/StationCard';
import { stations } from '@/lib/journey';
import { pageHead } from '@/lib/meta';
export const Route = createFileRoute('/stories/')({ head: () => pageHead('Stories of childhood', 'Read the stories behind light, earth, and flour in the living craft villages of Vietnam.'), component: Stories });
function Stories(){return <main className="section-wrap py-16 sm:py-24"><p className="eyebrow">The living archive</p><h1 className="mt-4 font-display text-5xl sm:text-6xl">Stories worth finding</h1><p className="mt-5 max-w-2xl leading-8 text-muted-foreground">Three chapters. Three traditions. Each story begins here and continues where the craft lives.</p><div className="mt-12 grid gap-6 md:grid-cols-3">{stations.map(s=><StationCard key={s.id} station={s}/>)}</div></main>}
