import lantern from '@/assets/craft-lantern.jpg';
import piggy from '@/assets/craft-piggy.jpg';
import tohe from '@/assets/craft-tohe.jpg';

export type Station = {
  id: string; number: string; name: string; theme: string; category: string; location: string;
  image: string; duration: string; price: number; rating: string; artisan: string;
  teaser: string; story: string; lockedStory: string; challenge: string; steps: { title: string; description: string }[];
};
export const stations: Station[] = [
  { id: 'phu-binh', number: '01', name: 'Phú Bình Lantern Village', theme: 'LIGHT', category: 'Craft Villages', location: 'Hồ Chí Minh City', image: lantern, duration: '2 hours', price: 320000, rating: '4.9', artisan: 'The lantern makers of Phú Bình', teaser: 'Memories of light beneath the full moon.', story: 'Long before the streets glowed with electric light, a lantern was enough to turn an evening into a celebration. In Phú Bình, skilled hands still bend bamboo into delicate frames and stretch vibrant paper across them. The craft carries the anticipation of a childhood Mid-Autumn Festival: the rustle of paper, the warmth of a candle, and the joy of walking beneath the moon.', lockedStory: 'In the quiet of the workshop, each artisan has a story that no photograph can quite capture. Come closer, follow the lantern trail, and discover the chapter waiting at the village.', challenge: 'Search for the Old Light', steps: [{ title: 'Locate the Alley', description: "Follow the clues to locate the artisan's home." }, { title: 'Decode the Hanging Rack', description: 'Find the lantern marked with a five-pointed star and the shortest red ribbon.' }, { title: 'Retrieve the Lantern', description: 'Use the bamboo pole to carefully retrieve the lantern you discovered.' }] },
  { id: 'tan-khanh', number: '02', name: 'Tân Khánh Piggy Bank Village', theme: 'EARTH', category: 'Craft Villages', location: 'Bình Dương', image: piggy, duration: '2.5 hours', price: 280000, rating: '4.8', artisan: 'The clay artisans of Tân Khánh', teaser: 'The sound of clay and childhood savings.', story: 'A small clay piggy bank once held a world of possibilities. At Tân Khánh, artisans shape earth into the familiar childhood companion, then add color and character by hand. Every piece begins as a lump of clay and ends as a vessel for hopes, plans, and little treasures.', lockedStory: 'There is more to this craft than meets the eye. Listen for the workshop sounds and find the piece that tells your own story.', challenge: 'Search for a Piece of Childhood Color', steps: [{ title: 'Follow the Sound', description: 'Let the sounds of traditional craftsmanship guide you through the workshop.' }, { title: 'Find the Missing Piece', description: 'Find the limited-edition clay piggy bank holding a gold bar.' }, { title: 'Receive & Decorate', description: 'Decorate your own little keepsake alongside an artisan.' }] },
  { id: 'to-he', number: '03', name: 'CLAY Tò He', theme: 'FLOUR', category: 'Cultural Experiences', location: 'Hà Nội', image: tohe, duration: '1.5 hours', price: 240000, rating: '4.9', artisan: 'The tò he makers', teaser: 'The first toys shaped from flour and natural colors.', story: 'Before a toy came from a box, it could come from a pair of hands. Tò he figures made from rice flour and natural colors bring folk tales and childhood imaginings to life. A little twist, a careful pinch, and a playful character appears.', lockedStory: 'The most memorable part is not choosing a figure. It is learning to shape one for yourself beside the hands that have kept this tradition alive.', challenge: 'Search for the Colors of Rice Flour', steps: [{ title: 'Find the Traditional Corner', description: 'Find the corner where the artisan shapes the first figures of the day.' }, { title: 'Find the Hidden Character', description: 'Find Sun Wukong holding the Ruyi Jingu Bang.' }, { title: 'Touch the Flour', description: 'Learn from the artisan, create a small detail, and keep your creation.' }] },
];
export const money = (value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
export type Booking = { id: string; stationId: string; date: string; time: string; participants: number };
export type Journey = { bookings: Booking[]; unlocked: string[]; completed: string[]; reviews: { stationId: string; rating: number; text: string }[] };
export const initialJourney: Journey = { bookings: [], unlocked: [], completed: [], reviews: [] };
const key = 'phieu-viet-journey-v1';
export function loadJourney(): Journey {
  if (typeof window === 'undefined') return initialJourney;
  try { const value = JSON.parse(localStorage.getItem(key) || '{}'); return { ...initialJourney, ...value }; }
  catch { return initialJourney; }
}
export function saveJourney(value: Journey) { if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(value)); }
export function getStation(id: string) { return stations.find(s => s.id === id); }
