import './Avaliacoes.css';
export default function Avaliacoes(props){
    const { nome, avaliacao, ref} = props;
    return(
        <div className="container-nota">       
            <div className='conteudo'>
                <div className='nome'>
                    <span>Nome: {nome}</span>
                </div>
                <div className='avaliacao'>
                    <span>Avaliação: {avaliacao}</span> 
                </div>
            </div>                        
        </div>
    );
};