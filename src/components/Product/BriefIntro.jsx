import icons from '../../assets/icons/icons.svg';
import { briefIntro } from '../../shared/data';

const BriefIntro = () => {
  return (
    <section className="max-container">
      <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        {briefIntro.map((item, idx) => (
          <li key={idx} className={`flex flex-col p-5 rounded-2xl ${item.bgColor}`}>
            <div className="flex items-center justify-center rounded-full h-9 w-9 shadow-lg">
              <svg width="24" height="24" className="fill-slate-500">
                <use href={icons + item.icon} />
              </svg>
            </div>
            <div className="mt-2.5">
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="text-slate-500 mt-0.5 text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BriefIntro;
