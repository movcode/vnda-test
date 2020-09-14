import { Formik, Form, FormikValues } from 'formik'
import { Grid, Button } from '@material-ui/core'
import { CustomTextField, ChipInputText } from '../../ShareComponents'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import FormState from './UserFormState'
import UserFormValidation from './UserValidationForm'

interface Props {
  handleSubmit: any
}

const UserForm = ({ handleSubmit }: Props) => {
  const screenDesktop = useMediaQuery('(min-width:600px)')

  const addTag = (tag:never) => FormState.tags.push(tag)
  const removeTag = (key:number) => {
    FormState.tags.splice(key, 1)
  }

  return (
    <Formik
      initialValues={FormState}
      validationSchema={UserFormValidation}
      onSubmit={(valeus: FormikValues, { resetForm }) => {
        handleSubmit(valeus)
        resetForm()
      }}
    >
      {({ isValid, dirty }) => (
        <Grid
          container
          style={{ padding: '10px' }}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Form>

            <Grid container direction={screenDesktop ? 'row' : 'column'}>
              <Grid item md={8} sm={12}>
                <CustomTextField label="Nome*" name='name' type='text' />
              </Grid>
              <Grid item md={4} sm={12}>
                <CustomTextField label="Código Externo*" name='external_code' type='number' />
              </Grid>
            </Grid>

            <CustomTextField label="Email*" name='email' type='email' />
            <CustomTextField label="Função*" name='role_name' type='text' />
            <ChipInputText
              name='tags'
              label='Tags*'
              value={FormState.tags}
              remove={removeTag} add={addTag}/>

            <Button
              type='submit'
              disabled={!(isValid && dirty)}
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
            >Adicionar</Button>
          </Form>
        </Grid>
      )}
    </Formik>
  )
}

export default UserForm
