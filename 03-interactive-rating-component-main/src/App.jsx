import { useState } from 'react';

import CardMain from './components/cardMain/CardMain';
import CardModal from './components/cardModal/CardModal';

import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(() => !showModal);

    console.log('toggleModal, showModal ==>', showModal);
  };

  return <div className='app'>{showModal ? <CardMain toggleModal={toggleModal} /> : <CardModal />}</div>;
}

export default App;
