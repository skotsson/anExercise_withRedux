import styled from 'styled-components';

const Button = ({ onClick, children }) => {
  console.log('testng');
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.span`
  width: 100px;
  height: 50px;
  background-color: #99cccc;
  color: charcoal;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid rgba(79, 109, 122, 0.5);
`;
