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
  name: {
    padding: '20px 0'
  }
});

export default styles
