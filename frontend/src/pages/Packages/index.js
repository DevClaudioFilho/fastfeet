import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import {Link } from 'react-router-dom'

import { IoMdCreate, IoMdEye, IoIosSearch } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'


import { Container, Title , Table, DropDown,Search } from './styles';

export default function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(()=>{
    async function getPackages(){
      const response = await api.get('/packages');
      setPackages(response.data)
    }
    getPackages();
  },[])


  function handleDelete(id){
    api.delete(`packages/${id}`)
    const response =  packages.filter(pack => pack.id  !== id);
    setPackages(response)
    }

  return (
    <Container>
      <Title>
        <h1>Gerenciando Encomendas</h1>
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
          <Link to='/createpackages'><button>CADASTRAR</button></Link>
        </div>
      </Title>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          {packages.map(pack => (
              <tr key={pack.id}>
                <td>#{pack.id}</td>
                <td>{pack.recipient_id}</td>
                <td>{pack.deliveryman_id}</td>
                <td>{pack.recipient_id}</td>
                <td>{pack.recipient_id}</td>
                <td>pendente</td>
                <td>
                  <DropDown>
                    <p>...</p>
                    <div>
                      <p>
                        <IoMdEye/>
                        Vizualizar
                      </p>
                      <Link to="/editpackages">
                        <IoMdCreate/>
                        Editar
                      </Link>
                      <button onClick={()=>handleDelete(pack.id)}>
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
