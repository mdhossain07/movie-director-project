/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Director from "../Director/Director";

/* eslint-disable no-unused-vars */
const Directors = ({handleDetails}) => {

    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setDirectors(data));
    }, [])

    return (
        <div className="space-y-3 w-3/4">
            <h2 className="text-4xl font-medium">Avengers Movie Project </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                 {
                    directors.map(director => 
                    <Director 
                        key={director.id} 
                        director={director}
                        handleDetails={handleDetails}> 
                    </Director>)
                }
            </div>
           
        </div>
    );
};

export default Directors;