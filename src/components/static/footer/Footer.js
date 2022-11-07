import './Footer.css';
export default function Footer() {
    return(
        <div className="container-footer">
            <div className="footer">
                <span>Formas de pagamento</span>
            </div>
            <div className="payment-methods">           
                <img src="https://imgur.com/j5t6mTR.png" ></img>
                <img src="https://i.imgur.com/17oWCcz.png" ></img>
                <img src="https://i.imgur.com/A3Egp6q.png" ></img>
                <img src="https://imgur.com/HsZLenH.png" ></img>           
            </div>
            <div className="copyrigt">
                <span>© Copyright 2001-2022 Copyright.com.br - All Rights Reserved - Legal</span>
            </div>
        </div>
    );
};