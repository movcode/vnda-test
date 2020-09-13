import { styled } from '@material-ui/core/styles'
import { Grid, List } from '@material-ui/core'

export const WrraperList = styled(Grid)({
  width: '100%',
  height: '100%',
  paddingLeft: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
})

export const StyleList = styled(List)({
  width: '100%',
  height: '700px',
  overflow: 'auto',
  marginTop: '10px',
  marginBottom: '10px'
})
