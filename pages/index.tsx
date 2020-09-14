import { GetServerSideProps } from 'next'
import { User } from '../components'
import UserRepo from '../components/User/UserRepository'

interface UserProps {
  users: []
}

const HomePage = ({ users }: UserProps) => <User users={users}/>

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resp = await UserRepo.list()

  const users: UserProps = [
    {
      id: 294,
      email: 'alex@albon',
      name: 'Alex Albon',
      admin: false,
      renew_password: true,
      role: 2,
      access_token: null,
      tags: [
        'Vendas',
        'Compras',
        'Tags'
      ],
      external_code: 'TE',
      phone_area: null,
      phone: null,
      created_at: '2020-09-13T23:25:01.494-03:00',
      updated_at: '2020-09-14T00:01:22.786-03:00'
    },
    {
      id: 269,
      email: 'pedro@vnda.com.br',
      name: 'Pedro',
      admin: false,
      renew_password: true,
      role: 0,
      access_token: null,
      tags: [
        'Compras',
        'Vendas'
      ],
      external_code: 'GRA',
      phone_area: null,
      phone: null,
      created_at: '2020-09-09T01:23:17.087-03:00',
      updated_at: '2020-09-09T01:23:17.096-03:00'
    },
    {
      id: 206,
      email: 'joice@vnda.com',
      name: 'Joice',
      admin: false,
      renew_password: false,
      role: 0,
      access_token: null,
      tags: [
        'ceo'
      ],
      external_code: 'POA',
      phone_area: null,
      phone: null,
      created_at: '2019-07-31T16:37:23.253-03:00',
      updated_at: '2019-07-31T16:37:23.253-03:00'
    },
    {
      id: 205,
      email: 'Bobert@vnda.com',
      name: 'Boberto',
      admin: false,
      renew_password: false,
      role: 0,
      access_token: null,
      tags: [
        'ceo'
      ],
      external_code: 'POA',
      phone_area: null,
      phone: null,
      created_at: '2019-07-31T16:36:55.937-03:00',
      updated_at: '2019-07-31T16:36:55.937-03:00'
    },
    {
      id: 202,
      email: 'lara@vnda.com',
      name: 'Lara',
      admin: false,
      renew_password: false,
      role: 0,
      access_token: null,
      tags: [
        'dev'
      ],
      external_code: 'POA',
      phone_area: null,
      phone: null,
      created_at: '2019-07-31T16:27:15.495-03:00',
      updated_at: '2019-07-31T16:27:15.495-03:00'
    },
    {
      id: 201,
      email: 'bob@vnda.com.br',
      name: 'Bob',
      admin: false,
      renew_password: false,
      role: 0,
      access_token: null,
      tags: [
        'teste'
      ],
      external_code: 'POA',
      phone_area: null,
      phone: null,
      created_at: '2019-07-31T16:25:06.693-03:00',
      updated_at: '2019-07-31T16:25:06.693-03:00'
    }
  ]

  return {
    props: { users }
  }
}
export default HomePage
