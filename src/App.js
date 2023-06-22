import { Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Submit } from './pages/Submit';
import { Error } from './pages/Error';
import './styles/App.css';
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
        <Route exact path='/submit' element={<Submit/>}/>
        <Route exact path='*' element={<Error />}/>
      </Routes>
    </>
  )
}


