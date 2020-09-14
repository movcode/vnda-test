import { useState } from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CustomContainer, Title } from '../ShareComponents'
import { GetRoleByCode } from '../../custom'
import Form from './UserForm'
import List from './UserList'
import IUser from './IUser'
import UserFormState from './UserForm/UserFormState'
interface Props {
  users: []
}

const UserUi = ({ users }: Props) => {
  const [formState, setFormState] = useState<IUser>(UserFormState)
  const [updateForm, setUpdateForm] = useState<boolean>(false)

  const add = (values: IUser) => console.log(values)

  const update = (user: IUser) => {
    setUpdateForm(true)
    setFormState({
      name: user.name,
      external_code: user.external_code,
      email: user.email,
      role_name: GetRoleByCode(user.role.toString()),
      tags: user.tags
    })
  }

  return (
    <CustomContainer>
      <Grid container>
        <Grid container justify='center' alignItems='center'>
          <Title>Gerenciador de Usuário</Title>
        </Grid>

        {updateForm &&
          <Grid item xs={12} md={12} onClick={() => setUpdateForm(false)}>
            <IconButton>
              <AiOutlineUserAdd color='white' />
            </IconButton>
          </Grid>
        }
        <Grid item xs={12} md={6}>
          <Form handleSubmit={add} update={updateForm} formState={formState} />
        </Grid>

        <Grid item xs={12} md={6}>
          <List initUsers={users} update={update} />
        </Grid>

      </Grid>
    </CustomContainer>
  )
}

export default UserUi
