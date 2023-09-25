
import './App.css';
import Banner from './Banner';
import Row from './Row';
import Nav from './nav';
import requests from "./requests";


function App() {
  return (
    <div className="App">
      <Nav/>
    <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top rated" fetchUrl={requests.fetchTopRatedMovies}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomancesMovies}/>
     <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;
