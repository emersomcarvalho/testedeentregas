import React, {useState} from 'react';

import api from '../../service/api';
import {Link} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.png';

export default function Register(){
    const [name, setName] = useState('');
    const [pointPartida, setPartida] = useState('');
    const [pointDestino, setDestino] = useState('');
    const [date, setDate] = useState('');

    async function handleRegister (e){
        e.preventDefault();
        const data = {
            name,
            pointPartida,
            pointDestino,
            date
            };

    try {
         const response = await api.post('empresas', data);
         alert(`Seu acesso: ${response.data.id}`);
        } catch(err) {
            console.log("Deu ruim!");
        }
    }
    

    return (

        <div className="register-container">
            <div className="content">
           <section>
              <img src={logoImg} alt="Logo" width={320} height={150}/>
              <h1>Cadastro</h1>
              <p>Faça seu cadastro, entre na plataforma de entrega</p>

              <Link className="back-link" to="/profile">
                        <FiArrowDownLeft size={16} color="#E02041"/>
                    Verificar entregas
              </Link>
           </section>
           <form onSubmit={handleRegister}>
        <input placeholder="Nome da empresa"
                value={name}
                onChange={e => setName(e.target.value)}
                 />
        <input type="address" placeholder="Ponto de partida"
                 value={pointPartida}
                 onChange={e => setPartida(e.target.value)} 
                 />
        <input type="address" placeholder="Ponto de destino"
        value={pointDestino}
        onChange={e => setDestino(e.target.value)}
                />

        <div className="input-group" >
        <input type="date" placeholder="Data da entrega"
            value={date}
            onChange={e => setDate(e.target.value)}
         />

        </div>
          <button className="button" type="submit">Cadastrar</button>
      </form>
      </div>
     </div>

    );
}