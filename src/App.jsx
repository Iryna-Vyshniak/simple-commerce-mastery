import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
};

export default App;
