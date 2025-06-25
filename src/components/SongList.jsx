import React from 'react';
import SongCard from './SongCard'; 

const SongList = ({ songs, onSelect }) => {
  if (songs.length === 0) {
    return <p>No songs found. Please try a different search.</p>;
  }

  return (
    <div className="song-list">
      {songs.map((song) => (
        <SongCard key={song.trackId} song={song} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default SongList;
