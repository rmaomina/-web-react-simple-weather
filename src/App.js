import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/page1">page1</Link></li>
          <li><Link to="/page2">page2</Link></li>
          <li><Link to="/page3">page3</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
