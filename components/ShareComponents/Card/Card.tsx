import React from 'react'

import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { StyleCard } from './CardStyle'
export default function RecipeReviewCard () {
  const classesCard = StyleCard()

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classesCard.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classesCard.avatar}>
                        R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">

          </IconButton>
        }
        title="1338 - Shrimp and Chorizo Paella"
        subheader="movcode2@gmail.com"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

        </IconButton>
        <IconButton aria-label="share">

        </IconButton>
        <IconButton
          className={clsx(classesCard.expand, {
            [classesCard.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >

        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container >
            <Typography paragraph>Função: Aagente</Typography>
          </Grid>

          <Grid container justify='center' alignItems='center' xs={12} md={12}>  <Typography paragraph>Tags:</Typography></Grid>
          <Grid container>  <Typography paragraph>Tags:</Typography></Grid>
          <Grid container wrap='wrap'>
            <Chip label="Basic" />
            <Chip label="Basic" />
            <Chip label="Basic" />
            <Chip label="Basic" />
          </Grid>

        </CardContent>
      </Collapse>
    </Card>
  )
}
