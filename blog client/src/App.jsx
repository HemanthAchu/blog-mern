
import { BrowserRouter,Route,Routes}from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Singup from './pages/Singup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './Components/Header'
import Footers from './Components/Footer'
import CreatePost from './pages/CreatePost'

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Singup/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/createpost' element={<CreatePost/>} />
    </Routes>
    <Footers/>
    </BrowserRouter>
  )
}

export default App
