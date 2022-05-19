import React, { Component } from 'react';
import styled from "styled-components"




const Section1Wrapper = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  background-image: url(/imgs/image.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding:184px 0 199px;

  h1{
  font-family: 'Open Sans' sans-serif;
  font-weight: 400;
  font-size: 59px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #FFFFFF;
  }

  .content{
    display:flex;
    justify-content:center;
    margin-top:106px;
  }

  button{
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 2px;
  padding:12px 30px;
  color: #FFFFFF;
  border-radius: 4px;
  text-transform:uppercase;
  cursor: pointer;
  }
  .button1{
  background: #69B9FF;
  border:none;
  margin-right:24px;
  }
  .button2{
    background-color:transparent;
    border: 1px solid #FFFFFF;
  }
`;

class Section1 extends Component {
  render() {
    return (
      <Section1Wrapper>
        <div className='container'>
          <h1>This is Velocity</h1>
          <div className='content'>
            <button className='button1'>sign up</button>
            <button className='button2'>LEARN moke</button>
          </div>
        </div>
      </Section1Wrapper>
    );
  }
}

export default Section1;




