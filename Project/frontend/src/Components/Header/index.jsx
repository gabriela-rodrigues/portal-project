import React from "react";
import {BsGithub} from "react-icons/bs";
import './style.css';

export default function Header(){
    return(
        <header>
            <BsGithub className="icon-github" size={40} color={"#fff"}/>
        </header>
        
    )
}