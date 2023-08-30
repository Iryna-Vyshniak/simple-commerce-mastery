import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="relative flex flex-col items-center h-screen">
      <Header />
      <main className="grow">
        <Container>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;