import { useState, ChangeEvent } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import useStyles from './CustomInputStyle'

const CustomInputSelect = () => {
  const classes = useStyles()
  const [age, setAge] = useState('')

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string)
  }
  return (
    <FormControl className={classes.root}>
      <InputLabel className={classes.label}>Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={'Gestor'}>Gestor</MenuItem>
        <MenuItem value={'Agente'}>Agente</MenuItem>
        <MenuItem value={'Local'}>Local</MenuItem>
      </Select>
    </FormControl>
  )
}

export default CustomInputSelect
