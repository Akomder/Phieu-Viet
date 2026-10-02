import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, BookOpen, Compass, Gift, MapPin, QrCode, Sparkles, Stamp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StationCard } from '@/components/site/StationCard';
import { useLanguage } from '@/components/site/LanguageContext';
import { stations } from '@/lib/journey';
import { pageHead } from '@/lib/meta';
import hero from '@/assets/hero-lanterns.jpg';
import lantern from '@/assets/craft-lantern.jpg';
export const Route = createFileRoute('/')({ head: () => pageHead('Cultural journeys', 'Rediscover memories and reconnect with authentic Vietnamese heritage through stories, craft villages, and cultural experiences.'), component: Home });
function Home() {
  const { language } = useLanguage();
  const isVietnamese = language === 'vi';
  const copy = isVietnamese ? {
    eyebrow: 'Hành trình qua di sản Việt Nam',
    intro: 'Tìm lại ký ức, chạm vào nguyên bản.',
    begin: 'Bắt đầu hành trình',
    explore: 'Khám phá câu chuyện',
    behind: 'Câu chuyện phía sau hành trình',
    behindTitle: 'Có những ký ức cần được sống lại.',
    behindText: 'Một chiếc đèn lồng sáng trong đêm. Những đồng tiền đầu tiên trong chú heo đất. Một hình hài nhỏ được nặn bằng tay. Phiêu Việt đưa bạn đến những xưởng nghề, câu chuyện và con người đang gìn giữ ký ức tuổi thơ.',
    ourStory: 'Câu chuyện của chúng tôi',
    featured: 'Trải nghiệm được tuyển chọn',
    discoverAll: 'Khám phá tất cả',
  } : {
    eyebrow: 'A journey through Vietnamese heritage',
    intro: 'Rediscover memories in the places where they were made.',
    begin: 'Begin the Journey',
    explore: 'Explore the Stories',
    behind: 'The story behind the journey',
    behindTitle: 'Some memories are meant to be lived again.',
    behindText: 'A lantern glowing in the night. The first coins in a clay piggy bank. A tiny figure shaped by hand. Phiêu Việt takes you beyond the screen and into the workshops, stories, and people keeping childhood traditions alive.',
    ourStory: 'Our story',
    featured: 'Curated for the curious',
    discoverAll: 'Discover all',
  };
  return <main className="page-enter">
  <section className="relative flex min-h-[610px] items-center overflow-hidden bg-deep text-primary-foreground lg:min-h-[690px]">
    <img src={hero} alt="Lanterns and an artisan at a Vietnamese craft village" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-center" />
    <div className="hero-shade absolute inset-0" /><div className="section-wrap motion-stagger relative z-10 py-24">
      <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.25em] text-gold"><span className="h-px w-10 bg-gold"/> {copy.eyebrow}</div>
      <h1 className="max-w-[820px] font-display text-5xl leading-[1.16] font-medium sm:text-6xl lg:text-[84px]">Vệt nắng<br/>năm tháng</h1>
      <p className="mt-4 font-display text-2xl italic sm:text-4xl">{isVietnamese ? 'Mảnh ghép tuổi thơ' : 'Fragments of childhood'}</p><p className="mt-7 max-w-lg text-base leading-8 opacity-90">{copy.intro}</p>
      <div className="mt-9 flex flex-wrap gap-3"><Button asChild variant="hero" size="hero"><Link to="/discover">{copy.begin} <ArrowRight/></Link></Button><Button asChild variant="heroOutline" size="hero"><Link to="/stories">{copy.explore}</Link></Button></div>
    </div>
  </section>
  <section className="paper-grain bg-background py-20 sm:py-28"><div className="section-wrap grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow">The story behind the journey</p><h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">Some memories are meant to be lived again.</h2></div><div className="border-l-2 border-gold pl-7"><p className="text-base leading-8 text-muted-foreground">A lantern glowing in the night. The first coins in a clay piggy bank. A tiny figure shaped by hand. Phiêu Việt takes you beyond the screen and into the workshops, stories, and people keeping childhood traditions alive.</p><Link to="/about" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">Our story <ArrowRight size={16}/></Link></div></div></section>
  <section className="bg-background py-20 sm:py-28"><div className="section-wrap"><div className="flex items-end justify-between gap-6"><div><p className="eyebrow">Curated for the curious</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Featured experiences</h2></div><Button asChild variant="editorial"><Link to="/discover">Discover all <ArrowRight/></Link></Button></div><div className="mt-10 grid gap-6 md:grid-cols-3">{stations.map(station => <StationCard key={station.id} station={station}/>)}</div></div></section>
  <section className="bg-deep py-20 text-primary-foreground sm:py-28"><div className="section-wrap"><div className="text-center"><p className="eyebrow !text-gold">Your story starts here</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">The journey is yours to make.</h2></div><div className="mt-14 grid gap-10 md:grid-cols-4">{([[Compass,'01','Discover','Find the places and stories that call to you.'],[BookOpen,'02','Read & book','Get to know the craft, then reserve your place.'],[QrCode,'03','Visit & unlock','Follow the clues at the destination and reveal more.'],[Gift,'04','Keep the memory','Collect a piece of the journey in your Việt Ký.']] as const).map(([Icon,n,title,copy]) => <div key={n} className="border-t border-gold/60 pt-6"><Icon size={25} className="text-gold"/><span className="mt-8 block text-xs tracking-widest text-gold">{n} / 04</span><h3 className="mt-2 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 opacity-70">{copy}</p></div>)}</div></div></section>
  <section className="paper-grain bg-background py-20 sm:py-28"><div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-24"><div><p className="eyebrow">A collection of moments</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Every place leaves a little piece of itself with you.</h2><p className="mt-6 max-w-lg leading-8 text-muted-foreground">Collect memory pieces and digital stamps as you explore. Your Việt Ký is a living record of where you've been and what you've felt.</p><Button asChild className="mt-8" variant="editorial"><Link to="/passport">Open your Việt Ký <ArrowRight/></Link></Button></div><div className="relative mx-auto w-full max-w-md border border-gold bg-card p-5 shadow-xl sm:p-8"><div className="border border-gold p-6 sm:p-9"><span className="eyebrow">Cultural passport · No. 001</span><h3 className="mt-5 font-display text-4xl text-primary">Việt Ký</h3><p className="mt-1 text-sm text-muted-foreground">Your cultural journey</p><div className="my-8 h-px bg-border"/><div className="flex flex-wrap gap-3 justify-center">{stations.map(s => <div key={s.id} className="stamp flex aspect-square flex-col items-center justify-center text-center text-gold w-16 sm:w-20"><Stamp size={20}/><span className="mt-2 text-[10px] font-bold uppercase tracking-widest">{s.theme}</span></div>)}</div><p className="mt-8 text-center text-xs uppercase tracking-widest text-muted-foreground">The stories you take with you</p></div></div></div></section>
  <section className="bg-secondary py-20 sm:py-24"><div className="section-wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow">Made around you</p><h2 className="mt-3 font-display text-4xl">Not sure where to begin?</h2><p className="mt-4 text-muted-foreground">Tell us what you love. We’ll sketch a cultural journey just for you.</p></div><Button asChild size="hero"><Link to="/designer"><Sparkles/> Design your journey</Link></Button></div></section>
  <section className="bg-warm py-20 sm:py-28"><div className="section-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20"><img src={lantern} alt="Lantern artisan at work" width={1008} height={752} loading="lazy" className="aspect-[5/4] w-full object-cover"/><div><p className="eyebrow">The hands behind the heritage</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Meet the makers who keep stories alive.</h2><p className="mt-6 leading-8 text-muted-foreground">At every stop, a local artisan welcomes you into a craft passed through generations. More than an activity, it is a chance to listen, learn, and make something worth keeping.</p><Button asChild variant="editorial" className="mt-8"><Link to="/about">Meet Phiêu Việt <ArrowRight/></Link></Button></div></div></section>
  <section className="bg-background py-20 sm:py-24"><div className="section-wrap text-center"><p className="eyebrow">Words from the journey</p><div className="mt-6 flex justify-center gap-1 text-gold">{Array.from({length:5}).map((_,i) => <Star key={i} size={17} fill="currentColor"/>)}</div><blockquote className="mx-auto mt-7 max-w-3xl font-display text-2xl leading-relaxed italic sm:text-3xl">“The loveliest part was sitting with the maker and hearing how a simple lantern carried so many memories.”</blockquote><p className="mt-7 text-xs font-semibold uppercase tracking-widest text-muted-foreground">A journey worth remembering</p></div></section>
  <section className="bg-primary py-20 text-center text-primary-foreground sm:py-28"><div className="section-wrap"><p className="text-deep text-xs font-bold uppercase tracking-[.25em]">Your story is still unfolding</p><h2 className="mt-4 font-display text-4xl sm:text-6xl">Your next memory is waiting.</h2><p className="mx-auto mt-5 max-w-xl leading-8 opacity-85">Step beyond the screen. Meet the people, places, crafts and stories that make Vietnamese heritage unforgettable.</p><Button asChild variant="heroOutline" size="hero" className="mt-9"><Link to="/discover">Begin Your Journey <ArrowRight/></Link></Button></div></section>
</main>; }
