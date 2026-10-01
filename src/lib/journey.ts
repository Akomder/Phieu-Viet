import lantern from '@/assets/craft-lantern.jpg';
import piggy from '@/assets/craft-piggy.jpg';
import tohe from '@/assets/craft-tohe.jpg';

export type Station = {
  id: string; number: string; name: string; theme: string; category: string; location: string;
  image: string; duration: string; price: number; rating: string; artisan: string;
  teaser: string; story: string; lockedStory: string; challenge: string; steps: { title: string; description: string }[];
};
export const stations: Station[] = [
    {
      id: 'phu-binh', number: '01', name: 'Phu Binh Lantern Village', theme: 'LIGHT', category: 'Craft Villages',
      location: 'Alleys around Phu Binh Parish, Lac Long Quan Street, Ward 5, District 11, Ho Chi Minh City',
      image: lantern, duration: '2 hours', price: 180000, rating: '4.9', artisan: 'The lantern makers of Phu Binh',
      teaser: 'Unlock a memory hidden inside a red glass-paper lantern.',
      story: 'In the small alleys around Phu Binh Parish, rows of red glass-paper lanterns hang beneath the drying racks. Each one carries the glow of a childhood Mid-Autumn Festival and a one-of-a-kind memory prepared by a local family.',
      lockedStory: 'The lantern museum is waiting above the alley. Reach for the bamboo hook, choose one lantern at random, and discover the keepsake hidden inside.',
      challenge: 'Unlock the Lantern Museum',
      steps: [
        { title: 'Enter the Lantern Alley', description: 'Follow the lantern racks through the alleys around Phu Binh Parish on Lac Long Quan Street.' },
        { title: 'Choose Your Lantern', description: 'Use the bamboo pole and hook to select one sealed red glass-paper lantern from the hanging rack.' },
        { title: 'Open the Memory', description: 'Take your lantern to the artisan and discover one unique keepsake: a dried to he, a mini piggy bank, a handwritten letter, or vintage glass paper from the 1990s.' },
      ],
    },
    {
      id: 'tan-khanh', number: '02', name: 'Tan Khanh Piggy Bank Kiln Village', theme: 'EARTH', category: 'Craft Villages',
      location: 'Nguyen Van Nhan\'s 30-year-old workshop, Khanh Loi Quarter, Tan Khanh Ward',
      image: piggy, duration: '2 hours', price: 170000, rating: '4.8', artisan: 'Nguyen Van Nhan and the Tan Khanh clay makers',
      teaser: 'Meet the makers behind a clay piggy bank shaped by three decades of memory.',
      story: 'At the Tan Khanh piggy bank kiln village, clay becomes a familiar vessel for childhood savings. In Mr. Nguyen Van Nhan\'s workshop, more than 30 years of molds, firing, and hand-painted details fill the space with the warm rhythm of a living craft.',
      lockedStory: 'The kiln room holds the story of a craft family and the small piggy bank waiting to travel home with you. Look closely, listen to the maker, and find the marked piece.',
      challenge: 'Find the Keepsake Piggy Bank',
      steps: [
        { title: 'Follow the Kiln Trail', description: 'Find Mr. Nguyen Van Nhan\'s workshop in Khanh Loi Quarter and listen for the rhythm of the kiln and hand tools.' },
        { title: 'Spot the Mark', description: 'Find the mini piggy bank stamped with the village mark among the rows of clay forms.' },
        { title: 'Carry Home a Memory', description: 'Choose a color, add a small detail with the artisan\'s guidance, and take your mini piggy bank home.' },
      ],
    },
    {
      id: 'to-he', number: '03', name: 'CLAY To He Making & Street Vendor Point', theme: 'FLOUR', category: 'Cultural Experiences',
      location: '2867/68/5B QL1A, Tan Thoi Nhat Ward, District 12, Ho Chi Minh City',
      image: tohe, duration: '1.5 hours', price: 160000, rating: '4.9', artisan: 'The CLAY to he makers',
      teaser: 'Shape a tiny folk character and follow it into the street basket.',
      story: 'At CLAY, rice flour and natural colors become tiny figures with expressive faces and bright costumes. Visit the making point, watch the artisan\'s hands, then follow the figures into the vendor basket where Vietnamese childhood folklore comes alive.',
      lockedStory: 'One character is waiting among the handmade figures. Find the requested shape, learn the small gesture that gives it life, and bring a piece of folk play into your own story.',
      challenge: 'Find the Hidden To He Character',
      steps: [
        { title: 'Arrive at CLAY', description: 'Visit the CLAY to he making point at 2867/68/5B QL1A, Tan Thoi Nhat Ward, District 12.' },
        { title: 'Search the Vendor Basket', description: 'Find the exact to he character requested by the app among the handmade figures and street-vendor display.' },
        { title: 'Shape One Small Detail', description: 'With the artisan\'s guidance, knead and shape one small detail or receive the found figure as a keepsake.' },
      ],
    },
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
