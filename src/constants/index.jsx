import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons';
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe
} from '../sections';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' }
];

export const sectionsData = [
  { id: 'home', className: 'xl:padding-1 wide:padding-r padding-b', component: <Hero /> },
  { id: 'products', className: 'padding', component: <PopularProducts /> },
  { id: 'about-us', className: 'padding', component: <SuperQuality /> },
  { id: 'services', className: 'padding-x py-10', component: <Services /> },
  { id: 'special-offers', className: 'padding', component: <SpecialOffers /> },
  { id: 'customer-reviews', className: 'padding bg-primary', component: <CustomerReviews /> },
  { id: 'contact-us', className: 'padding-x sm:py-32 py-16 w-full', component: <Subscribe /> }
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo', link: 'https://www.facebook.com/irina.vishnyaknotchenko' },
  { src: twitter, alt: 'twitter logo', link: 'https://twitter.com/Miss_V_N_' },
  { src: instagram, alt: 'instagram logo', link: 'https://www.instagram.com/miss_i_v_n_' }
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1to', to: '/' },
      { name: 'Air Max 1', to: '/' },
      { name: 'Air Jordan 1', to: '/' },
      { name: 'Air Force 2', to: '/' },
      { name: 'Nike Waffle Racer', to: '/' },
      { name: 'Nike Cortez', to: '/' }
    ]
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', to: '/' },
      { name: 'FAQs', to: '/' },
      { name: 'How it works', to: '/' },
      { name: 'Privacy policy', to: '/' },
      { name: 'Payment policy', to: '/' }
    ]
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', to: 'mailto:customer@nike.com' },
      { name: '+380505187703', to: 'tel:+380505187703' }
    ]
  }
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' }
];

export const shoes = [
  {
    thumbnail:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662763/nike/pngwing.com_20_gjvmyx.png',
    bigShoe:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662763/nike/pngwing.com_20_gjvmyx.png'
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662935/nike/pngwing.com_4_bbz6ow.png',
    bigShoe:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662935/nike/pngwing.com_4_bbz6ow.png'
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662935/nike/pngwing.com_5_zintu4.png',
    bigShoe:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662935/nike/pngwing.com_5_zintu4.png'
  }
];

export const reviews = [
  {
    avatarURL:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1692265419/rewievs/Fletcher_lyecuy.png',
    name: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'
  },
  {
    avatarURL:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1691497617/rewievs/image_70_j8immx.png',
    name: 'Lota Mongeskar',
    rating: 5,
    feedback:
      'The product not only met but exceeded my expectations. I`ll definitely be a returning customer!'
  }
];

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.'
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext: 'Experience worry-free transactions with our secure payment options.'
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.'
  }
];

export const products = [
  {
    imgURL:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662932/nike/pngwing.com_10_qauevo.png',
    name: 'Nike Air Jordan-01',
    price: '$200.20'
  },
  {
    imgURL:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662929/nike/pngwing.com_21_i1zodu.png',
    name: 'Nike Air Jordan-10',
    price: '$210.20'
  },
  {
    imgURL:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662929/nike/pngwing.com_22_amkcgm.png',
    name: 'Nike Air Jordan-100',
    price: '$220.20'
  },
  {
    imgURL:
      'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662930/nike/pngwing.com_18_tw6x31.png',
    name: 'Nike Air Jordan-001',
    price: '$230.20'
  }
];
