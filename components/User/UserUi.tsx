import { Grid } from '@material-ui/core'
import { CustomContainer } from '../ShareComponents'
import Form from './UserForm'
import List from './UserList'
const UserUi = () => {
  const add = (values) => console.log(values)
  return (
    <CustomContainer>
      <>

        <Grid container >
          <Grid item xs={12} md={6}>
            <Form handleSubmit={add} />
          </Grid>

          <Grid item xs={12} md={6}>
            <List />
          </Grid>
        </Grid>

      </>
    </CustomContainer>
  )
}

export default UserUi
