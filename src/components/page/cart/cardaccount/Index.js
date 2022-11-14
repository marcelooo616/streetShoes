import './CardAccount.css'
export default function CardAccount(props){
    const {id,nome, email, date, cep,address,number,bairro,estado,municipio,total} = props;
    return(
        <div className="card-account">
                <span>ID: {id}</span>
                <span>Nome: {nome}</span>
                <span>email: {email}</span>
                <span>date: {date}</span>
                <span>cep: {cep}</span>
                <span>address: {address}</span>
                <span>number: {number}</span>
                <span>bairro: {bairro}</span>
                <span>estado: {estado}</span>
                <span>municipio: {municipio}</span>
                <span>total: {total}</span>
                <span>Produtos: </span>
        </div>
    );
};