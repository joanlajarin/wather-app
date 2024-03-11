import './App.css'
import searchImg from './images/Search.svg'

function App() {

  return (
    <>
    <div className='flex flex-col bg-[#20293A] rounded-md'>
      <div className='flex gap-[12px] p-[8px]'>
        <img src={searchImg}></img>
        <input className='bg-[#20293A] text-[#97A3B6] text-[14px]' placeholder='Search city...'></input>
      </div>
    </div>
    <h1 className="text-3xl font-bold underline text-center">Weather App</h1> 
    </>
  )
}

export default App
