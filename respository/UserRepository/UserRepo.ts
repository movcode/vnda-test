import { HttpClient } from '../../services'

const UserRepo = ({
  list: async () => await HttpClient().get('/users', true)
})

export default UserRepo
