import React, { useState, useEffect } from 'react';

const Home = () => {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSongs('drake'); 
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) fetchSongs(query);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchSongs = (searchTerm) => {
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&media=music&limit=25`)
      .then((res) => res.json())
      .then((data) => {
        setSongs(data.results);
        setError(null);
      })
      .catch(() => {
        setError('Something went wrong while fetching songs.');
        setSongs([]);
      });
  };