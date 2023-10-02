import MainTitle from './Title/MainTitle';

const NotFound = () => {
  return (
    <section className="no-scrollbar flex flex-col items-center justify-start overflow-hidden">
      <MainTitle
        className="
        text-3xl
        bg-gradient-to-r
        from-red-300
        via-orange-500
        to-deep-red bg-clip-text text-center text-transparent drop-shadow-[0_1px_3px_rgba(250,250,250,1)]"
      >
        No followed shoes
      </MainTitle>
    </section>
  );
};

export default NotFound;
