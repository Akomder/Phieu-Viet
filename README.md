# Phiêu Việt

> Phiêu lưu giữa những câu chuyện văn hóa Việt. 
> Mỗi điểm đến mở ra một câu chuyện văn hóa đang chờ bạn khám phá.

**Phiêu Việt** is a platform dedicated to discovering, preserving, and experiencing Vietnamese cultural heritage through interactive, gamified real-world journeys. Instead of just visiting a location, users embark on structured challenges, unlock memories, and collect digital stamps and puzzle pieces in their "Việt Ký" (Cultural Passport).

## 🌟 Key Features

* **Việt Ký Passport System:** A digital passport where users collect stamps and puzzle pieces by visiting real-world cultural locations and completing interactive challenges.
* **Bilingual Support (i18n):** Full support for both Vietnamese (VI) and English (EN) to cater to locals and international tourists alike.
* **Interactive Storytelling:** Each location (e.g., Phu Binh Lantern Village, Tan Khanh Piggy Bank Kiln, To He Clay) features a rich backstory and a gamified scavenger hunt.
* **MVP Data Tracking:** Built-in Google Sheets integration to track user interactions, challenge completion time, incorrect guesses, and survey feedback for product iterations.
* **Modern Tech Stack:** Built with React, TanStack Router for type-safe file-based routing, and Tailwind CSS for a highly responsive, cultural-themed UI.

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

### Building for Production

To create a production build, run:
```bash
npm run build
```

## 🗺️ Project Structure

The project utilizes TanStack Router's file-based routing system.

* **`src/routes/`**: Contains all page routes.
  * `__root.tsx`: The root layout containing the navigation header and footer.
  * `index.tsx`: The landing page.
  * `discover.tsx`: The discovery page for searching and exploring locations.
  * `passport.tsx`: The Việt Ký passport overview page.
  * `vet-nang-nam-thang.tsx`: The specific "Vệt Nắng Năm Tháng" collection page.
  * `play.$stationId.tsx`: The interactive gamified challenge flow for a specific station.
  * `mvp.tsx`: The dedicated MVP testing flow and Google Sheets submission endpoint.
* **`src/components/`**: Reusable UI components (buttons, inputs, cards) built with Radix UI and Tailwind.
* **`src/lib/`**: Core utilities.
  * `i18n.ts`: i18next configuration and translation dictionaries.
  * `journey.ts`: Static data for stations, stories, and the Việt Ký state management.

## 📊 MVP Google Sheets Integration

During the MVP phase, user challenge progress (start time, end time, wrong clicks) and survey feedback are submitted directly to a Google Sheets document via a Google Apps Script Web App. 

This tracking is implemented in `play.$stationId.tsx` and `mvp.tsx` using a fire-and-forget `POST` request with `mode: "no-cors"` to bypass browser CORS restrictions when communicating with Google Apps Script.

## 🛠️ Built With

* **[React](https://react.dev/)**
* **[TanStack Router](https://tanstack.com/router)** - Type-safe routing
* **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
* **[Lucide React](https://lucide.dev/)** - Iconography
* **[i18next](https://www.i18next.com/)** - Internationalization
* **[Vite](https://vitejs.dev/)** - Frontend tooling

## 📄 License

This project is for presentation
