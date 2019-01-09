import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './styles'

const LabelsInfo = ({ classes, labels, title }) => {

    return (
      <Fragment>
        <Typography variant="h6">
          {title} labels
        </Typography>
        <div>
          <List className={classes.labelsList}>
            {
							labels.length !== 0
							?
								labels.map(label => (
									<ListItem key={label} className={classes.labelsListItem}>
                    <ListItemText
                      primary={label}
                    />
                  </ListItem>
								))
							: <Typography variant="h5">
		              None
		            </Typography>
            }
          </List>
        </div>
      </Fragment>
    )
}

LabelsInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  labels: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(LabelsInfo)
