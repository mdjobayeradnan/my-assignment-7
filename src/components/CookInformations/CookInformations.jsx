
import CookInformation from '../CookInformation/cookInformation';



const CookInformations = ({cookInformations}) => {
    return (
        <div className="md:w-1/3  mt-6 border-2 border-slate-300 rounded-lg">
            <h1 className='mt-10 font-bold'>Want to cook:{cookInformations.length}</h1>
            <hr/>


            <ul className='flex justify-between w-[380px]  mx-auto px-5 mt-20'>
                    <li>Name</li>
                    <li>Time</li>
                    <li>Calories</li>
                </ul>
            {
                cookInformations.map(cookInformation => <CookInformation key={cookInformation.id} cookInformation={cookInformation}></CookInformation>)
            }
        </div>
    );
};


 
export default CookInformations;