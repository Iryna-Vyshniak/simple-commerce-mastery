const Price = ({ amount, className }) => {
  const price = Number(amount).toFixed(1);

  return (
    <p
      className={
        !className
          ? 'mt-2 font-semibold font-montserrat drop-shadow-[0_0.5px_0.05px_rgba(0,0,20,1)] text-slate-400 text-sm wide:text-2xl leading-normal'
          : `${className}`
      }
    >
      ${price}
    </p>
  );
};

export default Price;
