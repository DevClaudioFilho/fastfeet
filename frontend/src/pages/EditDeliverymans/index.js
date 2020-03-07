import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input} from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,FileInput,InputContainer } from './styles';

export default function CreateDeliverymans() {
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(()=>{
    async function getDeliverymans(){
      const response = await api.get('/deliverymans');
      setDeliverymans(response.data)
    }
    getDeliverymans();
  },[])


  async function handleSubmit(data){
    console.log(data)
    if(deliverymans.email === data.email){
      return
    }
    await api.post('/deliverymans', data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>
          <h1>Cadastro de Entregadores</h1>
          <div>
            <Link to='/deliverymans'><button>VOLTAR</button></Link>
            <button type="submit">SALVAR</button>
          </div>
        </Title>
        <InputContainer>
          <FileInput>
            <Input type="file" placeholder="Adicionar foto" name="Adicionarfoto"/>
          </FileInput>
          <Input name="Name" label="Nome" placeholder="John Doe" />
          <Input name="E-Mail" placeholder="example@rocketseat.com" label="E-Mail"/>
      </InputContainer>
      </Form>
    </Container>
    )
    }
