import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const App: React.FC = () => {
  return (
    <Router>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
    </Router>
  );

    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Welcome to Basstream</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:text-gray-300">Features</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-5xl font-bold mb-4">Welcome to Our Service</h2>
          <p className="text-xl mb-8">Steam your Favourite Songs!</p>
          <a
            href="#get-started"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Feature One</h4>
              <p className="text-gray-600"> Basstream typically offers an extensive content library with personalized user accounts, allowing for customized recommendations and watch history tracking. <br/> It features advanced search and discovery tools, along with standard playback controls like play, pause, and rewind.<br/> Users can download content for offline viewing and access the platform across multiple devices. The platform also provides content recommendations, social sharing options, parental controls, and an intuitive user interface. Behind the scenes, a content management system (CMS) facilitates updates, while analytics offer insights into user engagement. Subscription management options, along with security features to protect content and user data, round out the platform's offerings..</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Feature Two</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Feature Three</h4>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Basstream. All rights reserved.</p>
        </div>
      </footer>
    </div>
};

export default App;

