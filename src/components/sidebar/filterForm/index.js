import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import healthVals from './dataHealthValues'
import dietVals from './dataDietValues'

const FilterForm = ({ classes, handleChange, diet, health }) => {

  return (
    <List>
      <div className={classes.root}>
        <TextField
          InputLabelProps={{ classes: { focused: classes.cssFocused } }}
          id="standard-with-placeholder"
          name="ingr"
          label="Number of ingridients"
          placeholder="e.g. 5"
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          InputLabelProps={{ classes: { focused: classes.cssFocused } }}
          id="standard-with-placeholder"
          name="calories"
          label="Calories"
          placeholder="MIN+, MIN-MAX or MAX"
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          InputLabelProps={{ classes: { focused: classes.cssFocused } }}
          id="standard-with-placeholder"
          name="time"
          label="Time to cook in minutes"
          placeholder="MIN+, MIN-MAX or MAX"
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
        />

        <FormControl className={classes.formControl}>
          <InputLabel
            classes={{focused: classes.cssFocused, root: classes.cssLabel}}
            htmlFor="diet-simple">
              Diet
          </InputLabel>
          <Select
            value={diet}
            onChange={handleChange}
            inputProps={{
              name: 'diet',
              id: 'diet-simple'
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

        <FormControl className={classes.formControl}>
          <InputLabel
            classes={{focused: classes.cssFocused, root: classes.cssLabel}}
            htmlFor="select-multiple">
              Health
          </InputLabel>
          <Select
            multiple
            value={health}
            onChange={handleChange}
            input={<Input name="health" id="select-multiple" />}
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
      </div>
    </List>
  )
}

FilterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(FilterForm)
