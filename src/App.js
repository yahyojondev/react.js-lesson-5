import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { Routers } from './static/Router';
import NotFound from './pages/notfound/NotFound';
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
     <Navbar/>
    <Routes>
      {
        Routers?.map(el =>(

          <Route key={el.id} path={el.path} element={el.elment}/>
        ))
      }
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
