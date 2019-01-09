import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const NutrientCircleVal = (props) => {

    const { classes, recipe } = props

		// convert from object to an array to iterate
		const dailyNutrients = []
		for(let i in recipe.totalDaily) {
		  dailyNutrients.push(recipe.totalDaily[i])
		}

    return (
			dailyNutrients.map(({label, quantity}) => {
				const heigth = quantity < 100
					? quantity.toFixed(1)
					: quantity % 100
				return (
					<React.Fragment>
						<div className={classes.rootContainer}>
							<div className={classes.valContainer}>
								{
                  quantity.toFixed(1)}%
								  <div className={classes.scale} style={{height: `${heigth}%`}}>
								</div>
							</div>
							<span>{label}</span>
						</div>
					</React.Fragment>
				)
			})
    )
}

NutrientCircleVal.propTypes = {
  classes: PropTypes.object.isRequired,
  recipe: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(NutrientCircleVal)
