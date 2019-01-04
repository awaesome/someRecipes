import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

const SearchForm = ( { classes, handleEvent, handleEmptyQuery, emptyQuery } ) => {
	const handleSubmit = (event) => {
		event.preventDefault()
		const searchInput = event.target.querySelector('input[name="query"]')
		const query = `q=${searchInput.value}`
		if(query === 'q=') return handleEmptyQuery()
		handleEvent(query)
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
			<form onSubmit={handleSubmit}>
		    <div className={classes.search}>
		      <div className={classes.searchIcon}>
		        <Icon>search</Icon>
		      </div>
		      <InputBase
						autoFocus="true"
						name="query"
		        placeholder="Search…"
		        classes={{
		          root: classes.inputRoot,
		          input: classes.inputInput,
		        }}
		      />
		    </div>
			</form>
		</Fragment>
  );
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
	handleEvent: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(SearchForm);
