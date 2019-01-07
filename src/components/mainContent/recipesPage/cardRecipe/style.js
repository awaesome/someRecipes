const styles = theme => ({
  card: {
    flex: '1 1 225px',
    WebkitColumnBreakInside: 'avoid',
          pageBreakInside: 'avoid',
              BreakInside: 'avoid',
    maxWidth: 345,
    minWidth: 200,
    margin: 10
  },
  chips: {
    display: 'flex',
    alignItems: 'center'
  },
  media: {
    minHeight: '200px'
  },
  info: {
    color: '#FF8E53',
    padingTop: 10,
    fontSize: 24
  },
  infos: {
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'space-around'
  }
});

export default styles
