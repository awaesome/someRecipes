import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import styles from './styles'
import MediaCard from './cardRecipe'

class RecipesPage extends Component {

	// prevent unnecessary updates
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.recipes !== this.props.recipes
	}

  render() {
    const { classes, recipes = [], handleBtnMore } = this.props
    return (
      <main className={classes.content}>
					{
						recipes.length
							? recipes.map(hit => (
									<MediaCard key={hit.recipe.uri} recipe={hit.recipe} />
								))
							: <h3 style={{display: 'block', margin: '100px auto'}}>Loading...</h3>
					}
					<Button
						variant="outlined"
						size="large"
						fullWidth={true}
						color="secondary"
						onClick={handleBtnMore}
					>
						MORE
					</Button>
      </main>
    )
  }
}

RecipesPage.propTypes = {
  classes: PropTypes.object.isRequired,
  recipes: PropTypes.array,
	handleBtnMore: PropTypes.func
}

export default withStyles(styles, { withTheme: true })(RecipesPage)
