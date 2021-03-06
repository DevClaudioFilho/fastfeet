import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 34px auto;
`;

export const Title = styled.div`
  display:flex;
  flex-direction:column;
  color: #444444;
  div{
    display:flex;
    justify-content: space-between;
    margin-top:34px;
    input {
      background: #FFFFFF;
      border: 1px solid #DDDDDD;
      box-sizing: border-box;
      border-radius: 4px;
      width: 237px;
      height: 36px;
      ::placeholder{
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        text-align: center;
        color: #999999;;
      }
    }
    button{
      background: #7D40E7;
      border-radius: 4px;
      border:none;
      width: 142px;
      height: 36px;
      font-size:14px bold;
      color:#FFFFFF;
    }
  }
`;

export const Table = styled.table`
  max-width: 1200px;
  width:100%;
  margin: 24px auto;
  text-align:left;
  font-size:16px;
  border-collapse:separate;
  border-spacing:0px 10px;
  border:none;

  thead{
    tr{
      height:21px;
    th{
    margin-top:30px;
    padding:0 30px;
      }
    }
  }

  tbody{

    tr{
      height:57px;
      border-radius: 4px;
    td{
    padding:0 30px;
    background: #FFFFFF;
    color:#666666;
    }
  }
  }
`;
