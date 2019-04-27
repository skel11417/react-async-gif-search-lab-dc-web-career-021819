import React, {Component} from 'react'

class GifSearch extends Component {

  render(){
    return (
      <form onChange={this.props.onChange} onSubmit={this.props.onSubmit}>
        <input type="text" value={this.props.searchTerm}/>
        <input type="submit"/>
      </form>
    )
  }

}
export default GifSearch
