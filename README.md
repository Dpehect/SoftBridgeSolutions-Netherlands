# SoftBridgeSolutions-Netherlands
Live at https://soft-bridge-solutions-netherlands.vercel.app/#

SoftBridgeSolutions-Netherlands is a motion-led portfolio and studio website for SoftBridge Solutions. The project presents the startup as a digital product studio focused on polished web experiences, product interfaces, startup platforms, and design systems.

## Project Purpose

The site is designed to communicate SoftBridge Solutions as a modern software and design studio. It combines scroll-based storytelling, selected work showcases, animated transitions, and founder/social links in a compact single-page experience with a separate work showcase route.

## Technical Stack

- React 18 with TypeScript
- Vite for development and production builds
- React Router for client-side routing
- GSAP and ScrollTrigger for scroll-linked motion
- Framer Motion for route and UI transitions
- Lenis for smooth scrolling
- Tailwind CSS for utility-first styling
- ESLint and TypeScript build checks for code quality

## Application Structure

- `src/App.tsx`: route shell, loading state, orientation handling, navbar, cursor, and route transitions
- `src/components/Home`: landing sections such as Hero, Work, Build Reel, Build Future, Story, and visual collage
- `src/components/Work`: interactive project showcase and project metadata
- `src/components/LazyVideo.tsx`: lazy video loader that prevents heavy MP4 files from loading before they are near the viewport
- `src/utils`: GSAP animation helpers and transition primitives
- `public` and `src/assets`: static images, videos, and visual assets

## Performance Notes

The project uses multiple animation-heavy sections, so performance-sensitive areas were tuned:

- Large videos are lazy-loaded through `IntersectionObserver`.
- Build Reel uses a static image with transform-based scaling instead of layout-heavy width and height animation.
- Build Future is static and avoids scroll-scrub work.
- The image collage uses optimized image movement instead of MP4 playback.
- Offscreen videos pause automatically through the lazy video component.

## Routes

- `/`: main SoftBridge Solutions experience
- `/work`: interactive project showcase

Vercel is configured to rewrite all routes to `index.html`, so direct visits to `/work` work correctly in production.


## Links

- LinkedIn: https://www.linkedin.com/in/yunus-emre-g%C3%BCrlek-4173a3224/
- GitHub: https://github.com/Dpehect
