import React from 'react'
import styled, { keyframes } from 'styled-components'

let arr1 = [
  'Privacy',
  'Policy'
]
let arr2 = [
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
  'Privacy',
  'Policy',
]

export default () => {
  window.scrollTo(0, 0);
  return (
    <Container>
      {
        arr1.map( item => {
          const rand1 = Math.floor(Math.random() * 1000);
          const rand2 = Math.floor(Math.random() * 300);
          const rand3 = Math.floor(Math.random() * 100);
          const rand4 = Math.floor(Math.random() * 400);
          const rand5 = Math.floor(Math.random() * 25);
          const rand6 = Math.floor(Math.random() * 25);

          const rotate1 = keyframes`
            from {
              color: violet;
              transform: rotate(${rand3});
            }

            to {
              color: cyan;
              transform: rotate(${rand1}deg);
            }
          `;

          const rotate2 = keyframes`
            0% {
              color: rosybrown;
              transform: translateY(${rand2});
              transform: translateX(-${rand6});
            }
            25% {
              transform: translate(${rand2}px);
            }
            50% {
              transform: translateY(-${rand3}px);
            }
            100% {
              color: teal;
              transform: translateY(${rand4}px);
              transform: translatex(${rand2}px);
            }
          `;


          const Span1 = styled.div`
            width: ${rand6}px !important;
            animation: ${rotate1} ${rand5}s ease infinite !important;
          `
          const Span2 = styled.div`
            width: ${rand2}px !important;
            animation: ${rotate2} ${rand6}s ease-in-out infinite !important;
          `

          return <h1><Span1><Span2>item</Span2></Span1></h1>
        })
      }
      <Wrap>
        {
          arr2.map( ( item, index ) => {
            const rand1 = Math.floor(Math.random() * 1000);
            const rand2 = Math.floor(Math.random() * 300);
            const rand3 = Math.floor(Math.random() * 300);
            const rand4 = Math.floor(Math.random() * 300);
            const rand5 = Math.floor(Math.random() * 11);
            const rand6 = Math.floor(Math.random() * 11);

            const rotate1 = keyframes`
            from {
              color: violet;
              transform: rotate(0deg);
            }

            to {
              color: cyan;
              transform: rotate(${rand1}deg);
            }
          `;

            const rotate2 = keyframes`
            0% {
              color: sandybrown;
              transform: translateY(-50px);
              transform: translateX(-50px);
            }
            25% {
              transform: translate(${rand2}px);
            }
            50% {
              transform: translateY(${rand3}px);
            }
            100% {
              color: red;
              transform: translateY(${rand4}px);
              transform: translatex(${rand2}px);
            }
          `;

            const Span1 = styled.div`
            width: ${rand6}px !important;
            font-size: 12px;
            animation: ${rotate1} ${rand5}s ease infinite !important;
          `
            const Span2 = styled.div`
            width: ${rand2}px !important;
            animation: ${rotate2} ${rand6}s ease-in-out infinite !important;
          `


            return (
              <Span1><Span2>item</Span2></Span1>
            )
          })
        }

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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  text-align: center;
  
  color: #333;
`;
