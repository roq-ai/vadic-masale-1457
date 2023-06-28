import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  product_id: yup.string().nullable(),
});
