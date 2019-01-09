import React, { Fragment } from 'react'
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

const MiniInfo = ({classes, calories, serves, totalTime }) => {
  return (
		<Fragment>
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
		</Fragment>
	)
}

export default withStyles(styles)(MiniInfo);
