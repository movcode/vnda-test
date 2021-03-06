import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const StyleCard = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      background: theme.palette.secondary.main,
      marginBottom: '10px'

    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: theme.palette.primary.main
    }
  })
)

export const StyleChip = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  })
)
