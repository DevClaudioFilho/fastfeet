import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input} from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,BodyInput ,InputContainer } from './styles';

export default function CreatePackages() {
  const [packages, setPackages] = useState([]);

  useEffect(()=>{
    async function getPackages(){
      const response = await api.get('/packages')
      setPackages(response.data)
    }
    getPackages();
  },[]);

  async function handleSubmit(data){
    console.log(data)
    await api.post('/packages', data);
  }

  return (
    <Container>
      <Form onSubmit={()=>handleSubmit()}>
        <Title>
          <h1>Cadastro de Entregas</h1>
          <div>
            <Link to='/packages'><button>VOLTAR</button></Link>
            <button type="submit">SALVAR</button>
          </div>
        </Title>
        <InputContainer>
          <BodyInput>
          <Input type="number" name="recipient_id" placeholder="John Doe" label="Destinatário"/>
          <Input type="number" name="deliveryman_id" placeholder="Ludwig van Beethoven" label="Entregador"/>
          </BodyInput>
            <Input name="product" placeholder="Yamaha SX7" label="Nome do produto"/>
      </InputContainer>
      </Form>
    </Container>
    )
    }
