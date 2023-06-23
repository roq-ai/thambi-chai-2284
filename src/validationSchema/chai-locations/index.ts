import * as yup from 'yup';

export const chaiLocationValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
  rating: yup.number().required(),
  organization_id: yup.string().nullable().required(),
});
