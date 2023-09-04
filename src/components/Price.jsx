const Price = ({ amount, className }) => {
  return (
    <p
      className={
        !className
          ? 'mt-2 font-semibold font-montserrat text-deep-red text-2xl leading-normal'
          : `${className}`
      }
    >
      {amount}
    </p>
  );
};

export default Price;
