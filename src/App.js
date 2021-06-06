import Shop from './components/Shop';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <div className='frame'>
        <h3>Shop</h3>
        <Shop />
      </div>
      <div className='frame'>
        <h3>Cart</h3>
        <Cart />
      </div>
    </div>
  );
}

export default App;
