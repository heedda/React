import React from "react";
import { styled } from "styled-components";

const Hibutton = () => {
  return (
    <>
      <Button>하이</Button>
      <br />
    </>
  );
};

const Button = styled.button`
  margin-left: 10px;
  &:hover{
    cursor:pointer;
    margin-left: 20px;
    color: red;
  }
`;


export default Hibutton;
