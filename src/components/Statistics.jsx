import { statistics } from '../constants';

const Statistics = () => {
  return (
    <ul className="flex justify-start items-start flex-wrap w-full mt-20 mb-14 gap-16">
      {statistics.map(({ value, label }, idx) => (
        <li key={idx}>
          <p className="text-4xl font-palanquin font-bold">{value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">{label}</p>
        </li>
      ))}
    </ul>
  );
};

export default Statistics;
