import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";
import {IoAddOutline} from "react-icons/io5";
import './style.css';
import { useEffect } from "react";
import api from "../../Services/api";

export default function Home(){
    const [data, setData] = useState([])

    let params = useNavigate()

    useEffect(()=>{
        api.get('/list').then((response) => {
        console.log(response);
        setData(response.data)
    })
        setData([])
    },[])
    

    const handlePageStudio = async () =>{  
            params('/studio')    
         }

    return(
        <main id="home">
            <Header/>
                <div className="home-container">
                    <div className="home-content">
                        {data.map((item) => {
                            return(
                                <Card item={item}/>
                            )
                        })}
                        <article onClick={handlePageStudio} className="new-card">
                            <IoAddOutline size={50} />
                        </article>
                    </div>
                </div>
            <Footer/>
        </main>
    )
}