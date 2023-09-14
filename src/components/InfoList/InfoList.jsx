/* eslint-disable react/prop-types */
import './InfoList.css'
const InfoList = ({detail, handleRemove}) => {
    const{id} = detail;
    return (
        <>  
            {/* <h2 className='text-xl font-medium'>Budget Spent: </h2> */}
            <div className='flex justify-around items-center infolist'>
                <img src={detail.image} alt="" />
                <h2 className='text-md font-medium'>Name: {detail.name}</h2>
                <button onClick={() => handleRemove(detail, id)}>Remove</button>
            </div>
        </>
    );
};

export default InfoList;