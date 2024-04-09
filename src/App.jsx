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
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [sideBarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="flex flex-col tablet:flex-row justify-between w-screen tablet:w-full bg-tertiary h-full ">
        <div className={` w-full tablet:w-auto tablet:fixed tablet:top-0 tablet:left-0 tablet:botton-0 h-fit tablet:h-[100vh] ${sideBarOpen?"tablet:w-[23%] large-screen:w-[25%]":"tablet:w-0"} p-2 tablet:max-w-[23%] `}> 
          
        {
          sideBarOpen?<Sidebar setSideBarOpen={setSidebarOpen} />:<><button className='absolute hidden tablet:block tablet:h-[96vh] ps-4 tablet:ps-2 text-xl rotate-90 tablet:rotate-0 ' onClick={()=>{setSidebarOpen(true)}}><FontAwesomeIcon icon={faChevronRight}  /></button><button className='absolute top-6 left-5  tablet:hidden  ps-4  text-xl text-primary h-10 w-10 ' onClick={()=>{setSidebarOpen(true)}}><FontAwesomeIcon icon={faBars}  /></button></>
        }
        </div>
        <div className={`flex flex-col h-screen w-screen tablet:px-0 px-2 ${sideBarOpen ? "tablet:ms-[21%] large-screen:ms-[25%]" : "tablet:ms-8"}`}>
          <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home/draw' element={<Draw sideBarOpen={sideBarOpen}/>}/>
              <Route path='/home' element={<Home />} />
              <Route path="/activities" element={<Activities  />} />
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
