import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, useState } from "react";
import { Menu, Search, UserRound, X, ArrowRight, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JourneyProvider } from "@/components/site/JourneyContext";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <JourneyProvider><SiteHeader /><Outlet /><SiteFooter /></JourneyProvider>
    </QueryClientProvider>
  );
}

const nav = [
  { label: 'Discover', to: '/discover' }, { label: 'Journeys', to: '/journeys' },
  { label: 'Stories', to: '/stories' }, { label: 'Việt Ký', to: '/passport' }, { label: 'About', to: '/about' },
] as const;
function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-warm/95 backdrop-blur-md">
    <div className="section-wrap flex h-[76px] items-center justify-between gap-5">
      <Link to="/" className="flex shrink-0 items-center gap-2 text-primary" onClick={() => setOpen(false)} aria-label="Phiêu Việt home"><span className="flex size-8 items-center justify-center border border-gold font-display text-xl leading-none">P</span><span className="font-display text-xl font-bold tracking-wide sm:text-2xl">PHIÊU VIỆT</span></Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{nav.map(item => <Link key={item.to} to={item.to} className="text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-primary" activeProps={{ className: 'text-primary' }}>{item.label}</Link>)}</nav>
      <div className="hidden items-center gap-2 lg:flex"><Button asChild variant="ghost" size="icon" title="Search"><Link to="/discover"><Search /></Link></Button><Button asChild variant="ghost" size="icon" title="Profile"><Link to="/profile"><UserRound /></Link></Button><Button asChild size="lg"><Link to="/discover">Start Your Journey <ArrowRight /></Link></Button></div>
      <Button className="lg:hidden" variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="section-wrap flex flex-col gap-1 border-t border-border py-4 lg:hidden" aria-label="Mobile navigation">{nav.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-3 text-sm font-semibold uppercase tracking-widest">{item.label}</Link>)}<Link to="/profile" onClick={() => setOpen(false)} className="py-3 text-sm font-semibold uppercase tracking-widest">Profile</Link></nav>}
  </header>;
}
function SiteFooter() { return <footer className="bg-deep py-14 text-primary-foreground"><div className="section-wrap grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
  <div><Link to="/" className="font-display text-2xl font-bold">PHIÊU VIỆT</Link><p className="mt-4 max-w-xs text-sm leading-7 opacity-75">Tìm lại ký ức, chạm vào nguyên bản.</p><div className="mt-6 flex gap-4"><Instagram size={18}/><Facebook size={18}/></div></div>
  <div><h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Explore</h3><div className="flex flex-col gap-3 text-sm opacity-80"><Link to="/discover">Discover</Link><Link to="/stories">Stories</Link><Link to="/journeys">Journeys</Link><Link to="/passport">Việt Ký</Link><Link to="/rewards">Rewards</Link></div></div>
  <div><h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">For Partners</h3><div className="flex flex-col gap-3 text-sm opacity-80"><Link to="/partner">Partner Portal</Link><Link to="/partner">Become a Partner</Link></div></div>
  <div><h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gold">Support</h3><div className="flex flex-col gap-3 text-sm opacity-80"><Link to="/about">About</Link><Link to="/about">Contact</Link><Link to="/about">Help Center</Link></div></div>
</div><div className="section-wrap mt-12 border-t border-primary-foreground/20 pt-6 text-xs opacity-60">© 2026 Phiêu Việt. Crafted for the stories that stay with us.</div></footer>; }
