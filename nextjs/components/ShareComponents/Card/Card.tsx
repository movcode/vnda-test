/* eslint-disable camelcase */
import React from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineDownCircle } from 'react-icons/ai'

import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { StyleCard } from './CardStyle'
import { Alert } from '..'

interface Props {
  id: string,
  name: string,
  email: string,
  external_code: string,
  remove: (id: string) => void,
  edit:()=>void
}

export default function RecipeReviewCard ({ id, name, email, external_code, remove, edit }: Props) {
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
            {name?.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={`${external_code} - ${name}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="delete user" onClick={() => Alert.AlertDelete(remove, id)}>
          <AiFillDelete />
        </IconButton>

        <IconButton aria-label="user edit" onClick={edit}>
          <AiFillEdit />
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
          <AiOutlineDownCircle />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container ><Typography paragraph>Código externo: <b>{external_code}</b></Typography></Grid>
          <Grid container ><Typography paragraph>Nome: <b>{name}</b></Typography></Grid>
          <Grid container ><Typography paragraph>Email: <b>{email}</b></Typography></Grid>
        </CardContent>
      </Collapse>
    </Card>
  )
}
