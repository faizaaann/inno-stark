import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { productSchema } from '../../utils/schema';
import { addProduct } from '../../store/features/productSlice';
import Input from '../InputContainer';

const AddNewProduct = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        description: '',
        price: 0,
        inventoryDate: '',
      },
      validationSchema: productSchema,
      onSubmit: (values) => {
        dispatch(addProduct(values));
        alert('Product Added Successfully');
        setShowModal(false);
      },
    });
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-3/4 my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-xl font-semibold'>Add New Product</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-red-600  float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setShowModal(false)}
              >
                <span className='bg-transparent text-red-600  h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            <div className='relative p-6 flex-auto'>
              <form onSubmit={handleSubmit}>
                <div>
                  <Input
                    error={errors.name}
                    htmlFor='name'
                    labelValue='Name'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    placeholder={'Enter Product Name'}
                    touched={touched.name}
                  />
                  <Input
                    error={errors.description}
                    htmlFor='description'
                    labelValue='Description'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    placeholder={'Enter Product Description'}
                    touched={touched.description}
                  />
                  <Input
                    error={errors.price}
                    htmlFor='price'
                    labelValue='Price'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.price}
                    placeholder={'Enter Product Price'}
                    touched={touched.price}
                  />

                  <Input
                    error={errors.inventoryDate}
                    htmlFor='inventoryDate'
                    labelValue='Inventory Date'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.inventoryDate}
                    placeholder={'Enter Product Inventory Date'}
                    touched={touched.inventoryDate}
                    inputType='date'
                  />

                  <div className='my-4 mt-6 flex items-center justify-center'>
                    <button
                      type='submit'
                      className='border-1 border-blue-500 bg-blue-700 p-3 rounded-xl text-white'
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default AddNewProduct;
