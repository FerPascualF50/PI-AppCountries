import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Start from './Components/Start/index.jsx'
import CardDetail from './Components/CardDetail'
import CardActivityCreator from './Components/CardActivityCreator'



function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/home/details/:id" element={<CardDetail/>}/>
      <Route path="/home/activities" element={<CardActivityCreator/>} />
    </Routes>
  );
}

export default App;