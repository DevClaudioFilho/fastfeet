import React, {useState, useEffect} from 'react';
import api from '../../services/api'
import { Input} from '@rocketseat/unform';
import {Link } from 'react-router-dom'

import Form, { Container, Title,LocateInput,RegionInput,InputContainer } from './styles';

export default function EditRecipients() {
  const [/*recipients*/, setRecipients] = useState([]);

  useEffect(()=>{
    async function getRecipients(){
      const response = await api.get('/recipients');
      setRecipients(response.data)
    }
    getRecipients();
  },[])


  async function handleSubmit(data){
    console.log(data)
    await api.post('/recipients', data);
  }

  return (
    <Container>
      <Form onSubmit={()=>handleSubmit()}>
        <Title>
          <h1>Editr Destinatario</h1>
          <div>
            <Link to='/recipients'><button>VOLTAR</button></Link>
            <button type="submit">SALVAR</button>
          </div>
        </Title>
        <InputContainer>
          <Input name="Name" label="Nome" placeholder="Ludwig van Beethoven" />
          <LocateInput>
            <Input name="street" placeholder="Rua Beethoven" label="Rua"/>
            <Input type="number" name="number" placeholder="1729" label="Número"/>
            <Input name="complement" placeholder="" label="Complemento"/>
          </LocateInput>
          <RegionInput>
            <Input name="town" placeholder="Diadema" label="Rua"/>
            <Input name="estate" placeholder="São Paulo" label="Complemento"/>
            <Input type="number" name="cep" placeholder="09960-580" label="CEP"/>
          </RegionInput>
      </InputContainer>
      </Form>
    </Container>
    )
    }
