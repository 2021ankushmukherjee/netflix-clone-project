import Home from "./Components/Home/Home"
import './App.scss';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header/>
       <Routes>
              <Route path="/" element={<Home/>}/>
       </Routes>
    </Router>
  );
} 

export default App;
