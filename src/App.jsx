import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const ViewDetailsPage = lazy(() => import('./pages/ViewDetailsPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<DetailsPage />} />
            <Route path="/likes" element={<FavoritesPage />} />
            <Route path="/list" element={<ProductsPage />} />
            <Route path="/view" element={<ViewDetailsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
