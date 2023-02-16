import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Search } from './pages/Search'
import { Home } from './pages/Home'

export function App() {

  return (
    <Router>
      <Routes>
        <Route path='/GitHub-Stalker/' element={<Search/>}/>
        <Route path='/:userNameHome/stalking/:userNameResearched' element={<Home/>} />
      </Routes>
    </Router>
  )
}