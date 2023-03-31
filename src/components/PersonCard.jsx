import React, { useState } from "react";

const PersonCard =(props) =>{
    const [ inBirth, setBirth]=useState(props.intialAge);
    return (
        <div>
            <h2>{props.LastName}, {props.FirstName}</h2>
            <p>Age: {inBirth}</p>
            <p>Hair Color: {props.hairColor} </p>
            <button onClick={(event) => setBirth(inBirth + 1)}>Birthday Button for {props.FirstName} {props.LastName} </button>
        </div>
    )
}

export default PersonCard;