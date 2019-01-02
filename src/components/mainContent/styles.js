const styles = theme => ({
  content: {
    position: 'relative',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: '80px',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 3
    }
  },
});

export default styles
