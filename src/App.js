
import './App.css';
import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Header from './Header';
import Navbar from './Navbar';
import Photo from './componenet/Photo';
import Candle from './componenet/Candle';
import Check from './componenet/Check';
import Reveal from './componenet/Reveal';
import Soap from './componenet/Soap';
import Special from './componenet/Special';
import Tart from './componenet/Tart';
import Rep from './componenet/Rep';

function App() {
  return (
    <div className="App">

<BrowserRouter>
     <Header/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Photo/>}/>
      <Route path='candle' element={<Candle/>}/>
      <Route path='check' element={<Check/>}/>
      <Route path='rep' element={<Rep/>}/>
      <Route path='reveal' element={<Reveal/>}/>
      <Route path='soap' element={<Soap/>}/>
      <Route path='special' element={<Special/>}/>
      <Route path='Tart' element={<Tart/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
