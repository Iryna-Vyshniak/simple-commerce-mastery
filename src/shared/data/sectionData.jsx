import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality
} from '../../sections';

export const sectionsData = [
  { id: 'home', className: 'xl:padding-1 wide:padding-r padding-b', component: <Hero /> },
  { id: 'products', className: 'padding', component: <PopularProducts /> },
  { id: 'about-us', className: 'padding', component: <SuperQuality /> },
  { id: 'services', className: 'padding-x py-10', component: <Services /> },
  { id: 'special-offers', className: 'padding', component: <SpecialOffers /> },
  {
    id: 'customer-reviews',
    className:
      'padding bg-primary bg-gradient-to-b from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500',
    component: <CustomerReviews />
  },
  { id: 'contact-us', className: 'padding-x sm:py-32 py-16 w-full', component: <Subscribe /> }
];
