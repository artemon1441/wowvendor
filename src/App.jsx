import Header from './components/Header';
import Container from './components/Container'
import './App.css';
import Footer from './components/Footer';
import FooterMenu from './components/FooterMenu';

function App() {
  return (
    <div className="App">
        <Header/>
        <Container/>
        <Footer/>
        <FooterMenu/>
    </div>
  );
}

export default App;
