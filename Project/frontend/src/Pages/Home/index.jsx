import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "../../Components/Header";
import Card from "../../Components/Card";
import Footer from "../../Components/Footer";
import {IoAddOutline} from "react-icons/io5";
import './style.css';
import { useEffect } from "react";

export default function Home(){
    const [data, setData] = useState([])

    let params = useNavigate()

    useEffect(()=>{
        setData([
            {
                'title' : 'Projeto1',
                'description' : 'Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quo laudantium iusto...',
                'link_github' : 'https://github.com/gabriela-rodrigues',
            },
            {
                'title' : 'Projeto2',
                'description' : 'Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quo laudantium iusto...',
                'link_github' : 'https://github.com/gabriela-rodrigues',
            },
            {
                'title' : 'Projeto3',
                'description' : 'Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quo laudantium iusto...',
                'link_github' : 'https://github.com/gabriela-rodrigues',
            },
            {
                'title' : 'Projeto4',
                'description' : 'Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quo laudantium iusto...',
                'link_github' : 'https://github.com/gabriela-rodrigues',
            },   
            {
                'title' : 'Projeto5',
                'description' : 'Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quo laudantium iusto...',
                'link_github' : 'https://github.com/gabriela-rodrigues',
            },
            {
                'title' : 'Projeto6',
                'description' : 'Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quo laudantium iusto...',
                'link_github' : 'https://github.com/gabriela-rodrigues',
            },
        ])
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