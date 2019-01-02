import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/sidebar/searchForm'
import Sidebar from './components/sidebar'
import MainContent from './components/mainContent'

const API_ID = 'd5b2f805'
const API_KEY = '29eb0d46f6796fbf7eeffd8d5cb0a0df'

class App extends Component {
  state = {
    recipes: []
  }

  fetchRecipes = (options) => {
    const { query, ingr = "", diet = "", health = "", calories = "", time = "" } = options
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
					<SearchForm />
				</Sidebar>
				<MainContent />
      </div>
    );
  }
}

export default App;
