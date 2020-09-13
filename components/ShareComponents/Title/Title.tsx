
import { ReactChildren, ReactChild } from 'react'
import { Grid } from '@material-ui/core'
import useStyle from './TitleStyle'
interface Props {
  children: ReactChildren | ReactChild,
  top?: string | null,
  bottom?: string | null,
  color?: string | null,
  size?: string | null,
}

const Title = ({ children, color = null, size = null, top = null, bottom = null }: Props) => {
  const classes = useStyle({ color, size, top, bottom })
  return (
    <Grid className={classes.title}>
      {children}
    </Grid>
  )
}

export default Title
