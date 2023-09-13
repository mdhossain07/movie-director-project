/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Director = ({director, handleDetails}) => {
    const {image, name, role, salary} = director;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card w-[300px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="celebrity" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Role: {role}</p>
                    <p>Salary: ${salary}</p>
                    <div className="card-actions justify-center">
                    <button onClick={() => handleDetails(director)} className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Director;