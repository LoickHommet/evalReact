import logo from './logo.svg';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import {Routes, Route} from "react-router-dom";
import { Calendrier } from './componant/Calendrier';


function App() {
  return (
    <div className="App">
   <Routes>
        <Route path="/" element={<Calendrier />} />
    </Routes>
    </div>
  );
}

export default App;
