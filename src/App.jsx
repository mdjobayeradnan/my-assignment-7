
import './App.css'
import Banner from './components/Banner/Banner'
import CookInformations from './components/CookInformations/CookInformations'
import MenuItems from './components/MenuItems/MenuItems'

import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'

function App() {

  return (
    <>
    <Navbar></Navbar>


    <Banner></Banner>
    <Title></Title>

    <div className='md:flex'>
      <MenuItems></MenuItems>
      <CookInformations></CookInformations>
    </div>
    
    </>
  )
}

export default App
