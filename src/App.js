import { Route , Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import HelpPage from './components/HelpPage';
import GamePage from './components/GamePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//ensure app component is wrapped arround BrowserRouter in index.js
function App() {
  return (
    <div className="App">
      {/*Generally any elements outside of the Routes tag , will be present/rendered on every route */}
      <NavBar></NavBar>
      {/* configure routes for which element to display when a path is requested  */}
      <Routes> 
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/help' element={<HelpPage></HelpPage>}></Route>
          <Route path='/game' element={<GamePage ></GamePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
