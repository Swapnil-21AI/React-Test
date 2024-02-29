import Home from './components/home'
import About from './components/about'
import Nav from './components/nav'
import './App.css';

import{Routes,Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Nav>
    </Nav>
      <Routes>
        {/* <Route path='/' element={<Nav/>}></Route> */}
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
