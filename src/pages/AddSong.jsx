import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AddSong() {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album_cover: '',
    url: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://music-player-backend-test2.onrender.com/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // important to send JWT cookie
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to upload song');

      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
      setFormData({
        title: '',
        artist: '',
        album_cover: '',
        url: '',
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="add-song-container" data-aos="fade-up">
      <div className="form-card">
        <h1>Add a New Song</h1>
        <p className="add-info">
          Fill out the details below to share your track with the REJA BEATS community.
        </p>

        <form className="song-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Song Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="artist"
            placeholder="Artist Name"
            value={formData.artist}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="album_cover"
            placeholder="Album Cover URL (image)"
            value={formData.album_cover}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="url"
            placeholder="MP3 File URL"
            value={formData.url}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Upload Song
          </button>
        </form>

        {success && (
          <p className="success-message" data-aos="fade-in">
            ✅ Song uploaded successfully!
          </p>
        )}
        {error && (
          <p className="error-message" data-aos="fade-in">
            ❌ {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default AddSong;
