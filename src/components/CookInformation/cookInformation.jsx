import PropTypes from 'prop-types';

const CookInformation = ({cookInformation}) => {
    const {recipe_name,preparing_time,calories} = cookInformation
    return (
        <div className='w-[400px] mx-auto'>

           

               
                



 <span className='flex justify-between w-[380px] bg-slate-300  m-4'>
 <h1 className='w-[160px] text-sm
 '>{recipe_name} </h1>
 <h1 className='w-[170px] pr-10'>{preparing_time}</h1>
<h1 className='w-[100px]'>{calories}</h1>

 </span>
         
        </div>
      
 


    );
};
CookInformation.propTypes = {
    cookInformation:PropTypes.array
}

export default CookInformation;