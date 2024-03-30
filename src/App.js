import './App.css';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import Joinus from './components/Joinus/Joinus';
import Plalns from './components/Plansdata/Plalns';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plalns/>
          <Testimonials/>
          <Joinus/>
          <Footer/>
    </div>
  );
}

export default App;
