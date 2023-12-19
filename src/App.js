
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home.js';
import Newhome from './Pages/Newhome.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/" exact element={<Newhome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
