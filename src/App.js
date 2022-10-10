import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import {Routes,Route} from 'react-router-dom'
import Fullview from './components/Fullview';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element=<Movie/> />
        <Route path="/overview/:id" element=<Fullview/> />
      </Routes>
    </>
  );
}

export default App;
