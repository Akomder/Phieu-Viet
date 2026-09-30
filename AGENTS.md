<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep prototype journey data and browser-only persistence in `src/lib/journey.ts`; this isolates mock behavior until a real service is connected.
- Use TanStack file routes for each shareable Phiêu Việt page and shared site chrome in `src/routes/__root.tsx`; this preserves direct navigation and page metadata.
