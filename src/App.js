import React from 'react'
import Main from './components/Main'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
const App = () => (
  <div>
    <StyledLink to='/live-events'> View Live Events</StyledLink>
    <StyledLink to='/'>Home</StyledLink>
    <Main />
  </div>
)
export default App