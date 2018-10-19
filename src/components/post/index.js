import React from 'react'
import Button from '../button/index'
import styled from 'styled-components'

export default ({ title, id }) => {
    return (
      <Wrapper>
        <h2>{ title }</h2>
        <Button id={ id }>More</Button>
      </Wrapper>
    )
  }

  const Wrapper = styled.div`
    text-align: left;
  `