import { Routes, Route, Navigate, Link, useLocation} from 'react-router-dom';
import PaginationView from './pages/PaginationView';
import LoadMoreView from './pages/LoadMoreView';

function App() {
  const location = useLocation();
  const isPagination = location.pathname === '/pagination';
  const isInfiniteScroll = location.pathname === '/load-more';

  return (
    <>
     <header className="max-w-7xl w-full">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold flex justify-center items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bolt-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#FCD34D"/><stop offset="1" stop-color="#FACC15"/> </linearGradient></defs><path d="M13 2L4 14H11L9 22L20 10H13L13 2Z" stroke="url(#bolt-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          <span>Pokédex</span>
        </h1>
        <p className="mt-2 text-gray-600">Discover and explore Pokémon with infinite scroll</p>

        <div className="mt-4 flex justify-center gap-4">
          <Link to="/pagination">
        <button
          className={`font-medium px-4 py-2 rounded shadow cursor-pointer transition ${
            isPagination
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          Page Controls
        </button>
      </Link>

      <Link to="/load-more">
        <button
          className={`font-medium px-4 py-2 rounded shadow cursor-pointer transition ${
            isInfiniteScroll
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          Infinite Scroll
        </button>
      </Link>
        </div>
      </div>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/pagination" replace />} />
        <Route path="/pagination" element={<PaginationView />} />
        <Route path="/load-more" element={<LoadMoreView />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;