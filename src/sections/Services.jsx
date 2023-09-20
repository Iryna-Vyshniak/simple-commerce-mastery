import Container from '../components/Container';
import ServiceCard from '../components/ServiceCard';
import { services } from '../shared/data';

const Services = () => {
  return (
    <Container className="flex justify-center flex-wrap gap-9">
      {services.map(service => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </Container>
  );
};

export default Services;
