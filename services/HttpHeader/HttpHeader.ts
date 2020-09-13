import { GetToken } from '../../custom'

const headerWithAuthorization = ({
  'Content-Type': 'application/json',
  Authorization: GetToken
})

const header = ({
  'Content-Type': 'application/json'
})

export default (auth: boolean) => ({ headers: auth ? headerWithAuthorization : header })
