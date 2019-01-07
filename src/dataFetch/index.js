const getData = async url => {
  const raw = await fetch(url)
  const data = await raw.json()
  return data
}

export default getData
