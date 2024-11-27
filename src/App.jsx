import { Outlet } from 'react-router-dom'
import Banner from './banner/Banner'

function App() {
  return (
    <div className='relative bg-[#0F051D] min-h-screen overflow-hidden'>
      {/* Blurred mesh gradient background */}
      <div className='fixed   bg-[#210A79] lg:w-[500px] w-[300px] lg:h-[450px] h-[200px] rounded-[200px] opacity-60 blur-[100px]'></div>
      <div className='fixed top-30 right-10 mt-[30vh] bg-[#3C0846] lg:w-[500px] w-[300px] lg:h-[450px] h-[200px] rounded-[200px] opacity-60 blur-[100px]'></div>

      {/* Main content */}
      <div className="relative z-10">  
        <Banner />
      
      </div>
    </div>
  )
}

export default App
