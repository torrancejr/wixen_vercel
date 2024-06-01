import './App.css';
import Home from './components/Home';
import Services from './features/Services';
import ContactMe from './components/Contact';
import LatestProject from './features/LatestProject';
import Blog from './features/Blog/Blog';
import Counter from './features/Counter';

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
      </div>
  )
}
