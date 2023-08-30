import { facebook, instagram, twitter } from '../assets/icons';

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
