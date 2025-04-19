export const fetchSongs = async (query) => {
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song`);
    const data = await response.json();
    return data.results;
  };
  