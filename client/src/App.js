import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage/index.jsx'
import Details from './Components/Details'
import CreateActivity from './Components/CreateActivity'



function App() {
  return ( 
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/home/details/:id" element={<Details/>}/>
      <Route path="/home/activities" element={<CreateActivity/>} />
    </Routes>
  );
}
export default App;