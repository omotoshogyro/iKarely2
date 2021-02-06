import './App.css';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import NavBar from './components/Navbar/NavBar';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
