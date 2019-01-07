const styles = theme => ({
  textField: {
    '& > div::after': {
        borderColor: '#FF8E53'
    },
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  cssFocused: {
    color: '#FF8E53 !important'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
})

export default styles
