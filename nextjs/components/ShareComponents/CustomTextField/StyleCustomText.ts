import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '../../../custom'
export default makeStyles({
  root: {
    width: '100%',
    color: '#fff',
    marginBottom: '20px',
    '& .MuiInput-underline:before': {
      borderBottom: `2px solid ${Theme.palette.secondary.main}`
    },
    '& .MuiInput-underline:after': {
      borderBottom: `2px solid ${Theme.palette.primary.main}`
    },
    '&:hover': {
      '& .MuiInput-underline:before': {
        borderBottom: `2px solid ${Theme.palette.secondary.main}`
      },
      '& .MuiInput-underline:after': {
        borderBottom: `2px solid ${Theme.palette.primary.main}`
      }
    }

  },
  input: {
    color: 'white'
  },
  label: { color: 'white' }
})
