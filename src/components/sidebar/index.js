import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

class Sidebar extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, children } = this.props

		// create new object, witch hold all children types so do not inject them like children[0]
		// output - { searchForm: component, filterForm: component }
		const forms = children.reduce((acc, form) => {
			return {
				...acc,
				[form.props.type]: form
			}
		}, {})

		// sidebar that hides on small screens and can be opened with button
    const drawer = (
      <React.Fragment>
        <Hidden xsDown implementation="css">
					<Link to="/" style={{textDecoration: 'none'}}>
						<Button variant="contained"
							className={classes.btnHome}
							>
							Home
						</Button>
					</Link>
          { forms.searchForm }
        </Hidden>
        <Divider />
        	{ forms.filterForm }
        <Divider />
      </React.Fragment>
    );

    return (
        <nav className={classes.drawer}>
					{/* invisible on small screens */}
          <Hidden smUp implementation="css">
            <AppBar position="fixed" color="default" className={classes.appBar}>
							<Link to="/" style={{textDecoration: 'none'}}>
								<Button variant="contained"
									className={classes.btnHome}
									>
									Home
								</Button>
							</Link>
              <Fab color="primary" size="small" aria-label="Add" className={classes.fab} onClick={this.handleDrawerToggle}>
                <Icon>menu</Icon>
              </Fab>
              <div className={classes.grow} />
                { forms.searchForm }
            </AppBar>
            <Drawer
              container={this.props.container}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>

					{/* visible on medium+ screens */}
          <Hidden xsDown implementation="css">
            <Drawer
              container={this.props.container}
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar);
