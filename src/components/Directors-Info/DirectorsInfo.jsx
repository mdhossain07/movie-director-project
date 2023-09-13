/* eslint-disable react/prop-types */
import InfoList from "../InfoList/InfoList";
import './DirectorsInfo.css';

const DirectorsInfo = ({details, handleRemove}) => {
    return (
        <div className="w-1/5 space-y-3">
            <h2 className="text-3xl font-medium">Details</h2>
            <h2 className="text-md font-medium">Total List: {details.length}</h2>
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