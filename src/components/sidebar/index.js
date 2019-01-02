import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    const { classes } = this.props;

    const drawer = (
      <React.Fragment>
        <Hidden xsDown implementation="css">
          {this.props.children}
        </Hidden>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </React.Fragment>
    );

    return (
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <AppBar position="fixed" color="default" className={classes.appBar}>
              <Toolbar>
                <Fab color="primary" size="small" aria-label="Add" className={classes.fab} onClick={this.handleDrawerToggle}>
                  <Icon>menu</Icon>
                </Fab>
                <div className={classes.grow} />
                  {this.props.children}
                </Toolbar>
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
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Sidebar);
