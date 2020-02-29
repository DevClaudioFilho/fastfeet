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
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Demo</strong>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
