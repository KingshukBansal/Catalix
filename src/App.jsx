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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [sideBarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="flex flex-row bg-tertiary h-full">
        <div className={`fixed top-0 left-0 botton-0 h-[100vh] w-${sideBarOpen?"[23%]":"0"} p-2 max-w-[23%] `}> 
          
        {
          sideBarOpen?<Sidebar setSideBarOpen={setSidebarOpen} />:<button className='h-[96vh] ps-2 text-xl' onClick={()=>{setSidebarOpen(true)}}><FontAwesomeIcon icon={faChevronRight}/></button>
        }
        </div>
        <div className={`flex flex-col h-screen w-screen ms-${sideBarOpen?"[25%]":"8"} `}>
          <Header />
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
    </>
  )
}

export default App
