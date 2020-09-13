import { makeStyles } from '@material-ui/core/styles'

interface StyleProps {
  top: string | null,
  bottom: string | null,
  color: string | null,
  size: string | null,
}

export default makeStyles({
  title: (props: StyleProps) => ({
    marginTop: props?.top || '40px',
    marginBottom: props?.bottom || '40px',
    width: '100%',
    textAlign: 'center',
    color: props?.color || 'white',
    fontFamily: 'Poppins',
    fontSize: props?.size || '25px',
    fontWeight: 200
  })
})
