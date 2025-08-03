import { Routes, Route, Navigate} from 'react-router-dom';
import PaginationView from './pages/PaginationView';
import LoadMoreView from './pages/LoadMoreView';
import { ErrorBoundary } from './components/ErrorBoundary';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pagination" replace />} />
      <Route path="/pagination" element={<PaginationView />} />
      <Route path="/load-more" element={<LoadMoreView />} />
      <Route
        path="/pokemon/:name"
        element={
          <ErrorBoundary fallback={<p className="text-red-600">Failed to load Pokémon.</p>}>
            <PokemonDetail />
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<p>404 Not Found</p>} />
    </Routes>
  );
}

export default App;