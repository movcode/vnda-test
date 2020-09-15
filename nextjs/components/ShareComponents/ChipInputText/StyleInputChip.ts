import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '../../../custom'
export default makeStyles({
  root: {
    width: '100%',
    color: '#fff',
    marginBottom: '20px',
    '& .WAMuiChipInput-underline-23:before': {
      borderBottom: `2px solid ${Theme.palette.secondary.main}`
    },
    '& .WAMuiChipInput-underline-23:after': {
      borderBottom: `2px solid ${Theme.palette.primary.main}`
    },
    '&:hover': {
      '& .WAMuiChipInput-underline-23:before': {
        borderBottom: `2px solid ${Theme.palette.secondary.main}`
      },
      '& .WAMuiChipInput-underline-23:after': {
        borderBottom: `2px solid ${Theme.palette.primary.main}`
      }
    }

  },
  input: {
    color: 'white'
  },
  label: { color: 'white' }
})
