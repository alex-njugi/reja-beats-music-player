import React from 'react';

function About() {
  return (
    <section className="about-section">
      <h1 className="about-heading" data-aos="fade-up">About REJA BEATS</h1>
      <p className="about-intro" data-aos="fade-up" data-aos-delay="150">
        We are a platform dedicated to helping you create, explore, and enjoy powerful musical experiences. At REJA BEATS, music is more than sound, it's a message.
      </p>

      <div className="about-content">
        <div className="about-image" data-aos="fade-right">
          <img src="/tapes.jpeg" alt="music mission" />
        </div>
        <div className="about-text" data-aos="fade-left">
          <h2>Our Mission</h2>
          <p>
            To give everyone the power to share their sound. Whether you're an artist, listener, or dreamer, REJA BEATS provides tools to explore and connect through music. Built with love, faith, and innovation.
          </p>
          <ul>
            <li>Discover inspiring music</li>
            <li>Upload and share your tracks</li>
            <li>Join a growing music community</li>
          </ul>
        </div>
      </div>

      <div className="how-it-works" data-aos="fade-up" data-aos-delay="200">
        <h2>How It Works</h2>
        <p>
          Want to share your own music? Click on <strong>"Add Song"</strong> from the navigation bar or the <strong>"Add Music"</strong> button on the homepage. You'll be taken to a form where you can fill in the song's title, artist, album cover (image URL), and drop a preview link.
        </p>
        <p>
          <strong>Note:</strong> You need to be <strong>logged in</strong> to add music, this helps us keep REJA BEATS clean and secure. But no worries,   <strong>listening</strong> is open to everyone! Head over to the <strong>Music</strong> page to explore what others have shared.
        </p>
      </div>
    </section>
  );
}

export default About;
