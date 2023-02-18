import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Search } from './pages/Search'
import { Home } from './pages/Home'

export function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:userNameHome/stalking/:userNameResearched' element={<Home/>} />
      </Routes>
    </Router>
  )
}