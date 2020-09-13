import { styled } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import { Theme } from '../../../custom'

export const StyledContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const WrraperGrid = styled(Grid)({
  width: '100%',
  height: 'auto',
  background: Theme.palette.background.paper,
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: 4,
  color: Theme.palette.primary.main
})
