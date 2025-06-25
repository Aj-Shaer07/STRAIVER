import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button2 = ({ onClick, children, type = 'button', disabled }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      <span className="text">{children}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  color: #ffffff;
  display: inline-flex;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  padding: 3px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 0.5rem 0;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .text {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    transition: 300ms;
  }

  &:hover:not(:disabled) .text {
    background: none;
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;

export default Button2;