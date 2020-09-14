import ChipInput from 'material-ui-chip-input'
import { Field } from 'formik'
import StyleTextField from './StyleInputChip'

interface Props {
  name:string,
  label: string,
  error?: boolean,
  value:[],
  add:(tag:string) => void,
  remove:(index:number)=>void

}

const ChipInputText = ({ name, label, error = false, value, add, remove }: Props) => {
  const classes = StyleTextField()

  return (
    <Field
      as={ChipInput}
      onAdd={tag => add(tag)}
      onDelete={(chip, index) => remove(index)}
      name={name}
      value={value}
      placeholder='Digite a tag e aperte enter'
      className={classes.root}
      InputProps={{ className: classes.input }}
      InputLabelProps={{ className: classes.label }}
      label={label}
      error={error} />
  )
}

export default ChipInputText
