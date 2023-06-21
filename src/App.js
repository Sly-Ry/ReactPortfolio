import { Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Error } from './pages/Error';
import './App.css';
import { NavLayout } from './components/NavLayout';

export default function App() {
  return (
    <>
      <NavLayout />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/projects/*' element={<Projects />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='*' element={<Error />}/>
      </Routes>
    </>
  )
}


