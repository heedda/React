import React from "react";
import { styled } from "styled-components";
const Yext = () => {
  return (
    <>
      <H>남궁윤교</H>
    </>
  );
};

const H = styled.div`
  margin: 10px;
  display: inline-block;
  color: blue;
  &:hover{
    transition: all 1s;
    transform: translateX(+10px);
    color: red;
  }
`;
export default Yext;
