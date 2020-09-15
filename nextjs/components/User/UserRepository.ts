import { HttpClient } from '../../services'
import { UserType } from './Types'

const path = 'user'

export default ({
  list: async () => await HttpClient().get(path, true),
  post: async (user:UserType) => await HttpClient().post(path, user),
  remove: async (id:string) => await HttpClient().remove(`${path}/${id}`, true),
  update: async (id:string) => await HttpClient().update(`${path}/${id}`, true)
})
