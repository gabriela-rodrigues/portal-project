import React from "react";
import Image from "../../Images/background-card.jpg";
import "./style.css";

export default function Card({item}) {
    function handleGitLink (){
        window.location.href = item.link_github
    }

    return(
        <main onClick={handleGitLink} className="card">
            <img src={Image} alt="Background Card" />
            <section className="card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </section>
        </main>
    )
}
