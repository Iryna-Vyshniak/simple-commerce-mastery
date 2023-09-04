import { views } from '../constants';

import TextBlock from './TextBlock';
import Title from './Title';

const Views = () => {
  return (
    <ul className="mt-6 mb-6">
      {views.map(({ id, title, text }) => (
        <li key={id} className="w-full">
          {title && <Title>{title}</Title>}
          <TextBlock text={text} />
        </li>
      ))}
    </ul>
  );
};

export default Views;
