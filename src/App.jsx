import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Restaurant from './pages/Restaurant'
import View from './pages/View'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/restaurant' element={<Restaurant/>}/>
       <Route path='/:id/view' element={<View/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
