import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h2>React js </h2>
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;
