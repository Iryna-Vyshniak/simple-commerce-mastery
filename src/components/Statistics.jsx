import { statistics } from '../shared/data';

const Statistics = () => {
  return (
    <ul className="flex justify-start items-start flex-wrap w-full mt-20 mb-14 gap-16">
      {statistics.map(({ value, label }, idx) => (
        <li key={idx}>
          <p className="text-3xl max-sm:text-2xl font-palanquin font-bold">{value}</p>
          <p className="leading-7 font-montserrat text-slate-gray dark:text-slate-300">{label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
