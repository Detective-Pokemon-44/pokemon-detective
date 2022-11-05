import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  
  axios
    // .get(`https://pokeapi.co/api/v2/pokemon`, {
      .get(`https://data.police.uk/api/crimes-street/all-crime`, {
      params: {
        // limit: 151,
        // London
        lat: "51.5072",
        lng: "-0.1276",
        // // Manchester
        // lat: "53.4839",
        // lng: "-2.2446",
        // Liverpool
        // lat: "53.4084",
        // lng: "-2.9916",
      },
    })
    .then(function (res) {
      const filtered = res.data
      console.log(filtered)
    })
  //  async function getInfo() {
  //    const object = await fetch(URL)
  //    console.log(object)
  //    const information = await object.json()
  //    console.log(information)
  //  }
  //  getInfo()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


