import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState();

  // useRef hook
  const passwordRef = useRef(null)

  // useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*"
    }

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length )
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length,numAllowed,charAllowed,passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-2xl text-center text-white'>Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden my-4">
          <input 
            type="text"
            value={password}
            className='outline-none w-full px-3 py-1'
            placeholder='Password'
            readOnly
            ref={passwordRef}
           />
           <button onClick={copyPassword}
            className='outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0 hover:bg-blue-900'>
              Copy
           </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={12}
              value={length}
              className='cursor-pointer'
              onChange={(events) => {setLength(events.target.value)}}
            />
            <label >Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
    </div>
  )
}

export default App
 