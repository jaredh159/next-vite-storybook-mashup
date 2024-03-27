import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Foo from './Foo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <h1>Home</h1>
              <ul>
                <li>
                  <Link to="/foo">Foo</Link>
                </li>
                <li>
                  <Link to="/bar">Bar</Link>
                </li>
              </ul>
            </div>
          }
        />
        <Route path="/foo" element={<Foo />} />
        <Route path="/bar" element={<h1>Bar</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
