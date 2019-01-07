import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import SingleSelect from './singleSelect'
import Button from '@material-ui/core/Button';
import MultipleSelect from './multipleSelect'

const FilterForm = (
		{
			classes,
			handleChange,
			handleClear,
			diet = '',
			health = [],
			ingr = '',
			calories = '',
			time = '',
			excluded = ''
		}
	) => {

  return (
    <List>
      <div className={classes.root}>
        <TextField
          InputLabelProps={{ classes: { focused: classes.cssFocused } }}
          id="standard-with-placeholder"
          name="ingr"
					value={ingr}
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
					value={calories}
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
					value={time}
          label="Time to cook in minutes"
          placeholder="MIN+, MIN-MAX or MAX"
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
        />

				<TextField
          InputLabelProps={{ classes: { focused: classes.cssFocused } }}
          id="standard-with-placeholder"
          name="excluded"
					value={excluded}
          label="Exclude ingridients"
          placeholder="onion, vinegar..."
          className={classes.textField}
          margin="normal"
          onChange={handleChange}
        />

				<SingleSelect value={diet} handleChange={handleChange} name="diet"/>

				<MultipleSelect value={health} handleChange={handleChange} name="health"/>
      </div>

			<br />
			<Button variant="contained"
				className={classes.clear}
				onClick={handleClear}
				>
				Clear options
			</Button>
    </List>
  )
}

FilterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
	diet: PropTypes.string,
	health: PropTypes.array,
	ingr: PropTypes.string,
	calories: PropTypes.string,
	time: PropTypes.string,
	excluded: PropTypes.string,
}

export default withStyles(styles, { withTheme: true })(FilterForm)
