export default function Home() {
  return (
    <div>
      {/* Landing Title Section */}
      <header className="text-center py-24 bg-gradient-to-r from-black via-blue-900 to-black text-white">
        <h1 className="text-6xl font-bold glow-effect">Welcome to General Lithium HQ</h1>
        <p className="mt-4 text-xl glow-effect">
          A space for AI, robotics, and hardware innovation in downtown San Francisco
        </p>
        <div className="mt-8 flex justify-center space-x-8">
          <a href="https://general-lithium.com/space" target="_blank" className="coin-button">
            Join Us
          </a>
          <a href="https://lu.ma/general-lithium" target="_blank" className="coin-button">
            Event Page
          </a>
          <a href="#contact-section" className="coin-button">
            Contact
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl glow-effect">About Us</h2>
          <p className="mt-4 text-lg max-w-prose mx-auto glow-effect">
            General Lithium HQ is a 501c3 nonprofit makerspace that empowers teams to build cutting-edge technologies, including edge AI, hardware solutions, and battery management systems. We host classes, run workshops, and throw events for the San Francisco tech community.
          </p>

          {/* Image Gallery */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <img src="/images/GL-ai-takeover-3299.jpg" alt="Event 1" className="rounded-lg object-cover w-full h-64" />
            <img src="/images/GLHQ-laser-cutter.jpg" alt="Event 2" className="rounded-lg object-cover w-full h-64" />
            <img src="/images/GL-ai-takeover-3355.jpg" alt="Equipment 1" className="rounded-lg object-cover w-full h-64" />
            <img src="/images/GLHQ-SFNode-meetup.jpg" alt="Equipment 2" className="rounded-lg object-cover w-full h-64" />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-black via-blue-900 to-black p-4 rounded-lg">
              <h3 className="text-xl glow-effect">Edge AI</h3>
              <p className="mt-2 glow-effect">Pioneering AI projects at the edge, where speed and efficiency matter.</p>
            </div>
            <div className="bg-gradient-to-r from-black via-blue-900 to-black p-4 rounded-lg">
              <h3 className="text-xl glow-effect">Robotics</h3>
              <p className="mt-2 glow-effect">Enabling next-generation robotics for forward deployed applications.</p>
            </div>
            <div className="bg-gradient-to-r from-black via-blue-900 to-black p-4 rounded-lg">
              <h3 className="text-xl glow-effect">Battery Systems</h3>
              <p className="mt-2 glow-effect">Designing high-efficiency battery systems for advanced applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wishlist Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-black via-blue-900 to-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl glow-effect">Wishlist</h2>
          <ul className="mt-4 space-y-4">
            <li className="text-lg glow-effect">
              <a
                href="https://a.co/d/il9gFz7"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary-highlight"
              >
                Desktop Open Source 6 Axis Robotic Arm
              </a>
            </li>
            <li className="text-lg glow-effect">
              <a
                href="https://us.store.bambulab.com/products/x1-carbon"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary-highlight"
              >
                Bambu Lab X1-Carbon 3D Printer
              </a>
            </li>
            <li className="text-lg glow-effect">
              <a
                href="https://www.amazon.com/NVIDIA-Jetson-Orin-64GB-Developer/dp/B0BYGB3WV4"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary-highlight"
              >
                NVIDIA Jetson AGX Orin 64GB Developer Kit
              </a>
            </li>
            <li className="text-lg glow-effect">
              <a
                href="https://www.amazon.com/NVIDIA-Jetson-Nano-Developer-Kit/dp/B07PZHBDKT"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary-highlight"
              >
                NVIDIA Jetson Nano Developer Kit
              </a>
            </li>
            <li className="text-lg glow-effect">
              <a
                href="https://www.amazon.com/Raspberry-Model-2019-Quad-Bluetooth/dp/B07TC2BK1X"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary-highlight"
              >
                Raspberry Pi 4 Model B 2019 Quad Core 64 Bit WiFi Bluetooth (4GB)
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl glow-effect">Contact Us</h2>
          <form
            action="https://formspree.io/f/mjkbzppz"
            method="POST"
            className="mt-8 max-w-lg mx-auto text-left"
          >
            <label htmlFor="name" className="block mb-2 glow-effect">Name:</label>
            <input type="text" id="name" name="name" className="input-field" required />

            <label htmlFor="email" className="block mb-2 glow-effect">Email:</label>
            <input type="email" id="email" name="email" className="input-field" required />

            <label htmlFor="message" className="block mb-2 glow-effect">Message:</label>
            <textarea id="message" name="message" rows={4} className="input-field" required></textarea>

            <button type="submit" className="mt-4 coin-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-black text-white">
        <p>© 2024 General Lithium HQ</p>
      </footer>
    </div>
  );
}
