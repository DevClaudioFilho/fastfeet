import React from 'react';
import { useDispatch,useSelector } from "react-redux"
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup';

import {singInRequest} from '../../store/modules/auth/actions'

import logo from "../../assets/fastfeet-logo.png"

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(singInRequest(email, password));
  }


  return (
    <>
      <img src={logo} alt="logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>SEU E-EMAIL</h1>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <h1>SUA SENHA</h1>
        <Input name="password" type="password" placeholder="************" />
        <button type="submit">{loading ? 'Carregando' : 'Entrar no sistema'}</button>
      </Form>
    </>
  );
}
