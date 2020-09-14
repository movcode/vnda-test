import { HttpClient } from '../../services'
import { UserType } from './Types'

const path = 'users'

export default ({
  list: async () => await HttpClient().get(path, true),
  post: async (user:UserType) => await HttpClient().post(path, user),
  remove: async (id:string) => await HttpClient().remove(`${path}/${id}`, true)
})
