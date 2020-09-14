import { styled } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { Theme } from '../../../custom'

export const StyledContainer = styled(Container)({
  height: 'auto',
  paddingTop: '20px',
  paddingBottom: '20px',
  display: 'flex',
  overflow: 'hidden',
  color: Theme.palette.primary.main
})
