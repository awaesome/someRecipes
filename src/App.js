import React, { Component } from 'react'
import './App.css'
import SearchForm from './components/sidebar/searchForm'
import FilterForm from './components/sidebar/filterForm'
import Sidebar from './components/sidebar'
import MainContent from './components/mainContent'

const API_ID = 'd5b2f805'
const API_KEY = '29eb0d46f6796fbf7eeffd8d5cb0a0df'

class App extends Component {
  state = {
		empty: false,
    recipes: [],
		diet: '',
		health: [],
		ingr: '',
		calories: '',
		time: ''
  }

	handleEvent = (query) => {
		const { diet, health, ingr, calories, time } = this.state

		const urlHealth = health.length !== 0
			? health.reduce((parsed, raw) => {
					return `${parsed}&health=${raw}`
				}, '')
			: ''

		const urlDiet = diet !== ''
			? `&diet=${diet}`
			: ''

		const encTime = encodeURIComponent(time.replace(/[^-+\d]/))

		const urlTime = encTime !== ''
			? `&time=${time.replace(/[^-+\d]/)}`
			: ''

		const rawCalories = calories !== ''
			? `&calories=${calories.replace(/[^-+\d]/)}`
			: ''
		const urlCalories = encodeURIComponent(rawCalories)

		const rawIngr = ingr !== ''
			? `&ingr=${ingr.replace(/\D/)}`
			: ''

		console.log(urlTime, urlCalories)
	}

	handleEmptyQuery = () => {
		this.setState(prevState => ({empty: true}))
		setTimeout(() => this.setState(prevState => ({empty: false})), 2000)
	}

	handleChange = (event) => {
		console.log([event.target.name], event.target.value)
		this.setState({ [event.target.name]: event.target.value })
	}

  fetchRecipes = (options) => {
    const { query, ingr = "", calories = "", time = "" } = options
    if (!query) return
    const url = `q=${query}${calories}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3`
    console.log(encodeURIComponent(url))
    console.log(url)

  }

  render() {
    const recipeOptions = {
      query: 'burger,onion',
      diet: '&diet=high-fiber',
      health: '&health=peanut-free&health=tree-nut-free',
      time: '&time=10+'
    }
    return (
      <div className='App'>
      	<Sidebar>
					<SearchForm
						handleEvent={this.handleEvent}
						handleEmptyQuery={this.handleEmptyQuery}
						emptyQuery={this.state.empty} />
					<FilterForm handleChange={this.handleChange} {...this.state}/>
				</Sidebar>
				<MainContent />
      </div>
    )
  }
}

export default App
