
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Feedback.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from "yup";



const validationPost = yup.object().shape({
    ref: yup.string().required("Campo ID não podem estar vazios").min(8, "min 9 caracteres"),
    nome: yup.string().required("Campo nome não podem estar vazios").max(25, "Max de 25 caracteres"),
    opiniao: yup.string().required("Campo Avaliação não podem estar vazios").max(500, "Max 500 caracteres"),
})

export function Feedback(){
    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationPost)
    });
    



    const onSubmit = value =>  axios.post(`${process.env.REACT_APP_BACKEND_URI}/feedback`, value)
    .then(() => {
        toast.info("Obrigado pelo Feedback!!", {
            position: "top-right",
            autoClose:2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
    
    navigate.push("/")
})
.catch(() => {
    toast.errors("Desculpe augo deu muito errrado!!", {
        position: "top-right",
        autoClose:2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
})



    
    return(
        <div className="container-feedback">
            <div className='feedback'>
                
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className='text-avl'>
                    <span> Deixe uma avaliacão</span>
                </div>

                <div  className="fields">
                    <label htmlFor="id">Codigo de ref. prod.id</label>
                    <input type="text" name="ref" {...register("ref")}></input>
                    <p className="error-message">{errors.ref?.message}</p>
                </div>
                    
                    <div  className="fields">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome"  {...register("nome")} ></input>
                        <p className="error-message">{errors.nome?.message}</p>
                    </div>

                    <div  className="fields">
                        <label htmlFor="avaliacao">Avaliação</label>
                        <textarea type="text" className='avaliacoes-input' name="opiniao"  {...register("opiniao")}></textarea>
                        <p className="error-message">{errors.opiniao?.message}</p>
                    </div>              
                    <div className="button-form">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};