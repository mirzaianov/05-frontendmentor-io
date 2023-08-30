// import { useState } from 'react';
import CardMain from './components/cardMain/CardMain';
import CardModal from './components/cardModal/CardModal';

import './App.scss';

function App() {
  // const [show, setShow] = useState(false);

  return (
    <div className='app'>
      <CardMain />
      <CardModal />
    </div>
  );
}

export default App;
