const styles = theme => ({
  root: {
    paddingTop: '80px',
    flexGrow: 1,
  },
  card: {
    flex: '1 1 225px',
    WebkitColumnBreakInside: 'avoid',
          pageBreakInside: 'avoid',
              BreakInside: 'avoid',
    maxWidth: 350,
    minWidth: 200,
    margin: 10
  },
  media: {
    minHeight: '200px',
    height: 300,
  },
  button: {
    width: '90%'
  },
  nutrientsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  },
  detailsArea: {
    display: 'flex',
    alignItems: 'stretch'
  },
  labelsList: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  labelsListItem: {
    width: 'auto',
    padding: 10
  },
  ingredientsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  ingrWeight: {
    color: 'rgba(245, 175, 23, 1)'
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
});

export default styles
