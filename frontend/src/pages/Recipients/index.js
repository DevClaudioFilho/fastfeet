import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import {Link } from 'react-router-dom'

import { IoMdCreate,IoIosSearch } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

import { Container, Title , Table,DropDown,Search } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(()=>{
    async function getRecipients(){
      const response = await api.get('/recipients');
      setRecipients(response.data)
    }
    getRecipients();
  },[])


  function handleDelete(id){
    api.delete(`recipients/${id}`)
    const response =  recipients.filter(recipient => recipient.id  !== id);
    setRecipients(response)
    }

  return (
    <Container>
      <Title>
        <h1>Gerenciando Destinatarios</h1>
        <div className="Title">
          <Search>
            <IoIosSearch/>
            <input
            id="search-input"
            type="text"
            placeholder="Buscar por Encomendas"
            onChange={e =>
             e.target.value}
            />
          </Search>
          <Link to='/createrecipients'><button>CADASTRAR</button></Link>
        </div>
      </Title>
      <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          {recipients.map(recipient => (
              <tr key={recipient.id}>
                <td>#{recipient.id}</td>
                <td>{recipient.name}</td>
                <td>{recipient.street}, {recipient.number}, {recipient.town}-{recipient.estate}</td>
                <td>
                  <DropDown>
                    <p>...</p>
                    <div>
                      <Link to="/createrecipients">
                        <IoMdCreate/>
                        Editar
                      </Link>
                      <button onClick={()=>handleDelete(recipient.id)}>
                        <MdDelete/>
                        Delete
                      </button>
                    </div>
                  </DropDown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </Container>
    )
    }
