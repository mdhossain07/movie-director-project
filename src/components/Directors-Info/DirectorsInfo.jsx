/* eslint-disable react/prop-types */
import InfoList from "../InfoList/InfoList";
import './DirectorsInfo.css';

const DirectorsInfo = ({details, handleRemove, budget}) => {
    // eslint-disable-next-line no-unused-vars
    const remaining = 20000 - budget;
    return (
        <div className="w-1/5 space-y-3">
            <h2 className="text-3xl font-medium">Details</h2>
            <h2 className="text-md font-medium">Total List: {details.length}</h2>
            <h2 className="text-md font-medium">Total Budget: $20000</h2>
            <h2 className="text-xl font-medium">Budget Spent: ${budget} </h2>
            <h2 className="text-md font-medium">Budget Remaining: ${remaining} </h2>
            
           {
            details.map((detail,index) => 
                <InfoList 
                    key = {index} 
                    detail = {detail}
                    handleRemove={handleRemove}>
                </InfoList>)
           } 
        </div>
    );
};

export default DirectorsInfo;