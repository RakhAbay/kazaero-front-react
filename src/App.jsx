import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FilterComponent from './components/filterComponent/FilterComponent'
import Navbar from './components/navbar/Navbar'
import CataloguePage from './pages/cataloguePage/CataloguePage'
import LoginPage from './pages/loginPage/LoginPage'
import MainPage from './pages/mainPage/MainPage'
import RegistrationPage from './pages/registrationPage/RegistrationPage'
import './index.css'


const App = () => {
  const [query, setQuery] = useState('')

  return (
    <div className='app-wrapper'>
      <Navbar query={query} setQuery={setQuery} />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/main' element={<MainPage query={query} setQuery={setQuery} />} />
        <Route path='/catalogue' element={<CataloguePage />} />
        {/* <Route path='/item/:id' element={< />} /> */}
      </Routes>
    </div>
  )
}

export default App
