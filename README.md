# 🧪 Pokémon Browser – React + TypeScript

A responsive Pokémon browser built with **React**, **TypeScript**, and **Tailwind CSS**, leveraging **React Query** for data fetching and caching. The app allows users to browse Pokémon using both paginated and infinite scroll views, and view individual Pokémon details on dedicated pages.

## 🌐 Live Demo

🔗 [https://pokemon-browser-iota.vercel.app](https://pokemon-browser-iota.vercel.app)

---

## 📸 Features

### 1. Pokémon List Views

- **Pagination View**  
  Displays a grid of Pokémon cards with pagination controls (Previous / Next + page numbers).

- **Load More View (Infinite Scroll)**  
  Fetches additional Pokémon using a "Load More" mechanism with intersection observer support.

### 2. Detail Page

Clicking any Pokémon navigates to a dedicated route displaying:

- ✅ Name  
- ✅ Official sprite  
- ✅ Height  
- ✅ Weight  
- ✅ Types  
- ✅ Base experience  
- ✅ Abilities  
- ✅ Stats with progress bars

### 3. State Management

- 🔄 **Loading states** with placeholders
- ❌ **Error handling** with retry buttons
- ✅ **Type-safe API calls** via TypeScript interfaces

### 4. Responsiveness

- 💻 **Desktop**, 📱 **Tablet**, and 📲 **Mobile** support
- Adaptive grid layout across breakpoints

---

## 🔧 Tech Stack

- ⚛️ **React 18**
- 🧑‍💻 **TypeScript**
- 🎨 **Tailwind CSS**
- 🔄 **@tanstack/react-query** for caching and async handling
- ⚡ **Vite** for development and builds
- ☁️ **Vercel** for deployment

---

## 📁 Folder Structure
```js
src/
├── api/ # API functions (fetchPokemonList, fetchPokemonDetail)
├── components/ # Reusable UI components (Header, Loader, Cards, etc.)
├── pages/ # Page-level views (LoadMoreView, PaginationView, PokemonDetail)
├── types/ # TypeScript interfaces (e.g., PokemonListResponse, PokemonDetail)
└── App.tsx # Main routing setup
```


---

## 📦 Install & Run Locally

```bash
git clone https://github.com/your-username/pokemon-browser.git
cd pokemon-browser
npm install
npm run dev


🚀 Deployment
This project is deployed via Vercel:

Live Link: https://pokemon-browser-iota.vercel.app


- Completed Task Checklist
- ✅ Pagination view
- ✅ Infinite scroll view with "Load More"
- ✅ Dedicated Pokémon detail page
- ✅ Responsive design (mobile / tablet / desktop)
- ✅ Clean loading and error states
- ✅ Deployed on Vercel
- ✅ Clean and modular codebase
- ✅ Type-safe API integration


---


- Bonus Features
- ✅ React Query used for all API operations
- ✅ Error boundaries implemented
- ✅ Placeholder-based loading indicators