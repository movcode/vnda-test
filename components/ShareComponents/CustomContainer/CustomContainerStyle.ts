import { styled } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { Theme } from '../../../custom'

export const StyledContainer = styled(Container)({
  height: '100vh',
  paddingTop: '40px',
  paddingBottom: '40px',
  display: 'flex',
  overflow: 'hidden',
  color: Theme.palette.primary.main
})
