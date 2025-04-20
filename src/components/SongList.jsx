import React from 'react';

const SongList = ({ songs, onSelect }) => {
    if (songs.length === 0) {
        return <p>No songs found. Please try a different search.</p>;
    }

    return (
        <div>
            <h2>Song List</h2>
            <ul style={styles.songList}>
                {songs.map((song) => (
                    <li 
                        key={song.trackId} 
                        onClick={() => onSelect(song)} 
                        style={styles.songItem}
                    >

                        <img 
                            src={song.artworkUrl100} 
                            alt={`${song.trackName} album cover`} 
                            style={styles.albumArt} 
                        />
                        <div style={styles.songInfo}>
                            <p style={styles.trackName}>{song.trackName}</p>
                            <p style={styles.artistName}>{song.artistName}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default SongList;