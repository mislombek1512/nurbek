import React from 'react'
import styled from "styled-components" 

const HeaderWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  padding:11px 0 24px 0;
  .container{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 60px 0 60px;
  }
  ul{
  display:flex;
  align-items:center;
  margin:0;
  padding:0;
  li{
  list-style:none;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  cursor:pointer;
  &:hover{
  color: #0082F3;
  }
  &:first-child{
    margin-right:40px;
  }
  }
  }
`;

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <div className='container'>
          <img src='/imgs/Velocitylogo.svg' alt='img error' />
          <ul>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
      </HeaderWrapper>
    </div>
  )
}

export default Header