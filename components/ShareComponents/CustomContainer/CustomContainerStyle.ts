import { styled } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import { Theme } from '../../../custom'

export const StyledContainer = styled(Container)({
  height: '100vh',
  paddingTop: '40px',
  paddingBottom: '40px'
})

export const WrraperGrid = styled(Grid)({
  width: '100%',
  height: '100%',
  background: Theme.palette.background.paper,
  padding: '20px',
  display: 'flex',
  borderRadius: 8,
  overflow: 'hidden',
  color: Theme.palette.primary.main
})
