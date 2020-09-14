import * as Yup from 'yup'

export default Yup.object({
  name: Yup.string().required('O nome é obrigatório'),
  external_code: Yup.string().required('O código é obrigatório'),
  email: Yup.string().email('Email inválido!').required('O email é obrigatório'),
  role_name: Yup.string().required('Selecione uma função')
})
