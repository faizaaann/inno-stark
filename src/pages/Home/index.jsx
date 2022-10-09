import { useState } from 'react';

import AddNewProduct from '../../components/AddNewProduct';
import Header from '../../components/Header';
import Products from '../../components/Products';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='h-screen w-screen m-auto'>
        <Header setShowModal={setShowModal} />
        {showModal && <AddNewProduct setShowModal={setShowModal} />}
        <div className='p-12'>
          <Products />
        </div>
      </div>
    </>
  );
};

export default Home;
