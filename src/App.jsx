import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Hero from './sections/Hero'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import About from './sections/About'

const App = () => {
  return (
    <BrowserRouter>
    <div className="font-sans bg-white text-gray-900">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Hero/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        
         <Route path='/About' element={<About />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes>
      <Footer/>
    

   
      
    </div>
     </BrowserRouter>
  )
}

export default App
