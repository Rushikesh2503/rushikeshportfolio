import React from 'react'
import { ifProp } from 'styled-tools';
import { slideInDown, slideOutUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {opacity:0}
    25% {opacity:1}
    75% {opacity:1}
    100% {opacity:1}
`
const animation2 = keyframes`
   0% {
color: navy;
left: 0px;
top: 0px;
}
25% {
color: #0c1236;
left: 200px;
top: 0px;
}
50% {
color: #242469;
left: 200px;
top: 200px;
}
75% {
color: #43a5df;
left: 0px;
top: 200px;
}
100% {
color: navy;
left: 0px;
top: 0px;
}
`
const slideInAnimation = keyframes`${slideInDown}`;
const slideOutAnimation = keyframes`${slideOutUp}`;

const Wrapper = styled.span`
    opacity:1;
    animation-name:${animation};
    animation-duration:8s;
    animation-fill-mode:forwards;
    animation-iteration-count:infinite;
    font-size:50px;
    color:rgb(248, 248, 255);
    text-shadow: 2px 1px rgb(15, 12, 1);
`
const Wrapper3 = styled.span`
    animation-name:${animation2};
    animation-duration:6s;
    animation-fill-mode:forwards;
    animation-iteration-count:infinite;
    font-size:22px;
`
const Wrapper2 = styled.div`
  font-size:22px;
  animation: 0.5s ${slideInAnimation}, 0.5s ${slideOutAnimation};
  color:chartreuse;
`;
const AnimationHead = () => {
    return (
        <>
            <h1><Wrapper>I'm Rushikesh Bambadkar</Wrapper></h1>
            <h4><Wrapper2>Full Stack web developer</Wrapper2></h4>
        </>
    )
}

export default AnimationHead
