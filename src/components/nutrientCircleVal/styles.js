const styles = theme => ({
  rootContainer: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  valContainer: {
    position: 'relative',
    fontWeight: 600,
    borderRadius: '50%',
    border: '1px solid rgba(57, 124, 142, 0.4)',
    borderTop: 'none',
    width: 100,
    height: 100,
    overflow: 'hidden',
    lineHeight: '100px'
  },
  scale: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(57, 124, 142, 0.4)',
  },
});

export default styles
