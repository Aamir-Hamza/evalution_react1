import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import { Navbar } from './component/Navbar'
import { Income } from './component/Income'
import { Expenses } from './component/Expenses'
import { Transaction } from './component/Transaction'
import { IncomeShow } from './component/IncomeShow'
import { Home } from './component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/income" element={<Income/>} />
      <Route path="/expense" element={<Expenses/>} />
      <Route path="/transaction" element={<Transaction/>} />

    </Routes>
   

    </>
  )
}

export default App
