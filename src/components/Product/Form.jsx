import Wrapper from '../Wrapper';

import ColorsBlock from './ColorsBlock';
import SizesBlock from './SizesBlock';

const Form = ({ colors, products, activeColors, activeSizes }) => {
  return (
    <section aria-labelledby="options-heading">
      <h3 id="options-heading" className="sr-only">
        Product options
      </h3>

      <form className="flex flex-col justify-center md:justify-start gap-3">
        {colors?.length > 0 ? (
          <Wrapper>
            <ColorsBlock colors={colors} />
          </Wrapper>
        ) : (
          <Wrapper title="Color:">
            <ColorsBlock products={products} activeColors={activeColors} />
          </Wrapper>
        )}
        {activeSizes && (
          <Wrapper title="Sizes:">
            <SizesBlock products={products} activeSizes={activeSizes} />
          </Wrapper>
        )}
      </form>
    </section>
  );
};

export default Form;
