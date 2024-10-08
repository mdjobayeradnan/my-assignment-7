
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CookInformations from './components/CookInformations/CookInformations'
import MenuItems from './components/MenuItems/MenuItems'

import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'

function App() {
 

  const [cookInformations , setCookInformations] = useState([])

  const handleCookInformation = menuItem => {
 const newCookInformation = [...cookInformations, menuItem]
 setCookInformations(newCookInformation)
  }

  return (
    <>
    <Navbar></Navbar>


    <Banner></Banner>
    <Title></Title>


    <div className='md:flex'>
      <MenuItems handleCookInformation ={handleCookInformation}></MenuItems>
      <CookInformations cookInformations ={cookInformations}></CookInformations>
    </div>
    
    </>
  )
}

export default App
