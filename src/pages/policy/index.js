import React from 'react'
import styled, { keyframes } from 'styled-components'

export default () => {
  window.scrollTo(0, 0);
  return (
    <Container>
      <h1><Span1><Span6>Privacy</Span6></Span1> <Span2><Span7>Policy</Span7></Span2></h1>
      <Wrap>
        <Span3><Span5>Lorem</Span5></Span3>
        <Span4>Lorem</Span4>
      </Wrap>
    </Container>
  )
}

const Wrap = styled.div`
  display: block;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  
  text-align: left;
  
  color: #333;
`;

const rotate1 = keyframes`
  from {
    color: violet;
    transform: rotate(0deg);
  }

  to {
    color: cyan;
    transform: rotate(360deg);
  }
`;
const rotate2 = keyframes`
  from {
    color: chartreuse;
    transform: rotate(0deg);
  }

  to {
    color: fuchsia;
    transform: rotate(-370deg);
  }
`;
const rotate3 = keyframes`
  0% {
    color: rosybrown;
    transform: translateY(-50%);
    transform: translate(-50%);
  }
  25% {
    transform: translate(150%);
  }
  50% {
    transform: translateY(350px);
  }
  100% {
    color: teal;
    transform: translateY(0%);
    transform: translateX(-50%);
  }
`;
const rotate6 = keyframes`
  0% {
    color: rosybrown;
    transform: translateY(-150px);
    transform: translateX(-150px);
  }
  25% {
    transform: translate(450px);
  }
  50% {
    transform: translateY(350px);
  }
  100% {
    color: teal;
    transform: translateY(0%);
    transform: translateX(50%);
  }
`;
const rotate7 = keyframes`
  0% {
    color: rosybrown;
    transform: translateY(150px);
    transform: translateX(-150px);
  }
  25% {
    transform: translateY(250px);
    transform: translateX(150px);
  }
  50% {
    transform: translateY(650px);
  }
  100% {
    color: teal;
    transform: translateY(10px);
    transform: translateX(-50px);
  }
`;
const rotate4 = keyframes`
  from {
    color: rosybrown;
    transform: rotate(-100deg);
  }

  to {
    color: teal;
    transform: rotate(2760deg);
  }
`;

const Span1 = styled.div`
  width: 400px;
  animation: ${rotate1} 4s ease infinite;
`
const Span2 = styled.div`
  width: 10px;
  animation: ${rotate2} 3s ease-in-out infinite;
`
const Span3 = styled.div`
  width: 500px;
  font-size: 30px;
  animation: ${rotate3} 10s ease infinite;
`
const Span4 = styled.div`
  width: 200px;
  font-size: 70px;
  animation: ${rotate4} 2s ease infinite;
`
const Span5 = styled.div`
  width: 50px;
  font-size: 30px;
  animation: ${rotate4} 7s ease infinite;
`
const Span6 = styled.div`
  width: 50px;
  font-size: 50px;
  animation: ${rotate6} 5s ease infinite;
`
const Span7 = styled.div`
  width: 350px;
  font-size: 42px;
  animation: ${rotate7} 8s ease infinite;
`