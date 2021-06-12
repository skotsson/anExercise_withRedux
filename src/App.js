import React from 'react';
import styled from 'styled-components';
import Bucket from './components/Bucket';

function App() {
  return (
    <React.Fragment>
      <Text>
        Hi! This is an example of a very basic shop and shopping cart and
        passing items between the two.
      </Text>
      <Wrapper>
        <Bucket bucket='shop' />
        <Bucket bucket='cart' />
      </Wrapper>
      <Text>links to my other examples:</Text>
      <Text>
        <a href='https://gotta-do.github.io'>note-taking app</a>
      </Text>
      <FooterText>
        Development by<a href='http://www.github.com/iskoti'> iskoti</a>
      </FooterText>
    </React.Fragment>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 50px;
`;
const Text = styled.h1`
  color: #4f6d7a;
  text-align: center;
  margin: 50px 100px;
  text-decoration: none;
`;

const FooterText = styled.h6`
  color: #4f6d7a;
  text-align: center;
  margin: 10px 100px;
  text-decoration: none;
`;
