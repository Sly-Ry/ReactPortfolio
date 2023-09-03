import './App.css';

import { Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Projects } from './pages/Project/Projects'
import { Contact } from './pages/Contact/Contact'
import { Submit } from './pages/Submit';
import { Error } from './pages/Error';
import { Header } from './layouts/Header/Header';
import { BgImageComponent } from './components/BackgroundComponent';
import DropLayout from './layouts/Header/DropLayout/DropLayout';

export default function App() {
  return (
    <>
      <BgImageComponent />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/projects/*' element={<Projects />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/submit' element={<Submit/>}/>
        <Route exact path='*' element={<Error />}/>
      </Routes>
      <DropLayout />
    </>
  )
}


