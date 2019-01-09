import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import MiniInfo from '../../../miniInfo'

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

										<MiniInfo
											totalTime={totalTime}
											calories={calories}
											serves={serves}
											/>

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
