import React from 'react'
import Main from './Main'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

/* Styles */
const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  display: inline-block;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: black;
    transition: width .3s;
  }
  &:hover:after {
    width: 100%;
  }
  &:hover{
    font-weight: bold;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 10px;
`;

const App = () => (
  <Container>
    <StyledLink to='/live-events'> View Live Events</StyledLink>
    <StyledLink to='/'>Home</StyledLink>
    <Main />
  </Container>
)
export default App