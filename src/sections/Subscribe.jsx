import Button from '../components/Button';
import Container from '../components/Container';

const Subscribe = () => {
  return (
    <Container className="flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-deep-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex items-center gap-5 p-2.5 lg:max-w-[40%] w-full  max-sm:flex-col sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex items-center max-sm:justify-end  max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </Container>
  );
};

export default Subscribe;
