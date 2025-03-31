import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/Form'
import Nav from './Components/Nav'
import { BrowserRouter, Navigate, Route, Routes, useNavigate, } from 'react-router-dom'
import DisplayBox from './Components/DisplayBox'
import Home from './Components/Home'
import Table from './Components/Table'
import Signup from './Components/Signup'
import Login from './Login'
import Private from './Components/Private'



function App() {
  // const navi=useNavigate()


  const [new1, setnew1] = useState([])

  const box = (item) => {
    console.log(`${item} this is from box function`)
    const newarr = data.filter(ite => ite.Seat == item)
    console.log(newarr)
    setnew1(newarr)


  }

  const [data, setData] = useState([])
  const [col, setcol] = useState({ backgroundColor: "green" })

  const [msg, setmsg] = useState("")





  const getData = (all, navi) => {


    const sd = data.filter(item => item.Seat == all.d)

    console.log(`${data} this is seat`)

    console.log(all.a)
    if (all.a == 0) {
      setmsg("please enter your name")

    }
    else if (all.d <= 0) {
      setmsg("this seat is not available")
    }
    else if (all.d > 55) {
      setmsg("this seat is not available")
    }

    else if (sd.length > 0) {
      setmsg("this seat is already reserved")
      setcol({ backgroundColor: "red" })

    }

    else if (all.b == 0) {
      setmsg("please enter your starting date")

    }
    else if (all.c == 0) {  
      setmsg("please enter your ending date")

    }

    else {

      const dd1 = [...data, { Name: all.a, From: all.b, Valid: all.c, Seat: all.d }]

      setData(dd1)
      setmsg("Thankyou !!!!")
      localStorage.setItem("key", JSON.stringify(dd1))
      navi("/")


    } useNavigate


  }



  const del = (item) => {

    console.log(item.Name)

    const ff = data.filter(ite => ite.Name != item.Name)

    setData(ff)

    localStorage.setItem("key", JSON.stringify(ff))


  }


  useEffect(() => {

    const d = JSON.parse(localStorage.getItem("key"))
    if (d) {
      setData(d)

    }


  }, [])




  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route  element={<Private/>}><Route path='/studenttable' element={<Table del={del} data={data} />} />
          <Route path='/seats' element={<DisplayBox data={data} box={box} col={col} new1={new1} />} />
          <Route path='/reserve' element={<Form msg={msg} getData={getData} />} />
          <Route path='/:seat1' element={<Form />} /></Route>
          
          <Route path='/sign' element={<Signup />} />
          <Route path='/log' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
