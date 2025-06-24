import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        <span className="text">{children}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: inline-block;

  button {
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: inline-flex;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    width: auto;
    height: auto;
    min-width: unset;
    max-width: unset;
  }

  button:active,
  button:hover {
    outline: 0;
  }

  button span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: auto;
    height: auto;
    transition: 300ms;
    display: inline-block;
  }

  button:hover span {
    background: none;
  }

  button:active {
    transform: scale(0.9);
  }
`;

export default Button;