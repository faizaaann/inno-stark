import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import InputContainer from '../InputContainer';

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (search === '') {
      setFilteredProducts(products);
    } else {
      const products = filteredProducts?.filter((product) =>
        product.name
          .toLowerCase()
          .trim()
          .includes(search.toLocaleLowerCase().trim())
      );
      setFilteredProducts(products);
    }
  }, [search]);

  return (
    <>
      <div className='search-container'>
        <InputContainer
          htmlFor='search'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder='Product Name'
          labelValue='Search For Products'
        />
      </div>

      {filteredProducts?.length ? (
        <div className='grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 products-container'>
          {filteredProducts?.map(
            ({ name, description, price, inventoryDate }, index) => (
              <div
                className='max-w-sm rounded overflow-hidden shadow-sm bg-transparent border-2 border-gray-200 hover:shadow-lg cursor-pointer'
                style={{ borderWidth: 1 }}
                key={index}
              >
                <img
                  src='https://cdn.shopify.com/s/files/1/0070/7032/files/DIY_Product_Photography.jpg?v=1527090823'
                  alt='product'
                  className='w-full'
                />
                <div className='px-6 py-4'>
                  <ul>
                    <li>{name}</li>
                    <li>{description}</li>
                    <li>Rs. {price}</li>
                    <li>{inventoryDate}</li>
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div>No Product Found</div>
      )}
    </>
  );
};

export default Products;
