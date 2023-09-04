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

export const views = [
  {
    id: '1',
    title: '',
    text: 'Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. Our dedication to detail and excellence ensures your satisfaction ChatGPT with every step you take in Nike sport shoes. From the basketball court to the running track, we`ve got you covered with a wide range of options that cater to all your athletic needs.'
  },
  {
    id: '2',
    title: 'Innovation at the Core',
    text: 'At Nike, innovation isn`t just a buzzword; it`s the very essence of our brand. We constantly strive to push the boundaries of what`s possible in sport shoe design and technology. Our team of engineers and designers work tirelessly to incorporate cutting-edge features that enhance your performance and comfort. One such innovation is our patented Air-Sole cushioning technology. With its origins dating back to the late `70s, it has evolved to become a hallmark of Nike footwear. This groundbreaking technology provides superior cushioning and impact protection while maintaining a lightweight and responsive feel. Whether you`re on the court making high-impact jumps or pounding the pavement on your daily run, Nike`s Air-Sole technology will have your back, or should we say, your feet.'
  },
  {
    id: '3',
    title: 'Sustainability Matters',
    text: 'We recognize the importance of sustainability, not just for the present but for the future of our planet. Nike is committed to reducing our environmental footprint by creating products that are not only top-notch in performance but also eco-friendly. Our sustainable initiatives include using recycled materials in the production of our shoes, reducing water usage in the manufacturing process, and minimizing waste by reusing and recycling materials whenever possible. We believe that every step towards a greener future counts, and by choosing Nike, you`re not only investing in the best for your athletic needs but also supporting a brand that cares about the world we live in.'
  },
  {
    id: '4',
    title: 'Style Meets Substance',
    text: 'Nike sport shoes are not just about performance; they are also a fashion statement. Our designs are driven by the latest trends in sportswear and streetwear, ensuring that you not only feel great during your workout but also look fantastic while doing it. From classic silhouettes that pay homage to our heritage to bold and innovative designs that break new ground in style, Nike has a shoe for every taste and occasion.'
  },
  {
    id: '5',
    title: 'Unmatched Variety',
    text: 'Whatever your sport or fitness regimen, Nike has a shoe that`s tailor-made for you. We offer a wide range of specialized footwear for various sports, including basketball, running, soccer, golf, tennis, and more. Our shoes are designed with the unique demands of each sport in mind, giving you the edge you need to excel. Furthermore, our commitment to inclusivity is reflected in our extensive size ranges, ensuring that athletes of all shapes and sizes can find the perfect fit. Additionally, we offer a variety of colorways and customization options, allowing you to express your personal style on and off the field.'
  },
  {
    id: '6',
    title: 'The Nike Experience',
    text: 'When you invest in Nike sport shoes, you`re not just buying a product; you`re joining a community of athletes and enthusiasts who share your passion for sports and a dedication to excellence. We take pride in being part of your journey, whether you`re a professional athlete striving for glory or someone taking their first steps towards a healthier lifestyle. At Nike, we understand that sport is more than just a physical activity; it`s a way of life. Our shoes are built to support you in every stride, jump, or sprint, helping you achieve your goals and exceed your limits. We believe in the power of sport to inspire and unite people, and we`re honored to be a part of that journey with you. In conclusion, Nike sport shoes are more than just footwear; they are a testament to our commitment to quality, innovation, sustainability, style, and diversity. With Nike on your feet, you`re not just wearing shoes; you`re wearing the symbol of a legacy that spans decades and continues to shape the future of sportswear. Join us, and together, let`s push the boundaries of what`s possible in sports and in life.'
  }
];
