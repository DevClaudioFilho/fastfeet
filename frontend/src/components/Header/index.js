import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <Link to="/packages">ENCOMENDAS</Link>
          <Link to="/deliverymans">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Demo</strong>
              <p>sair do sistema</p>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
