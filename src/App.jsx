import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Activities from './pages/Activities'
import Analytics from './pages/Analytics'
import Transformation from './pages/Transformation'
import Library from './pages/Library'
import { useState } from 'react'
import Draw from './pages/Draw'

function App() {
  const [sideBarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="flex flex-row bg-tertiary h-full pb-12 relative">
        <div className={`sticky top-0 left-0 h-full w-1/5 `}> {/* Added z-10 to ensure the sidebar is above other components */}
          <Sidebar setSideBarOpen={setSidebarOpen} />
        </div>
        <div className="flex flex-col w-full ms-6">
          <Header />
          <div className="flex flex-col w-auto  ms-12">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home/draw' element={<Draw/>}/>
              <Route path='/home' element={<Home />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/transformation" element={<Transformation />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
