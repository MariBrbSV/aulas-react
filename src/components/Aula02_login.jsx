import { useState } from "react";

const Aula02_login = () => {
    const [email, setEmail] = useState('senai@senai.br'); 
    const[senha, setSenha] = useState('123');
    const[mensagem, setMensagem] = useState ('');
    const verificar = (email, senha) => {
        if (email == 'senai@senai.br' && senha == '123'){
            setMensagem ( '✅ Usuário Logado')
        } else {
            setMensagem ('❌ Senha e/ou usuário errado')
        }
    }

    
    

    return (
        <div className="containerLogin"> 
        <div className="card"> 
        <section style={{justifyContent:'center', display:'flex'}}> 
        <img className="img-logo-senai" src='https://logodownload.org/wp-content/uploads/2019/08/senai-logo-1.png'/>
        </section>
            <p style={estilo.login}> Login </p>
            <main style={{textAlign: 'center'}}> 
            <p> Email </p>
            <div> 
            <input style={estilo.card} type="text" placeholder="Digite seu email" 
            onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <p style={{marginTop:"20px"}}> Senha </p>
            <input style={estilo.card} type="text" placeholder="Digite sua senha" 
            onChange={(e) => setSenha(e.target.value)} value={senha}/>
            <br />
            <button type="button" className="btn btn-primary botao" 
            onClick={() => verificar(email, senha)}> Entrar </button>

            <p className="msg-logar"> {mensagem} </p>
            </main>
        </div>
        </div>
        
    )
}

const estilo = {
    login: {
        color: '#016bb5',
        textAlign: 'center',
        fontStyle: 'bold',
        fontSize: '50px',
        marginBottom: '20px',
        fontFamily: 'Raleway'
    },
    card: {
        backgroundColor: 'white',
        padding: '16px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        alignItens: 'center',
        justifyContent: 'center',
        
    },
    arrumandologo: {
        height: '50px',
        width: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    containerLogin: {
        height: '50px',
        width: '50px'
    }
}



export default Aula02_login;