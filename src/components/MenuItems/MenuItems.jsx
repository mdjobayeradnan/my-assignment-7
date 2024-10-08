import { useEffect, useState } from "react";
import PropTypes from 'prop-types';



import MenuItem from "../MenuItem/MenuItem";


const MenuItems = ({handleCookInformation}) => {
    const [menuItems, SetMenuItems] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => SetMenuItems(data))
    })

    
    return (
        <div className="md:w-2/3 mt-6">
        
       
  

<div className="grid grid-cols-2 h-[800px]">
{
    menuItems.map(menuItem => <MenuItem key={menuItem.id} menuItem={menuItem} handleCookInformation ={handleCookInformation}></MenuItem>)
}
</div>
           
        </div>
    );
};


MenuItems.propTypes = {
    handleCookInformation:PropTypes.func
}

export default MenuItems;