import { Grid } from '@material-ui/core'
import { CustomContainer } from '../ShareComponents'
import Form from './UserForm'
const UserUi = () => {
  const add = (values) => console.log(values)
  return (
    <CustomContainer>
      <>
        <Grid>
          <Form handleSubmit={add} />
        </Grid>
      </>
    </CustomContainer>
  )
}

export default UserUi
