import React from 'react'
import styled, { keyframes } from 'styled-components'

export default () => {
  return (
    <Loading>
    </Loading>
  )
}

const Loading = styled.div`
  width: 100px;
  height: 100px;
  position: fixed;
  top: calc((100% - 100px)/2);
  left: calc((100% - 100px)/2);
  
  border-radius: 50%;
  border: 3px solid deepskyblue;
  `
