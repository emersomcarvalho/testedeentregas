import React, { useEffect, useState} from 'react';
import{Link} from 'react-router-dom';

import api from '../../service/api';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const empresaId = localStorage.getItem('empresaId');
    const empresaName = localStorage.getItem('empresaName');


    useEffect(() =>{
        api.get('empresas', {
            headers:{
                Autorization: empresaId,
            }
        }).then(response =>{
            setIncidents(response.data)

        })
    }, [empresaId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`empresas/${id}`, {
                headers: {
                    Autorization: empresaId,
                }
            })

        }catch(err){
            console.log("Deu ruim!");
        }
    }

return (

<div className="profile-container">
    <header>
        <img src={logoImg} alt="Logo"/>
<span>Bem vindo, empresas! {empresaName}</span>
        <Link className="button" to="/register">Cadastrar novo caso</Link>
        <button type="button">
            <FiPower size={18} color="#e02041"/>
        </button>
        </header>

        <h1>Casos cadastrados</h1>

        <ul>
            {incidents.map(incident =>(
                <li key={incident.id}>
                <strong>Nome da empresa</strong>
                <p>{incident.name}</p>
    
                <strong>ponto de partida</strong>
                <p>{incident.pointPartida}</p>
    
                <strong>ponto de destino</strong>
                <p>{incident.pointDestino}</p>
    
                <strong>Data de entrega</strong>
                <p>{incident.date}</p>
    
                <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3" />
                </button>
                </li>

            ))}
        </ul>
        </div>

   );

}