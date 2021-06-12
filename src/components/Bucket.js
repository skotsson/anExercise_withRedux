import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
  deleteShopItem,
  addCartItem,
  deleteCartItem,
  addShopItem,
} from '../redux/actions';
import Button from './Button';
import styled from 'styled-components';

const Bucket = ({ bucket }) => {
  const bucketState = useSelector(state => state[bucket]);
  console.log(bucketState);
  const dispatch = useDispatch();

  const addToShop = useCallback(
    item => {
      dispatch(addShopItem(item));
      dispatch(deleteCartItem(item));
    },
    [dispatch],
  );

  const addToCart = useCallback(
    item => {
      dispatch(addCartItem(item));
      dispatch(deleteShopItem(item));
    },
    [dispatch],
  );

  const handleClick = item => {
    switch (bucket) {
      case 'cart':
        addToShop(item);
        break;
      case 'shop':
        addToCart(item);
        break;
      default:
        console.log(alert('No bucket specified'));
    }
  };

  const list = bucketState.map((item, i) => (
    <ItemRow key={`id_${i}`}>
      <ItemName>{item.name}</ItemName>
      <Button onClick={() => handleClick(item)}>
        <span>{bucket === 'shop' ? 'Add' : 'Remove'}</span>
      </Button>
    </ItemRow>
  ));

  return (
    <Section>
      <Title>{`${bucket}(${list.length})`}</Title>
      {list}
    </Section>
  );
};

export default Bucket;

const ItemName = styled.h4`
  text-transform: capitalize;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px #4f6d7a solid;
  min-width: 20%;
  width: 400px;
  min-height: 40vh;
  border-radius: 20px;
  margin: 10px;
  color: #c0d6df;
  background-color: #e8dab2;
`;

const ItemRow = styled.div`
  color: #4f6d7a;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin-top: 10px;
`;

const Title = styled.h3`
  color: #dd6e42;
  text-transform: capitalize;
`;
