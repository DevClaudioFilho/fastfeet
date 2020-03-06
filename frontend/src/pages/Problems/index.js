import React, {useState, useEffect} from 'react';
import api from '../../services/api'

import { Container, Title , Table } from './styles';

export default function Recipients() {
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
        <h1>Gerenciando Problemas</h1>
      </Title>
        <Table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>#5</td>
                <td> nao me entregaram a mercadoria</td>
                <td>...</td>
              </tr>
              <tr>
                <td>#5</td>
                <td> nao me entregaram a mercadoria</td>
                <td>...</td>
              </tr>
          </tbody>
        </Table>
    </Container>
    )
    }
