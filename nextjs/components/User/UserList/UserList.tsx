import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import { Card } from '../../ShareComponents'
import { WrraperList, StyleList } from './UserListStyle'
import UserEntity from '../../../entities/UserEntity'
import { UserReducer, UserState } from '../Types'

interface Props {
  initUsers: []
  update: (user: UserEntity) => void
  remove: (id) => void
}
const UserList = ({ initUsers, update, remove }: Props) => {
  const { response } = useSelector<UserReducer, UserState>(state => state.user)
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(initUsers)
    if (response.status) {
      setUsers([...users, response.data].reverse())
    }
  }, [response, initUsers])

  const removeUser = (id: string) => {
    remove(id)
    const newUsers = users.filter((user: UserEntity) => user.id !== id)
    setUsers(newUsers)
  }

  return (
    <WrraperList >
      <Grid container justify='center' alignItems='center'>
        <img width='18' src='/imgs/mouse_up.png' />
      </Grid>

      <StyleList className='scroll'>
        {users?.map((user: UserEntity) =>
          <Card key={user?.id}
            edit={() => update(user)}
            id={user.id}
            name={user.name}
            email={user.email}
            external_code={user.external_code}
            remove={removeUser}
          />
        )}
      </StyleList>
      <Grid container justify='center' alignItems='center'>
        <img width='18' src='/imgs/mouse_down.png' />
      </Grid>
    </WrraperList>
  )
}

export default UserList
