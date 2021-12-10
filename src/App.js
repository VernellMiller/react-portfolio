import './App.css';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import MainImage from './components/MainImage';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
          <MainImage/>

          <Button> New Button </Button>
    

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
          */}
      </div>
    </>
  );
}

export default App;
