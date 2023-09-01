import { copyrightSign } from '../../assets/icons';
import { footerLogo } from '../../assets/images';
import Container from '../Container';
import Image from '../Image';

import FooterLinks from './FooterLinks';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="max-container padding-x padding-t pb-8 bg-red-950">
      <Container>
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <Image src={footerLogo} alt="logo" width={150} height={46} className="m-0" />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In
              Store. Get Rewards
            </p>
            <SocialMedia />
          </div>

          <FooterLinks />
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <Image
              src={copyrightSign}
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
