const styles = theme => ({
  cssFocused: {
    color: '#FF8E53 !important'
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 200,
  },
  cssLabel: {
    '& + div::after': {
      borderColor: '#FF8E53'
    },
  }
})

export default styles
