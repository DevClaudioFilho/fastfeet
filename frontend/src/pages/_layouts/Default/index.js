import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function SingIn({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

SingIn.propTypes = {
  children: PropTypes.element.isRequired,
};