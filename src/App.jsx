import { useState } from 'react'
import './App.css'
import { Home } from './layout/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-dmsans'>
      <Home></Home>
    </div>
    )
}

export default App
