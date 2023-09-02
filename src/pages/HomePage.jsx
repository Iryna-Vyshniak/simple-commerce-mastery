import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe
} from '../sections';

const HomePage = () => {
  return (
    <>
      <section id="home" className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section id="products" className="padding">
        <PopularProducts />
      </section>
      <section id="about-us" className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-primary">
        <CustomerReviews />
      </section>
      <section id="contact-us" className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </>
  );
};

export default HomePage;
