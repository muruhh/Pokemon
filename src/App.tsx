import { Routes, Route, Navigate, Link } from 'react-router-dom';
import PaginationView from './pages/PaginationView';
import LoadMoreView from './pages/LoadMoreView';

function App() {
  return (
     <div className="max-w-7xl w-full">
      <Link to="/pagination">Pagination View</Link>
      <Link to="/load-more">Load More View</Link>

      <Routes>
        <Route path="/" element={<Navigate to="/pagination" replace />} />
        <Route path="/pagination" element={<PaginationView />} />
        <Route path="/load-more" element={<LoadMoreView />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;