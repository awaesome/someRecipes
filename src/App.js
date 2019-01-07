import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import SearchForm from './components/sidebar/searchForm'
import FilterForm from './components/sidebar/filterForm'
import Sidebar from './components/sidebar'
import RecipesPage from './components/mainContent/recipesPage'
import RecipePage from './components/mainContent/recipePage'
import parseOptions from './dataFetch/parseQueryOptions'
import getTestData from './testData'

class App extends Component {
  state = {
		empty: false,
    recipes: [],
		diet: '',
		health: [],
		ingr: '',
		calories: '',
		time: '',
		excluded: ''
  }

	componentDidMount() {
		getTestData()
			.then(recipes => this.setState({
				recipes
			}))
	}

	// fetch data when form with non empty search fild is submitted
	handleRequest = (query) => {
		parseOptions(this.state, query)
			.then(data => this.setState(currentState => ({
				recipes: data.hits
			})))
	}

	// handle submiting empty search fild. set state`s field to true that shows modal for 2 sec
	handleEmptyQuery = () => {
		this.setState(prevState => ({empty: true}))
		setTimeout(() => this.setState(prevState => ({empty: false})), 2000)
	}

	// handle all changes in filter`s fields
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	// clear all fields
	handleClear = () => {
		this.setState({
			diet: '',
			health: [],
			ingr: '',
			calories: '',
			time: '',
			excluded: ''
		})
	}

  render() {
    return (
      <Router>
				<div className='App'>
	      	<Sidebar>
						<SearchForm
							type="searchForm"
							handleRequest={this.handleRequest}
							handleEmptyQuery={this.handleEmptyQuery}
							emptyQuery={this.state.empty} />
						<FilterForm
							type="filterForm"
							handleChange={this.handleChange}
							handleClear={this.handleClear}
							{...this.state}
						/>
					</Sidebar>
					<Route exact path="/" render={() => <RecipesPage recipes={this.state.recipes} />} />
					<Route path="/recipe/:label" render={(props) => <RecipePage recipes={this.state.recipes} {...props} />} />
	      </div>
			</Router>
    )
  }
}

export default App
