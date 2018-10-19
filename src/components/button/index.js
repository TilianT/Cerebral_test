import { connect } from '@cerebral/react/index'
import React, { Component } from 'react'
import styled from 'styled-components'
import { sequences } from 'cerebral'

class ButtonContainer extends Component {

  clickHandler = () => {
    this.props.openModal( { id: this.props.id } );
  }

  render() {
    return (
      <Button onClick={ this.clickHandler }>More</Button>
    )
  }
}

export default connect({
    openModal: sequences`openModal`
  },
  ButtonContainer
)

const Button = styled.button`
  padding: 15px 35px;
  
  outline: none;
  cursor: pointer;
  
  transition: all 0.2s ease;
  
  border-radius: 5px;
  background: none;
  border: 1px solid #f3f3f3;
  
  :hover {
    transform: scale(1.02);
    border-color: aqua;
  }
  :active {
    transform: scale(0.98);
  }
  
`