import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Search } from './pages/Search'
import { Home } from './pages/Home'

export function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/stalking/:userNameResearched' element={<Home/>} />
      </Routes>
    </Router>
  )
}