import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 34px auto;
`;

export const Title = styled.div`
  display:flex;
  flex-direction:column;
  color: #444444;

  .Title{
    display:flex;
    justify-content: space-between;
    margin-top:34px;
    input {
      padding:0 8px;
      background: transparent;
      border:none;
      box-sizing: border-box;
      width:100%;


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

export const Search = styled.div`
  width: 237px;
  height: 36px;
  display:flex;
  flex-direction:row;
  text-align:center;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  background:#ffffff;
  svg{
    padding:10px 0 10px 16px;
    background:transparent;
    border-radius: 4px;
    border:none;
    height: 16px;
    width:16px;
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

    .teste{
          width:35px;
          height:35px;
          border-radius:50%;
          background:red;

  }
  }
  }
`;


export const DropDown = styled.div`
  position: relative;
  display: inline-block;

  :hover div{
    display: flex;
    flex-direction:column;
  }

  div{
    display: none;
    position: absolute;
    background-color: #FFFFFF;
    width: 130px;
    height: 70px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 16px 10px;
    z-index: 1;
    left:-500%;

    a{
      padding:6px 0 6px 0;
      font-size:16px;
      color:#999999;
      border-bottom:1px solid #EEEEEE;
      svg{
        margin: 0 10px;
        color:#4D85EE;
      }
    }
    button{
      padding:6px 0 6px 0;
      text-align:left;
      font-size:16px;
      border:none;
      background:none;
      color:#999999;
      svg{
        margin: 0 10px;
        color:#DE3B3B;
      }
    }
    }
`;
