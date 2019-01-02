import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '80%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      margin: '10px auto',
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      backgroundColor: fade(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      transition: theme.transitions.create('width'),
      width: '50%',
      '&:focus': {
        width: '80%',
      },
    }
});

export default styles
