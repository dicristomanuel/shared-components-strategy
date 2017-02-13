import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => props.fontSize || 20}px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || 'black'};
`;

export default Text;
