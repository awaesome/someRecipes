import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

// using memo to prevent excessive updates
const SearchForm = memo(( {
	classes,
	handleRequest,
	handleEmptyQuery,
	handleChange,
	emptyQuery,
	value } ) => {

	const handleSubmit = (event) => {
		event.preventDefault()
		value !== ''
			? handleRequest()
			: handleEmptyQuery()
		// const searchInput = event.target.querySelector('input[name="query"]')
		// const query = `q=${searchInput.value}`
		// if(query === 'q=') return handleEmptyQuery()
		// handleRawUrl(query)
	}

  return (
		<Fragment>
			<Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={emptyQuery}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Search field is required</span>}
      />
		<form onSubmit={handleSubmit} style={{display: 'flex'}}>
		    <div className={classes.search}>
		      <div className={classes.searchIcon}>
		        <Icon>search</Icon>
		      </div>
		      <InputBase
						autoFocus={true}
						name="query"
						value={value}
		        placeholder="Search…"
						onChange={handleChange}
		        classes={{
		          root: classes.inputRoot,
		          input: classes.inputInput,
		        }}
		      />
		    </div>
				<Button variant="contained" type="submit" color="secondary" className={classes.button}>
	        Go
	      </Button>
			</form>
		</Fragment>
  )
})

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
	handleRequest: PropTypes.func.isRequired,
	handleEmptyQuery: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	emptyQuery: PropTypes.bool.isRequired,
	query: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(SearchForm);
