import { footerLinks } from '../../constants';

const FooterLinks = () => {
  return (
    <ul className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
      {footerLinks.map(({ title, links }) => (
        <li key={title}>
          <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
            {title}
          </h4>
          <ul>
            {links.map(({ name, to }) => (
              <li
                className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                key={name}
              >
                <a href={to}>{name}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
