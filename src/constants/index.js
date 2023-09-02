import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons';
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from '../assets/images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' }
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' }
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
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3
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
