import ScrollToAnchor from '../components/ScrollToAnchor';
import { sectionsData } from '../shared/data';

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
