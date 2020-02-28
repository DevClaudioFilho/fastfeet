import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  background: #7159c1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`  
  width: 360px;
  height: 425px;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 4px;
  span{
    display:flex;
    flex-direction:column;
    color: #ff0000;
    margin: 0 auto 10px;

  }
  img {
    margin: 60px auto 40px;
  }
  h1 {
    margin: 0 0 9px 30px;
    text-align:left;
    font-size: 14px;
    color: #444444;
  }
  input {
    width: 300px;
    height: 45px;
    border-radius: 4px;
    border-width: 1px;
    margin: 0 0 15px;
    border: 1px solid #DDDDDD;
    &::placeholder {
      padding: 15px 0 15px 5px;
    }
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px bold;
    border: 0;
    border-radius: 4px;
    padding: 13px 87px;
    margin: 0px auto 60px;
    width: 300px;
    height: 45px;
    background: #7159c1;
    color: #fff;
    &:hover {
      background: ${darken(0.1, '#7159c1')};
    }
  }
`;