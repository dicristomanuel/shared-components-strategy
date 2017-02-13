import React from 'react';
import MainContainer from './MainContainer';
import Text from '../shared/Text.js';

export default () => {
  return (
    <MainContainer>
      <Text
        fontSize={30}
        fontWeight={'bold'}
        color={'gray'}
      >
        THIS IS THE HEADER COMPONENT
      </Text>
    </MainContainer>
  );
}
