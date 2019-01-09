const getData = async url => {
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('mode', 'no-cors')
    const raw = await fetch(url, {headers: myHeaders})
    const data = await raw.json()
    return data
  } catch(err) {
    console.log(err)
    return null
  }
}

export default getData
