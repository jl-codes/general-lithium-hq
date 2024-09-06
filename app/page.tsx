import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>General Lithium HQ</title>
        <meta name="description" content="General Lithium HQ - Makerspace for AI, robotics, and hardware innovation." />
      </Head>

      {/* Landing Title Section */}
      <header style={{ padding: '50px 0', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
        <h1>Welcome to General Lithium HQ</h1>
        <p>A space for AI, robotics, and hardware innovation</p>
      </header>

      {/* About Section */}
      <section style={{ padding: '50px 20px' }}>
        <h2>About Us</h2>
        <p>
          General Lithium HQ is a nonprofit makerspace that empowers teams to build cutting-edge technologies, including edge AI, hardware solutions, and battery management systems.
        </p>
      </section>

      {/* Wishlist Section */}
      <section style={{ padding: '50px 20px', backgroundColor: '#f7f7f7' }}>
        <h2>Wishlist</h2>
        <ul>
          <li>
            <a href="https://a.co/d/il9gFz7" target="_blank" rel="noopener noreferrer">
              Robot Arm
            </a>
          </li>
          {/* Add more wishlist items here */}
        </ul>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '50px 20px' }}>
        <h2>Contact Us</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
        <p>© 2024 General Lithium HQ</p>
      </footer>
    </div>
  );
}
