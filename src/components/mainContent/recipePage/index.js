import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import styles from './styles'
import NutrientCircleVal from '../../nutrientCircleVal'
import MiniInfo from '../../miniInfo'
import Labels from '../../labelsInfo'

class RecipePage extends Component {

	// prevent unnecessary updates
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.recipes !== this.props.recipes
	}

  render() {
    const { classes, recipes, match: {params: { label: urlLabel }} } = this.props
		const getRecipe = recipes.find(rec => rec.recipe.label === urlLabel.replace(/-/g, ' '))

		if (!getRecipe) return <Redirect to='/'/>

		const {
			calories,
			totalTime,
			image,
			label,
			healthLabels,
			dietLabels,
			ingredients,
			url,
			yield: serves,
			source
		 } = getRecipe.recipe

    return (
        <Grid container justify="center" className={classes.root} spacing={16}>
					<Grid item xs={10}>

						{/*  RECIPE HEADER */}
						<Grid container spacing={16}>

							{/* picture area */}
							<Grid item xs={12} md={4}>
								<Card className={classes.card}>
								    <CardMedia
								      className={classes.media}
								      image={image}
								      title={label}
								    />
									</Card>
			        </Grid>

							{/* details area */}
							<Grid item xs={12} md={8} className={classes.detailsArea}>
								<Grid container justify="center" spacing={16}>

									{/* RECIPE NAME */}
									<Typography gutterBottom variant="h4">
										{label}
									</Typography>

									<Divider style={{width: '100%'}}/>

									<Grid item xs={12}>
										<Grid container justify="center" spacing={16}>

											{/*  DIET LABELS */}
											<Grid item xs={12} md={6}>
						            <Labels labels={dietLabels} title="Diet"/>
					          	</Grid>

											{/*  HEALTH LABELS */}
											<Grid item xs={12} md={6}>
						            <Labels labels={healthLabels} title="Health"/>
					          	</Grid>
				          	</Grid>
				          </Grid>

									<Divider style={{width: '100%'}}/>

									{/*  MINI INFOS */}
									<Grid item xs={12} >
										<MiniInfo
											totalTime={totalTime}
											calories={calories}
											serves={serves}
										/>

									</Grid>
								</Grid>
							</Grid>
	        	</Grid>

						<Divider style={{width: '100%', margin: '20px 0'}}/>

						{/*  RECIPE BODY */}
						<Grid xs={12}>
							<Grid container spacing={16}>

								{/*  RECIPE INGREDIENTS LIST & SOURCE BUTTON */}
								<Grid xs={12} md={8} className={classes.ingredientsList}>
									<h2>Ingredients - (weight)</h2>
									{
										ingredients.map(({text, weight}) => (
											<p key={weight.toFixed(0)}>
												{text} - (<span className={classes.ingrWeight}>
													{weight.toFixed(2)}
												</span>)
											</p>
										))
									}
									<Divider style={{width: '90%'}}/>
									<h4>Source with insctuctions:</h4>

									<Button
										variant="contained"
										fullWidth={true}
										size="large"
										color="secondary"
										className={classes.button}
									>
						        <a className={classes.link} target="_tab" href={`${url}`}>{source}</a>
						      </Button>

								</Grid>

								{/*  NUTRIENTS VALUES */}
								<Grid xs={12} md={4}>
									<h2>% daily value for the entire recipe</h2>
									<Grid container className={classes.nutrientsContainer} spacing={16}>
										<NutrientCircleVal recipe={getRecipe.recipe} />
									</Grid>
								</Grid>
							</Grid>
						</Grid>
	        </Grid>
        </Grid>
    )
  }
}

RecipePage.propTypes = {
  classes: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired
}

export default withStyles(styles, { withTheme: true })(RecipePage)
