import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import dietVals from '../dataDietValues'

import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const SingleSelect = ({ classes, name, value, handleChange }) => {

  return (
    <FormControl className={classes.formControl}>
      <InputLabel
        classes={{focused: classes.cssFocused, root: classes.cssLabel}}
        htmlFor={`${name}-simple`}>
          { name.replace(/./, letter => letter.toUpperCase()) }
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          name: name,
          id: `${name}-simple`
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          dietVals.map(diet => (
            <MenuItem
              key={diet.toLowerCase().replace(/ /g, '-')}
              value={diet.toLowerCase().replace(/ /g, '-')}
            >
              {diet}
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
	value: PropTypes.string,
}

export default withStyles(styles, { withTheme: true })(SingleSelect)
