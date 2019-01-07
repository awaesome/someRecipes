import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'
import healthVals from '../dataHealthValues'
import styles from './styles'

const SingleSelect = ({ classes, name, value, handleChange }) => {

  return (
    <FormControl className={classes.formControl}>
      <InputLabel
        classes={{focused: classes.cssFocused, root: classes.cssLabel}}
        htmlFor="select-multiple">
          { name.replace(/./, letter => letter.toUpperCase()) }
      </InputLabel>
      <Select
        multiple
        value={value}
        onChange={handleChange}
        input={<Input name={name} id="select-multiple" />}
      >
        {
          healthVals.map(val => (
          <MenuItem
            key={val.toLowerCase().replace(/ /g, '-')}
            value={val.toLowerCase().replace(/ /g, '-')}
          >
            {val}
          </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

SingleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
	name: PropTypes.string,
	value: PropTypes.array,
}

export default withStyles(styles, { withTheme: true })(SingleSelect)
