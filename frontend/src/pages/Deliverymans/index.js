import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import {Link } from 'react-router-dom'



import { Container, Title , Table } from './styles';

export default function Deliverymans() {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    async function getStudents(){
      const response = await api.get('/students');
      setStudents(response.data)
    }
    getStudents();
  },[])


  /*function handleDelete(id){
    api.delete(`students/${id}`)
    const response =  students.filter(student => student.id  !== id);
    setStudents(response)
    }*/

  return (
    <Container>
      <Title>
        <h1>Gerenciando Entregadores</h1>
        <div>
          <input
          id="search-input"
          type="text"
          placeholder="Buscar por Encomendas"
          onChange={e =>
           e.target.value}
          />
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
              <tr>
                <td>#5</td>
                <td><div></div></td>
                <td>mario ruan</td>
                <td>teste@gmail.com</td>
                <td>...</td>
              </tr>

          </tbody>
        </Table>
    </Container>
    )
    }
