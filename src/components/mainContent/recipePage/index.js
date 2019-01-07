import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles'

class RecipePage extends React.Component {

	// prevent unnecessary updates
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.recipes !== this.props.recipes
	}

  render() {
    const { classes, recipes, match: {params: { label }} } = this.props
		const getRecipe = recipes.find(rec => rec.recipe.label === label.replace(/-/g, ' '))

		if (!getRecipe) return (<h1>404</h1>)
		
		const { recipe } = getRecipe
    return (
        <Grid container className={classes.root} spacing={16}>
					<Grid item xs={10}>
						<Grid container justify="center" spacing={16}>
							<Grid item xs={12} md={4}>
								<Card className={classes.card}>
								    <CardMedia
								      className={classes.media}
								      image={recipe.image}
								      title={recipe.label}
								    />
									</Card>
			        </Grid>

							<Grid item xs={12} md={4}>
								<Typography className={classes.name} gutterBottom variant="h4">
									{recipe.label}
								</Typography>
							</Grid>
	        	</Grid>
	        </Grid>
        </Grid>
    )
  }
}

RecipePage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(RecipePage)
