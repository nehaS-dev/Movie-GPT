import { useState } from 'react'
import "tailwindcss";
import Body from "./components/Body"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Body/>
      </div>
    </>
  )
}

export default App

