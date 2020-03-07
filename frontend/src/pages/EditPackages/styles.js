import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;


export const Title = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  color: #444444;
  button{
    margin-left:16px;
    border:none;
    background: #7D40E7;
    border-radius: 4px;
    width: 112px;
    height: 36px;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    font-weight: bold;
    color: #FFFFFF;
    padding:10px 16px;
  }
  a{
    button{
      background: #CCCCCC;
      color: #FFFFFF;
    }
  }
`;
export const InputContainer=styled.div`
  background: #fff;
  max-width: 900px;
  margin: 20px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  label {
    color: #444444;
    font-weight:bold;
    text-transform: uppercase;
    margin-bottom: 9px;
  }
  input,textarea {
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #DDDD;
    height: 15px;
    padding: 15px 13px;
    background: #FFFF;
    &:placeholder {
      color: #666666;
    }
     }
     span {
       font-size: 14px;
       color: #f95e5a;
     }
     textarea {
       height: 100%;
     }
     button {
       align-self: flex-end;
       width: 170px;
       margin: 20px 0;
       border-radius: 5px;
       font-size: 18px;
       background: #365df0;
       color: #fff;
       border: 0;
       padding: 14px 0;
       transition: ease-in 0.2s;
       &:hover {
         background: #2f55cc;
       }

     }`


export const BodyInput =styled.div`
  display: grid;
  justify-content:space-between;
  grid-template-columns: 405px 405px;
  grid-template-rows: auto auto   ;
  margin-bottom: 9px;
  label{
    grid-row-start:1;
  }

`
export default styled(Form)`

`
