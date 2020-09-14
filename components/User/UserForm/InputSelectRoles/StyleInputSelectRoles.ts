import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
      margin: theme.spacing(1),
      minWidth: 120,
      color: '#fff'
    },
    selectEmpty: {
      color: '#fff',
      marginTop: theme.spacing(2)
    },

    root: {
      width: '100%',
      color: '#fff',
      marginBottom: '20px',
      '& .MuiSelect-root': { color: 'white' },
      '& .MuiInput-underline:before': {
        color: 'white',
        borderBottom: `2px solid ${theme.palette.secondary.main}`
      },
      '& .MuiInput-underline:after': {
        borderBottom: `2px solid ${theme.palette.primary.main}`
      },
      '&:hover': {
        '& .MuiInput-underline:before': {
          borderBottom: `2px solid ${theme.palette.secondary.main}`
        },
        '& .MuiInput-underline:after': {
          borderBottom: `2px solid ${theme.palette.primary.main}`
        }
      }

    },
    input: {
      color: 'white'
    },
    label: { color: 'white' }
  })
)
