import React from 'react';
import styled from 'styled-components';
import Bucket from './components/Bucket';

function App() {
  return (
    <React.Fragment>
      <PageTitle>
        Hi! This is an example of a very basic shop and shopping cart and
        passing items between the two.
      </PageTitle>
      <Wrapper>
        <Bucket bucket='shop' />
        <Bucket bucket='cart' />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px;
`;
const PageTitle = styled.h1`
  color: #4f6d7a;
  text-align: center;
  margin-top: 50px;
  margin: 20px 150px;
`;
