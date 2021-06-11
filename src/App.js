import styled from 'styled-components';
import Shop from './components/Shop';
import Cart from './components/Cart';
// import './App.css';

const Wrapper = styled.div`
  background: blue;
  color: red;
`;

function App() {
  return (
    <Wrapper>
      <section>
        <h3>Shop</h3>
        <Shop />
      </section>
      <section>
        <h3>Cart</h3>
        <Cart />
      </section>
    </Wrapper>
  );
}

export default App;
