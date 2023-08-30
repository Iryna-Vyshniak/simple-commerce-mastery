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
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding bg-pale-blue">
        <SpecialOffers />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
    </>
  );
};

export default HomePage;
