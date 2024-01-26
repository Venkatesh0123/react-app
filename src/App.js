import './App.css';
// import Container from 'react-bootstrap/Container';
import AppBar from './components/AppBar';
import Banner from "./components/Banner";
import Menu from './components/Menu';
import PickOfTheWeek from './components/PickOfTheWeek';
import AppFooter from './components/AppFooter';
// import Button from 'react-bootstrap/Button'


function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu />
      <PickOfTheWeek />
      <AppFooter />

    </>
  );
}


export default App;
