import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="relative flex flex-col items-center justify-center  min-h-screen">
      <Header />
      <main className="grow w-full">
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
