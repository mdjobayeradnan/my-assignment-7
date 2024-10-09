
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CookInformations from './components/CookInformations/CookInformations'
import MenuItems from './components/MenuItems/MenuItems'

import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import toast, { Toaster } from 'react-hot-toast';

function App() {
 

  const [cookInformations , setCookInformations] = useState([])
  

  const handleCookInformation = (recipe_id,menuItem) => {
 const newCookInformation = [...cookInformations, menuItem]
 setCookInformations(newCookInformation)



  // Check if the menuItem is already added using find method
  if (cookInformations.find(menuItem => menuItem.recipe_id === recipe_id)) {
    toast.error('This item has already been added!'); 
    console.log(menuItem)
    
  } else {
    // If not found, add it to cookInformations
    setCookInformations([...cookInformations, menuItem]);
  }

 
  }

  return (
    <>
    <Navbar></Navbar>


    <Banner></Banner>
    <Title></Title>


    <div className='md:flex'>
      <MenuItems handleCookInformation ={handleCookInformation}></MenuItems>
      <CookInformations cookInformations ={cookInformations}></CookInformations>
      <Toaster />  <Toaster />
    </div>
    
    </>
  )
}

export default App
