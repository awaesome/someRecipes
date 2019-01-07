import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'

class MediaCard extends Component {
	state = {
		recipe: ''
	}

	handleRecipeChosen(recipe) {
		this.setState({
			recipe
		})
	}

	render() {
		const {
			classes,
			recipe: {
				label,
				image,
				yield: serves,
				calories,
				totalTime
			}
		} = this.props;

		const { recipe } = this.state
		console.log(recipe)
	  return (
			<Fragment>
				{
					recipe === ''
						? <Card className={classes.card}>
					      <CardActionArea
									onClick={() => this.handleRecipeChosen(label)}>

					        <CardMedia
					          className={classes.media}
					          image={image}
					          title={label}
					        />
									<CardContent>

					          <Typography style={{whiteSpace: 'nowrap', overflow: 'hidden'}} gutterBottom variant="h6" component="h2">
					            {label}
					          </Typography>

										<div className={classes.infos}>
											<div>
												<span className={classes.info}>{calories.toFixed(0)}</span><br/>Calories
											</div>

											<div>
												<span className={classes.info}>{serves}</span><br/>Yield
											</div>

											<div>
												{
													totalTime !== 0
														? <div>
																<span className={classes.info}>{totalTime}</span><br/>
																<Icon style={{verticalAlign: 'sub'}}>timer</Icon>
															</div>
														: null
												}
											</div>
										</div>
					        </CardContent>
					      </CardActionArea>
				    	</Card>
						: <Redirect
								to={`/recipe/${label.replace(/ /g, '-')}`}
							/>
				}
			</Fragment>
		)
	}

}

export default withStyles(styles)(MediaCard);
