import {Routes , Route} from 'react-router-dom';


import LoginPage from './pages/login/login.component';

import './assets/style/style.scss';
import AccountPage from './pages/account/account.component';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<LoginPage/>} />
      ​<Route exact path='/account/*' element={<AccountPage />}>

        </Route>
    </Routes>
    </>
  );
}

export default App;
