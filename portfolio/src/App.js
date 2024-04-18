import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CodingProfile from './components/CodingProfile/CodingProfile';
import Section from './components/Sections/Section';

function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <CodingProfile/>
      <Section/>
    </div>
  );
}

export default App;
