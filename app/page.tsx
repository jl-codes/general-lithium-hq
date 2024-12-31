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
          <a href="https://general-lithium.com/glhq" target="_blank" className="coin-button">
            Join Us
          </a>
          <a href="https://lu.ma/general-lithium" target="_blank" className="coin-button">
            Events
          </a>
          <a href="https://buy.stripe.com/cN2eYx0qh6rq2B2eV3" target="_blank" className="coin-button">
            Donate
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl glow-effect">About Us</h2>
          <p className="mt-4 text-lg max-w-prose mx-auto glow-effect">
            At General Lithium HQ (GLHQ), we’re not just building technologies—we’re building a brighter future. As a 501(c)(3) nonprofit (EIN 99-4582316), our mission is to empower individuals and teams to create cutting-edge innovations like edge AI, hardware solutions, and advanced battery management systems.
            <br /><br />
            But we don’t stop there. Through hands-on classes, engaging workshops, and community events, we ignite curiosity and provide access to tools and knowledge that make technology approachable for everyone.
            <br /><br />
            Our flagship programs, like the “Build-A-Robot Workshop,” are designed to inspire and educate the next generation of creators, with a special focus on urban youth and young hobbyists. By fostering an inclusive and supportive environment, we ensure that innovation wins.
            <br /><br />
            Your support fuels our mission. Every donation helps us expand our reach, improve our resources, and empower more members of our community to dream big and achieve more.
            <br /><br />
            Join us in shaping the future of technology and education. Visit us at 1338 Mission St, San Francisco, CA, or call (510) 831-2227 to learn how you can make a difference.
            <br /><br />
            💡 Donate today and help us transform lives through innovation!
          </p>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-900 via-black to-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl glow-effect">Join GLHQ Today</h2>
          <p className="mt-4 text-lg glow-effect">
            Choose from two membership options to access cutting-edge tools and a vibrant community.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black p-4 rounded-lg">
              <h3 className="text-2xl font-bold glow-effect">GLHQ Associates</h3>
              <ul className="mt-4 space-y-2 text-left text-lg glow-effect">
                <li>Access to the space and tools</li>
                <li>A ticket to all events</li>
                <li>Floating workspace at a desk</li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://buy.stripe.com/00geYxflbg20ejKfYZ"
                  target="_blank"
                  className="coin-button"
                >
                  Become an Associate
                </a>
              </div>
            </div>
            <div className="bg-black p-4 rounded-lg">
              <h3 className="text-2xl font-bold glow-effect">GLHQ Members</h3>
              <ul className="mt-4 space-y-2 text-left text-lg glow-effect">
                <li>Associate privileges</li>
                <li>Dedicated workspace</li>
                <li>Event hosting privileges</li>
              </ul>
              <div className="mt-4">
                <a
                  href="https://buy.stripe.com/00g03D6OFaHG3F6eUU"
                  target="_blank"
                  className="coin-button"
                >
                  Become a Member
                </a>
              </div>
            </div>
            <p className="mt-4 text-xl glow-effect">
                Member Access: Mon-Fri 9am-9pm<br />
                Public Access: Thurs-Fri 9am-6pm
              </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <img src="/images/GL-ai-takeover-3299.jpg" alt="Event 1" className="rounded-lg object-cover w-full h-64" />
            <img src="/images/GLHQ-laser-cutter.jpg" alt="Event 2" className="rounded-lg object-cover w-full h-64" />
            <img src="/images/GL-ai-takeover-3355.jpg" alt="Equipment 1" className="rounded-lg object-cover w-full h-64" />
            <img src="/images/GLHQ-SFNode-meetup.jpg" alt="Equipment 2" className="rounded-lg object-cover w-full h-64" />
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
