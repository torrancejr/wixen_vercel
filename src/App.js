import './App.css';
import Home from './components/Home';
import Services from './features/Services';
import ContactMe from './components/Contact';
import LatestProject from './features/LatestProject';
import Blog from './features/Blog/Blog';
import Counter from './features/Counter';
import Footer from './components/Footer';
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
      <div>
          <div className="home">
              <Home />
          </div>
          <div className="services">
              <Services />
          </div>
          <div className="contact">
              <ContactMe />
          </div>
          <div className="latest">
              <LatestProject />
          </div>
          <div className="counter">
              <Counter />
          </div>
          <div className="blog">
              <Blog />
          </div>
          <div className="chatbot">
              <Chatbot />
          </div>
          <div className="footer">
              <Footer />
          </div>
      </div>
  )
}
