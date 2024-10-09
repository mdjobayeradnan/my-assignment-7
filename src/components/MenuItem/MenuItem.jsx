
import PropTypes from 'prop-types';
import { IoMdTime } from "react-icons/io";
import { BsFire } from "react-icons/bs";



const MenuItem = ({menuItem,handleCookInformation}) => {
    const {recipe_id,recipe_image,recipe_name,short_description,ingredients,preparing_time,calories
    } = menuItem
  

    

    return (
    

<div className='border-2 border-neutral-300	  w-[390px] mx-auto space-y-5 p-2 h-[500px]'>
          <img className='w-[350px] h-[200px] rounded-lg mx-auto' src={recipe_image} alt="" />
          <div className='text-start'>
          <h1>{recipe_name}</h1> 
         <p>{ short_description}</p>
         <hr />
         <h1>ingredients:{ingredients.length}</h1>
         {
            ingredients.map(ingredient => <span key={ingredient.id}><li href="">{ingredient}</li></span>)
         }
        
<div className='flex justify-between w-[350px] mt-2'>
<span className='flex items-center gap-2'>
         <IoMdTime/>


<h1>{preparing_time}</h1>

         </span>
         <span className='flex gap-2 items-center'>
         <BsFire/>

         <h1>{calories}</h1>
         </span>
</div>
<button onClick={() => handleCookInformation(recipe_id, menuItem)}  className="btn btn-success rounded-full p-3 w-[250px] mt-2">Want to Cook</button>

       
          </div>
        
        </div>

        
    );
};

MenuItem.propTypes = {
    menuItem: PropTypes.object.isRequired,
    handleCookInformation:PropTypes.func
}

export default MenuItem;