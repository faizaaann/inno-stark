const Header = ({ setShowModal }) => {
  return (
    <div
      className='flex items-center justify-between p-4 border-b-2 border-b-gray-200'
      style={{ borderWidth: 1 }}
    >
      <div>
        <h1 className='text-3xl text-black'>InnoStark Technologies</h1>
      </div>
      <div>
        <button
          className='p-2 rounded-md shadow-md hover:shadow-lg text-black add-product-button'
          onClick={() => setShowModal(true)}
        >
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default Header;
