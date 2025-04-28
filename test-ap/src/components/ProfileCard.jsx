import React from "react";
import '../index.css'

export default function ProfileCard(props){
    return(
        <div className="profile-card">
            <img src={props.suret} alt="" />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>   
    )
}