import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Login } from './pages/Search'
import { Home } from './pages/Home'

export function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/stalking/:userNameResearched' element={<Home/>} />
      </Routes>
    </Router>
  )
}