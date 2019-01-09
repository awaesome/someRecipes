import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import SingleSelect from './singleSelect'
import Button from '@material-ui/core/Button';
import MultipleSelect from './multipleSelect'
import textFields from '../../../constData/textFieldsForFilter'

const FilterForm = (props) => {
	const {
		classes,
		handleChange,
		handleClear,
		diet = '',
		health = []
	} = props

  return (
    <List>
      <div className={classes.root}>

				{
					textFields.map(option => {
						return <TextField
							key={option.name}
		          InputLabelProps={{ classes: { focused: classes.cssFocused } }}
		          id="standard-with-placeholder"
		          name={option.name}
							value={props[option.name]}
		          label={option.label}
		          placeholder={option.placeholder}
		          className={classes.textField}
		          margin="normal"
		          onChange={handleChange}
		        />
					})
				}

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
	health: PropTypes.array
}

export default withStyles(styles, { withTheme: true })(FilterForm)
