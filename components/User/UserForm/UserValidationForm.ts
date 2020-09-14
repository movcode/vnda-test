import * as Yup from 'yup'

export default Yup.object({
  name: Yup.string().required(),
  external_code: Yup.number().required(),
  email: Yup.string().email().required(),
  role_name: Yup.string(),
  tags: Yup.string().required()
})
