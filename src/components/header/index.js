import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import '../../App.css'

export default class Header extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    console.log('header Height', this.headerNode.offsetHeight);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    console.log('window Y: ', window.pageYOffset);
  };

  render() {
    window.scrollTo(0, 0);
    return (
      <div ref={ ( node ) => this.headerNode = node } className='header'>
        <HeaderContainer>
          <Container>
            <NavLink style={linkStyle} activeClassName="link--active" exact to='/'>home</NavLink>
            <NavLink style={linkStyle} activeClassName="link--active" to='/about'>about</NavLink>
            <NavLink style={linkStyle} activeClassName="link--active" to='/policy'>policy</NavLink>
          </Container>
        </HeaderContainer>
      </div>
    )
  }
}

const linkStyle = {
  padding: '5px 10px',

  cursor: 'pointer',

  transition: 'all 0.2s ease',

  textDecoration: 'none',
  textTransform: 'uppercase',

  color: 'rgba(150, 150, 250, 1)',
}

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  
  background: rgba(50,50,50,0.8);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 1px 0 5px 2px #ccc;
  `
const Container = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  `