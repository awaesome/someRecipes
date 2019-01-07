import getData from './'

const API_ID = 'd5b2f805'
const API_KEY = '29eb0d46f6796fbf7eeffd8d5cb0a0df'

const parseOptions = (state, query) => {
  const { diet, health, ingr, calories, time, excluded } = state

  const urlHealth = health.length !== 0
    ? health.reduce((parsed, raw) => {
        return `${parsed}&health=${raw}`
      }, '')
    : ''

  const urlDiet = diet !== '' ? `&diet=${diet}` : ''

  const encTime = encodeURIComponent(time.trim().replace(/[^-+\d]/g, ''))
  const urlTime = encTime !== '' ? `&time=${encTime}` : ''

  const encCalories = encodeURIComponent(calories.trim().replace(/[^-+\d]/g, ''))
  const urlCalories = encCalories !== '' ? `&calories=${encCalories}` : ''

  const urlIngr = ingr !== '' ? `&ingr=${ingr.trim().replace(/\D/g, '')}` : ''

  const filteredExcluded = excluded !== ''
    ? excluded.trim().replace(/, +| +/g, ',')
    : ''
  const urlExcluded = filteredExcluded !== ''
    ? filteredExcluded.split(',').reduce((parsed, raw) => {
        return `${parsed}&excluded=${raw}`
      }, '')
    : ''

  const options = [ query, urlDiet, urlHealth, urlIngr, urlCalories, urlTime, urlExcluded ]
    .filter(option => option !== '').toString().replace(/,/g, '')

  const url = `https://api.edamam.com/search?${options}&app_id=${API_ID}&app_key=${API_KEY}&to=10`
  return getData(url)
}

export default parseOptions
