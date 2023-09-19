import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import Footer from './Footer/Footer';
import Cart from './Cart/Cart';

const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <Header />
      <Cart />
      <main className="grow w-full mt-10">
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
