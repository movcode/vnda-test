import { GetServerSideProps } from 'next'
import { User } from '../components'
import UserRepo from '../components/User/UserRepository'

interface UserProps {
  users: []
}

const HomePage = ({ users }: UserProps) => <User users={users}/>

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resp = await UserRepo.list()

  const users: UserProps = resp.data
  return {
    props: { users }
  }
}
export default HomePage
