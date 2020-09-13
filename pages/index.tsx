import { GetServerSideProps } from 'next'
import { UserRepo } from '../respository'
import { User } from '../components'
const HomePage = () => {
  return (
    <User />
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = await UserRepo.list()

  console.log(user.data)
  return {
    props: {}
  }
}
export default HomePage
