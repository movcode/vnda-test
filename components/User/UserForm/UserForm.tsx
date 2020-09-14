
import { Formik, Form, Field, FormikValues, ErrorMessage } from 'formik'
import { Grid, Button } from '@material-ui/core'
import { CustomTextField, ChipInputText } from '../../ShareComponents'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import UserFormValidation from './UserValidationForm'
import InputSelectRoles from './InputSelectRoles'
import IUser from '../IUser'

interface Props {
  handleSubmit: any,
  formState: IUser,
  update: boolean,
}

const UserForm = ({ handleSubmit, update, formState }: Props) => {
  const screenDesktop = useMediaQuery('(min-width:600px)')

  const addTag = (tag: never) => formState.tags.push(tag)

  const removeTag = (key: number) => {
    formState.tags.splice(key, 1)
  }

  return (
    <Formik
      enableReinitialize
      initialValues={formState}
      validationSchema={UserFormValidation}
      onSubmit={(valeus: FormikValues, { resetForm }) => {
        handleSubmit(valeus)
        resetForm()
      }}
    >
      {({ isValid, dirty, setFieldValue }) => (
        <Grid
          container
          style={{ padding: '10px' }}
          direction="column"

        >
          <Grid item xs={12}>
            <Form >
              <Field type='hidden' name='role_name' />
              <ErrorMessage name="name" className='role_name' component='span' />
              <Grid container direction={screenDesktop ? 'row' : 'column'}>
                <Grid item md={8} sm={12}>
                  <CustomTextField label="Nome*" name='name' type='text' />
                  <ErrorMessage name="name" className='error' component='span' />
                </Grid>
                <Grid item md={4} sm={12}>
                  <CustomTextField label="Código Externo*" name='external_code' type='text' />
                  <ErrorMessage name="external_code" className='error' component='span' />
                </Grid>
              </Grid>
              <CustomTextField label="Email*" name='email' type='email' />
              <ErrorMessage name="email" className='error' component='span' />

              <ChipInputText
                name='tags'
                label='Tags'
                value={formState.tags}
                remove={removeTag} add={addTag} />

              <InputSelectRoles
                changed={(value: string) => setFieldValue('role_name', value)}
                label={formState.role_name.length > 0 ? formState.role_name : 'Função*'} />

              <Button
                type='submit'
                disabled={!update && !(isValid && dirty)}
                variant="contained"
                color="secondary"
                fullWidth
                size="large">{update ? 'Alterar' : 'Adicionar'}</Button>
            </Form>
          </Grid>
        </Grid>
      )}
    </Formik>
  )
}

export default UserForm
