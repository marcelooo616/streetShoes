import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Feedback.css';
import { ProductionQuantityLimitsSharp } from "@mui/icons-material";
export function Feedback(){
    const [ ref , setRef ] = useState("");
    const [ nome , setNome ] = useState("");
    const [ opiniao , setOpiniao ] = useState("");
    const params = useParams();

    

    function handleSubmitFeedback(e){
        e.preventDefault();
       
        const avaliacao = {  
            ref,
            nome,
            opiniao
           
        }
        const promise = axios.post(`${process.env.REACT_APP_BACKEND_URI}/feedback`, avaliacao);
        promise.then(res => alert("Obrigado pelo Feedback!!"));
        promise.catch(e => {
            alert("deu ruim!!!!!!!!");
            console.log(e);
        })
        console.log(avaliacao);
    }
    
    return(
        <div className="container-feedback">
            <div className='feedback'>
                
                <form onSubmit={handleSubmitFeedback}>

                <div className='text-avl'>
                    <span> Deixe uma avaliacão</span>
                </div>
                    <label htmlFor="id">Codigo de ref. prod.id</label>
                    <input type="text" name="id" value={ref} onChange={(e) => setRef(e.target.value)}></input>

                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>

                    <label htmlFor="avaliacao">Avaliação</label>
                    <input type="text" className='avaliacoes-input' name="opiniao" value={opiniao} onChange={(e) => setOpiniao(e.target.value)}></input>
                    <div className="button-form">
                          <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};