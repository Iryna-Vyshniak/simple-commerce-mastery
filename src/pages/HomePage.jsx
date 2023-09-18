import ScrollToAnchor from '../components/ScrollToAnchor';
import { sectionsData } from '../shared/constants';

const HomePage = () => {
  return (
    <>
      <ScrollToAnchor />
      {sectionsData.map(({ id, className, component }, idx) => (
        <section key={idx} id={id} className={className}>
          {component}
        </section>
      ))}
    </>
  );
};

export default HomePage;
