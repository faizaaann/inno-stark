import * as yup from 'yup';

export const productSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Product Name must be at least 3 characters long')
    .required('Product Name is Required'),
  description: yup
    .string()
    .min(10, 'Product Description must be at least 10 characters long')
    .required('Product Description is Required'),
  price: yup
    .number()
    .min(1, 'Product Price must be greater than 1')
    .required('Product Price is Required'),
  inventoryDate: yup.string().required('Inventory Date is Required'),
});
