const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
 },
 btnHome: {
   margin: 10,
   minWidth: 50
 }
});

export default styles
