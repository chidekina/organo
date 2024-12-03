import styled from "styled-components";

const ButtonStyled = styled.button`
background-color: #6278F7;
border-radius: 10px;
font-weight: 700;
font-size: 18px;
padding: 32px;
border: none;
cursor: pointer;
color: #FFF;
margin: 16px 0;

&:hover {
    color: #95FFD4
`;

export default function Button(props) {
  return <ButtonStyled>{props.children}</ButtonStyled>;
}
