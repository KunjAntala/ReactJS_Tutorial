import { useState } from 'react'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <p className='flex flex-wrap justify-center pt-72 text-black text-2xl'>Tap any Button to change the Background color</p>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-none px-4 rounded-2xl text-white' onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
          <button className='outline-none px-4 rounded-2xl text-white' onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
          <button className='outline-none px-4 rounded-2xl text-white' onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>Blue</button>
          <button className='outline-none px-4 rounded-2xl text-black' onClick={() => setColor("pink")} style={{ backgroundColor: "pink" }}>Pink</button>
          <button className='outline-none px-4 rounded-2xl text-white' onClick={() => setColor("black")} style={{ backgroundColor: "black" }}>Black</button>
          <button className='outline-none px-4 rounded-2xl text-black' onClick={() => setColor("orange")} style={{ backgroundColor: "orange" }}>Orange</button>
          <button className='outline-none px-4 rounded-2xl text-black border border-black' onClick={() => setColor("white")} style={{ backgroundColor: "white" }}>White</button>
          <button className='outline-none px-4 rounded-2xl text-black' onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button className='outline-none px-4 rounded-2xl text-white' onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>Purple</button>
          <button className='outline-none px-4 rounded-2xl text-white' onClick={() => setColor("olive")} style={{ backgroundColor: "olive" }}>Olive</button>
        </div>
      </div>
    </div>
  )
}

export default App
