const Price = ({ amount, className }) => {
  const price = Number(amount).toFixed(1);

  return (
    <p
      className={
        !className
          ? 'mt-2 font-semibold font-montserrat text-deep-red text-sm wide:text-2xl leading-normal'
          : `${className}`
      }
    >
      ${price}
    </p>
  );
};

export default Price;
