import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
   constructor(props) {
   super(props);

   this.handleNameChange = this.handleNameChange.bind(this);
 }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={this.props.playlistName} />
          <TrackList onRemove={this.props.onRemove} tracks={this.props.playlistTracks} isRemoval={true} />
        <a onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
};

export default Playlist;
