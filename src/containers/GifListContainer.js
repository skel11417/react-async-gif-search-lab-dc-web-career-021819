import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = 'http://api.giphy.com/v1/gifs/search?&rating=g'
            + `&api_key=${API_KEY}` + '&q=';

class GifListContainer extends Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      searchTerm: ''
    }
  }

  updateSearchTerm = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
    console.log(this.state.searchTerm)
  }

  searchAPI = () => {
    const searchURL = URL + this.state.searchTerm
    return fetch(searchURL).then(response => response.json())
  }

  searchHandler = (event)=>{
    event.preventDefault()
    this.searchAPI().then(obj => {
      let response = obj.data.slice(0,3)
      this.setState({
        gifs: response,
        searchTerm: ""
      })
    })
  }

  render(){
    return (
      <div>
      <GifSearch onChange={this.updateSearchTerm} onSubmit={this.searchHandler} searchTerm={this.state.searchTerm}/>
      <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
export default GifListContainer
