import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import MediaCard from './cardRecipe'

class RecipesPage extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.recipes !== this.props.recipes
	}

  render() {
    const { classes, recipes = [] } = this.props
    return (
        <main className={classes.content}>
						{
							recipes.length
								? recipes.map(hit => (
										<MediaCard key={hit.recipe.uri} recipe={hit.recipe} />
									))
								: <h3 style={{display: 'block', margin: '100px auto'}}>Loading...</h3>
						}
        </main>
    )
  }
}

RecipesPage.propTypes = {
  classes: PropTypes.object.isRequired,
  recipes: PropTypes.array
}

export default withStyles(styles, { withTheme: true })(RecipesPage)
