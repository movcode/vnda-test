import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Grid, IconButton } from '@material-ui/core'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { CustomContainer, Title } from '../ShareComponents'
import { GetRoleByCode } from '../../custom'
import Form from './UserForm'
import List from './UserList'
import { UserType } from './Types'
import UserFormState from './UserForm/UserFormState'
import { UserAction } from './redux'

interface Props {
  users: []
}

const UserUi = ({ users }: Props) => {
  const [formState, setFormState] = useState<UserType>(UserFormState)
  const [updateForm, setUpdateForm] = useState<boolean>(false)
  const dispatch = useDispatch()

  const add = (values: UserType) => !updateForm
    ? dispatch(UserAction.store(values))
    : 'send update'

  const update = (user: UserType) => {
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