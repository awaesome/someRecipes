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
      margin: '10px',
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 6,
      background: 'linear-gradient(45deg, #fad3dc 30%, #fad3bf 90%)',
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      transition: theme.transitions.create('width'),
      width: '40%',
      '&:focus': {
        width: '80%',
      },
    },
    button: {
      margin: 10,
      minWidth: 45
    }
});

export default styles
