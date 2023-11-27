import React from "react";
import styled from "styled-components"
import Hibutton from "./button";
import Yext from "./text";

const Main=()=>{
    return(
        <MainWrapper>
            <Text>이건 메인페이지</Text>
            <Button>메인 버튼</Button>
            <Hibutton/>
            <Yext/>
            <Yext/>
            <Yext/>
        </MainWrapper>
    )
}

const MainWrapper=styled.div`
`

const Text=styled.div`
`

const Button=styled.button`

`

export default Main