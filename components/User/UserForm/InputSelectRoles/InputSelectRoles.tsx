import { useState, ChangeEvent } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import useStyles from './StyleInputSelectRoles'

interface Props{
    label:string,

    changed : (value:string) => void
}
const CustomInputSelect = ({ label, changed }:Props) => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const data = event.target.value as string
    setValue(data)
    changed(data)
  }

  return (
    <FormControl className={classes.root}>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
      >
        <MenuItem className={classes.label} value={'Gestor'}>Gestor</MenuItem>
        <MenuItem className={classes.label} value={'Agente'}>Agente</MenuItem>
        <MenuItem className={classes.label} value={'Local'}>Local</MenuItem>
      </Select>
    </FormControl>
  )
}

export default CustomInputSelect
