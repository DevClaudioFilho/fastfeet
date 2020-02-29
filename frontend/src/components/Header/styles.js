import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  nav {
    display: flex;
    align-items: center;
    img {
      width: 135px;
      height: 26px;
      padding-left:30px;
      padding-right: 30px;
      margin-right:9px;
      border-right: 1px solid #eee;
    }
  }
  a {
    font-size: 15px;
    font-weight: bold;
    color: #999999;
    margin-left: 21px;
    &:hover {
      color: ${darken(0.5, '#999999')};
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-right: 30px;
  padding-left: 20px;
  div{
    display:flex;
    flex-direction:column;
    a{
      margin-top:5px;
      margin-left:4px;
      color:#DE3B3B;
    }
  }
`;
