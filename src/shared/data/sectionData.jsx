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
  { id: 'home', className: 'padding-x lg:pr-0 padding-b', component: <Hero /> },
  { id: 'products', className: 'padding', component: <PopularProducts /> },
  {
    id: 'about-us',
    className:
      'padding bg-primary bg-gradient-to-r from-white to-white/5 dark:shadow-slate-400 dark:bg-slate-500',
    component: <SuperQuality />
  },
  { id: 'services', className: 'padding-x py-10', component: <Services /> },
  { id: 'special-offers', className: 'padding', component: <SpecialOffers /> },
  {
    id: 'customer-reviews',
    className:
      'padding bg-primary bg-gradient-to-r from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500',
    component: <CustomerReviews />
  },
  { id: 'contact-us', className: 'padding-x sm:py-32 py-16 w-full', component: <Subscribe /> }
];
