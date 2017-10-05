import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     term: ''
   };

   this.handleTermChange = this.handleTermChange.bind(this);
   this.search = this.search.bind(this);
   this.keyPress = this.keyPress.bind(this);
 }

 handleTermChange(event) {
   this.setState({term: event.target.value});
 }

 search() {
    this.props.onSearch(this.state.term);
  }

  keyPress(event) {
    if(event.keyCode === 13) {
        this.search();
    }
}



  render() {
    return (
      <div className="SearchBar">
        <p>Create a Playlist. Save it to your Spotify</p>
        <input onKeyDown={this.keyPress} onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />

        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
