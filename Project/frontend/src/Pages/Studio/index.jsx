import React, {useState, useEffect} from "react";
import $ from "jquery";
import Header from "../../Components/Header";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {useNavigate} from "react-router-dom";
import {RiDeleteBin6Line} from "react-icons/ri";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import {BsPlusCircleFill} from "react-icons/bs";
import {BsCheckCircleFill} from "react-icons/bs";
import Stack from '@mui/material/Stack';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Footer from "../../Components/Footer";
import api from '../../Services/api';
import './style.css';

export default function Studio(){

  const [progress, setProgress] = useState(0);
   
    let params = useNavigate()

    const handleCardCreate = async () => {
        let name = document.querySelector('#input_name').value
        let description = document.querySelector('#input_description').value
        let link = document.querySelector('#input_link').value
        api.post("/add", {
            "title": name,
            "description": description,
            "link_github": link
        }).then((response) => {
            console.log(response)
        })

        $("#loading").show()
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
              if (oldProgress === 100) {
                $("#loading").hide()
                $("#box-studio").hide()
                $("#alert").show()
                $("#button-back").show()
                

                return 0;
              }
              const diff = 30;
              return Math.min(oldProgress + diff, 100);
            });
          }, 800);
      
          return () => {
            clearInterval(timer);
          };
    }

    const handleCardCancel = async () =>{
        params('/home')
    }
    
    const handlePageReload = async () => {
        window.location.reload(true)
    }

    function MyFormHelperText() {
        const { focused } = useFormControl() || {};
      
        const helperText = React.useMemo(() => {
          if (focused) {
            return 'This field is being focused';
          }
      
          return 'Informações do repositório';
        }, [focused]);
      
        return <FormHelperText>{helperText}</FormHelperText>;
      }
      
    useEffect(() => {
        $("#loading").hide()
        $("#alert").hide()
        $("#button-back").hide()
        
    },[])

    return(
        <main id="studio">
            <Header/>
        <div className="container-studio"> 
            <div id="box-studio" className="content-studio"> 
                <div className="content-form">  
                <h2>Adicionar novo projeto</h2>
                <Box sx={{
                    '& > :not(style)': { m: 0, display: 'flex', width:'350px'  },
                    }}component="form" noValidate autoComplete="off">
                    <FormControl sx={{ width: '25ch' }}>
                    <OutlinedInput id="input_name" placeholder="Insira o nome do repositório" />
                        <MyFormHelperText />
                    </FormControl>
                    <FormControl sx={{ width: '25ch' }}>
                    <OutlinedInput id="input_description" placeholder="Insira a descrição do repositório" />
                        <MyFormHelperText />
                    </FormControl>
                    <FormControl sx={{ width: '25ch' }}>
                    <OutlinedInput id="input_link" placeholder="Insira o link do repositório" />
                        <MyFormHelperText />
                    </FormControl>
                </Box>
        
                    <Stack direction="row" spacing={2}>
                        <Button onClick={() => handleCardCancel()} variant="outlined"style={{color:"#1d2d44", border:"1px solid #1d2d44",  width:"50%", marginTop:"25px"}} startIcon={<RiDeleteBin6Line size={18} color={"#1d2d44"} />}>
                        Cancelar
                        </Button>
                        <Button onClick={() => handleCardCreate()} variant="contained" style={{backgroundColor:"#1d2d44", width:"50%", marginTop:"25px"}} endIcon={<BsCheckCircleFill size={18} />}>
                        Concluir
                        </Button>
                    </Stack>
                    <p></p>
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress id="loading" variant="determinate" value={progress} />
                    </Box>
                </div>
            </div>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert id="alert" variant="filled" severity="success">
                            Card criado com sucesso!
                        </Alert>
                    </Stack> 
                    <div id="button-back" className="button-back">
                        <BsFillArrowLeftCircleFill  onClick={() => handleCardCancel()} style={{cursor: "pointer"}} size={45} color={"#1d2d44"}/>
                        <BsPlusCircleFill onClick={() => handlePageReload()} style={{marginLeft: "35px", cursor: "pointer"}} size={45} color={"#1d2d44"} />
                    </div>
        </div>    
        <Footer/>
        </main>
    )
}