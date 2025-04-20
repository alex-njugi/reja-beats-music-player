import React from 'react';

const SongList = ({ songs, onSelect }) => {
    if (songs.length === 0) {
        return <p>No songs found. Please try a different search.</p>;
    }

    return (
        <div>
            <h2>Song List</h2>
                {songs.map((song) => (
                    <li 
                        key={song.trackId} 
                        onClick={() => onSelect(song)} 
                    >

                        <img 
                            src={song.artworkUrl100} 
                            alt={`${song.trackName} album cover`} 
                        />
                        <div>
                            <p>{song.trackName}</p>
                            <p>{song.artistName}</p>
                        </div>
                    </li>
                ))}
        </div>
    );
};


export default SongList;
