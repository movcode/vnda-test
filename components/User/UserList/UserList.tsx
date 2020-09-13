import { Grid } from '@material-ui/core'
import { Card } from '../../ShareComponents'
import { WrraperList, StyleList } from './UserListStyle'
const UserList = () => {
  return (
    <WrraperList >
      <Grid container justify='center' alignItems='center'>
        <img width='18' src='/imgs/mouse_up.png' />
      </Grid>
      <StyleList className='scroll'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StyleList>
      <Grid container justify='center' alignItems='center'>
        <img width='18' src='/imgs/mouse_down.png' />
      </Grid>
    </WrraperList>
  )
}

export default UserList
