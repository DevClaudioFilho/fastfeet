import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import {Link } from 'react-router-dom'

import { IoMdCreate, IoIosSearch} from 'react-icons/io'
import { MdDelete } from 'react-icons/md'

import { Container, Title , Table, DropDown, Search } from './styles';

export default function Deliverymans() {
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(()=>{
    async function getDeliverymans(){
      const response = await api.get('/deliverymans');
      setDeliverymans(response.data)
    }
    getDeliverymans();
  },[])


  function handleDelete(id){
    api.delete(`deliverymans/${id}`)
    const response =  deliverymans.filter(deliveryman => deliveryman.id  !== id);
    setDeliverymans(response)
    }

  return (
    <Container>
      <Title>
        <h1>Gerenciando Entregadores</h1>
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
          <Link to='/createdeliverymans'><button>CADASTRAR</button></Link>
        </div>
      </Title>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliverymans.map(deliveryman => (
              <tr key={deliveryman.id}>
                <td>#{deliveryman.id}</td>
                <td><div className="teste"></div></td>
                <td>{deliveryman.name}</td>
                <td>{deliveryman.email}</td>
                <td>
                  <DropDown>
                    <p>...</p>
                    <div>
                      <Link to="/editdeliverymans">
                        <IoMdCreate/>
                        Editar
                      </Link>
                      <button onClick={()=>handleDelete(deliveryman.id)}>
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
