import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useJourney } from '@/components/site/JourneyContext';
import { useLanguage } from '@/components/site/LanguageContext';
import { getStation } from '@/lib/journey';
import { pageHead } from '@/lib/meta';

export const Route = createFileRoute('/quiz/$stationId')({
  head: () => pageHead('Memory sharing station', 'Reflect on your cultural experience and collect a memory piece.'),
  component: Quiz,
});

function Quiz() {
  const { stationId } = Route.useParams();
  const station = getStation(stationId);
  const navigate = useNavigate();
  const { journey, update } = useJourney();
  const { language } = useLanguage();
  const [step, setStep] = useState(0);
  const [actions, setActions] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [choice, setChoice] = useState('');

  if (!station) return <main className="section-wrap py-24">Station not found.</main>;
  if (!journey.unlocked.includes(station.id)) {
    return <main className="section-wrap py-24 text-center"><h1 className="font-display text-3xl">Unlock this station first</h1><Button asChild className="mt-6"><Link to="/unlock/$stationId" params={{ stationId: station.id }}>Go to unlock</Link></Button></main>;
  }

  const experienceOptions = {
    'phu-binh': { en: 'I used the bamboo pole to retrieve a lantern.', vi: 'Tôi đã tự tay dùng sào tre rút lồng đèn' },
    'tan-khanh': { en: 'I found the clay piggy bank.', vi: 'Tôi đã tìm heo đất' },
    'to-he': { en: 'I followed the clue to find a to he figure.', vi: 'Tôi đã tìm tò he theo manh mối' },
  } as const;
  const firstAction = experienceOptions[station.id as keyof typeof experienceOptions]?.[language] ?? (language === 'vi' ? 'Tôi đã đi theo manh mối.' : 'I followed the clue.');
  const experienceQuestion = language === 'vi' ? 'Bạn đã trải nghiệm điều gì?' : 'What did you experience?';
  const sharedActions = language === 'vi'
    ? ['Tôi đã trò chuyện với nghệ nhân.', 'Tôi đã khám phá trạm.']
    : ['I talked with the artisan.', 'I explored the station.'];
  const returnQuestion = language === 'vi' ? 'Bạn có quay lại để chinh phục trạm tiếp theo không?' : 'Would you come back to conquer the next station?';
  const returnOptions = language === 'vi'
    ? ['Chắc chắn rồi! Lên đường sang trạm tiếp theo ngay đây.', 'Hơi mệt chút nhưng rất háo hức muốn xem trạm kế tiếp có gì.', 'Từ từ để tôi rủ thêm cạ cứng cùng đi chinh phục trạm sau.']
    : ["Definitely — I'm ready for the next station.", "I'm a little tired, but excited to see what the next station has in store.", "I'll invite my closest friends and come back to conquer the next station."];

  function finish() {
    update((current) => ({
      ...current,
      completed: current.completed.includes(stationId) ? current.completed : [...current.completed, stationId],
      reviews: rating ? [...current.reviews.filter((review) => review.stationId !== stationId), { stationId, rating, text }] : current.reviews,
    }));
    navigate({ to: '/passport' });
  }

  return <main className="section-wrap max-w-3xl py-16 sm:py-24">
    <p className="eyebrow">After the experience</p>
    <h1 className="mt-4 font-display text-5xl">Memory Sharing Station</h1>
    <p className="mt-5 text-muted-foreground">{station.name}</p>
    <div className="mt-10 flex gap-2">{[0, 1, 2].map((index) => <div key={index} className={`h-1.5 flex-1 ${index <= step ? 'bg-primary' : 'bg-border'}`} />)}</div>
    <div className="mt-9 border border-gold bg-card p-8 sm:p-12">
      <p className="eyebrow">Question {step + 1} of 3</p>
      {step === 0 && <>
        <h2 className="mt-4 font-display text-3xl">{experienceQuestion}</h2>
        <div className="mt-8 space-y-3">{[firstAction, ...sharedActions].map((action) => <label key={action} className="flex cursor-pointer items-center gap-3 border border-border p-4"><input type="checkbox" checked={actions.includes(action)} onChange={() => setActions(actions.includes(action) ? actions.filter((item) => item !== action) : [...actions, action])} className="accent-primary" />{action}</label>)}</div>
      </>}
      {step === 1 && <>
        <h2 className="mt-4 font-display text-3xl">How did you feel?</h2>
        <div className="mt-7 flex gap-2">{[1, 2, 3, 4, 5].map((number) => <Button key={number} variant="ghost" size="icon" aria-label={`Rate ${number} stars`} onClick={() => setRating(number)}><Star size={24} className={number <= rating ? 'fill-gold text-gold' : 'text-muted-foreground'} /></Button>)}</div>
        <textarea value={text} onChange={(event) => setText(event.target.value)} placeholder="Tell us about your experience..." aria-label="Your experience" className="mt-6 h-32 w-full resize-none border border-border bg-background p-4 outline-none focus:border-primary" />
      </>}
      {step === 2 && <>
        <h2 className="mt-4 font-display text-3xl">{returnQuestion}</h2>
        <div className="mt-8 space-y-3">{returnOptions.map((answer) => <Button key={answer} variant={choice === answer ? 'default' : 'outline'} onClick={() => setChoice(answer)} className="h-auto min-h-12 w-full justify-start whitespace-normal py-3 text-left">{choice === answer && <Check />}{answer}</Button>)}</div>
      </>}
      <div className="mt-9 flex gap-3">{step < 2 ? <Button onClick={() => setStep(step + 1)}>Next question <ArrowRight /></Button> : <Button onClick={finish}>Collect memory piece <ArrowRight /></Button>}{step > 0 && <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}</div>
    </div>
  </main>;
}
