import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Search } from './pages/Search'
import { Home } from './pages/Home'

export function App() {

  return (
    // basename={process.env.PUBLIC_URL}
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/:userNameHome/stalking/:userNameResearched' element={<Home/>} />
      </Routes>
    </Router>
  )
}