import './App.css'
import Quiz from './components/Quiz'
function App() {
  
  return (
    <>
      <nav className='bg-cyan-700 w-full p-2'>
        <div className='flex justify-between items-center'>
          <a href="" style={{textDecoration:"none"}} className='text-white text-4xl p-2'>Quiz Zone</a>
          <a href='' style={{fontFamily:'"Prata", serif'}} className='text-white text-xl me-5'>About us</a>
        </div>
      </nav>
      <div className='overflow-y-hidden '>
        <Quiz/>
      </div>
    </>
  )
}

export default App
