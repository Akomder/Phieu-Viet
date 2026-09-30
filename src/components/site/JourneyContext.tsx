import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { initialJourney, loadJourney, saveJourney, type Journey } from '@/lib/journey';
const Context = createContext<{ journey: Journey; update: (fn: (value: Journey) => Journey) => void } | null>(null);
export function JourneyProvider({ children }: { children: ReactNode }) {
  const [journey, setJourney] = useState<Journey>(initialJourney);
  useEffect(() => { setJourney(loadJourney()); }, []);
  function update(fn: (value: Journey) => Journey) { setJourney(current => { const next = fn(current); saveJourney(next); return next; }); }
  return <Context.Provider value={{ journey, update }}>{children}</Context.Provider>;
}
export function useJourney() { const value = useContext(Context); if (!value) throw new Error('JourneyProvider missing'); return value; }
