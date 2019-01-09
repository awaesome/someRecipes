import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import SearchForm from './components/sidebar/searchForm'
import FilterForm from './components/sidebar/filterForm'
import Sidebar from './components/sidebar'
import Snackbar from '@material-ui/core/Snackbar';
import RecipesPage from './components/mainContent/recipesPage'
import RecipePage from './components/mainContent/recipePage'
import parsedUrl from './dataFetch/parseQueryOptions'
import getData from './dataFetch'
import getTestData from './testData'

class App extends Component {
  state = {
		error: false,
		empty: false,
    recipes: [],
		diet: '',
		health: [],
		ingr: '',
		calories: '',
		time: '',
		excluded: '',
		pages: 10,
		query: ''
  }

	componentDidMount() {
		getTestData()
			.then(recipes => this.setState({
				recipes
			}))
	}

	// fetch data when form with non empty search fild is submitted
	handleRequest = (pages = 10) => {
		const url = parsedUrl(this.state, pages)
		getData(url)
			.then(data => {
				return data
				? this.setState({
						recipes: data.hits,
						url,
						pages
					})
				: this.handleFetchError()
			})
	}

	handleBtnMore = () => {
		this.state.url !== '' && this.handleRequest(this.state.pages + 20)
	}

	handleFetchError = () => {
		this.setState({error: true})
		setTimeout(() => this.setState(prevState => ({error: false})), 3000)
	}

	// handle submiting empty search fild. set state`s field to true that shows modal for 2 sec
	handleEmptyQuery = () => {
		this.setState({empty: true})
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
					<Snackbar
		        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
		        open={this.state.error}
		        ContentProps={{
		          'aria-describedby': 'message-id',
		        }}
		        message={<span id="message-id">
							Can't get recipes. Try another variants <br /> + Limited requests by 1 min :( 
						</span>}
		      />
	      	<Sidebar>
						<SearchForm
							type="searchForm"
							handleRequest={this.handleRequest}
							handleEmptyQuery={this.handleEmptyQuery}
							emptyQuery={this.state.empty}
							handleChange={this.handleChange}
							value={this.state.query} />
						<FilterForm
							type="filterForm"
							handleChange={this.handleChange}
							handleClear={this.handleClear}
							{...this.state}
						/>
					</Sidebar>
					<Route exact path="/" render={() => <RecipesPage
							recipes={this.state.recipes}
							handleBtnMore={this.handleBtnMore} />} />
					<Route path="/recipe/:label" render={(props) => <RecipePage
							recipes={this.state.recipes}
							{...props} />} />
	      </div>
			</Router>
    )
  }
}

export default App
