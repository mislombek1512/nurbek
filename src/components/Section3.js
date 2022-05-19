import React from 'react'
import styled from "styled-components"


const Section3Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
padding:77px 0 80px 0;
h1{
  font-family: 'Open Sans' sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #676770;
}
.boxs-content{
  width: 450px;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:20px ;
  margin-top:62px;
  margin:73px 0 52px 350px;  
  .box{
  padding:36px 16px 23px 16px;
  background: #FFFFFF;
  border: 1px solid #DCEBF7;
  border-radius: 5px;
}
}
p{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 3px;
  color: #8E8E9C;
}
button{
    display: block;
    margin: auto;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #92A0AD;
    border: none;
    width: 196px;
    height: 21px;
    border-radius: 4px;
    :first-child{
        background-color:#2E80B6;
    }
  transform:translate 0.7s easy;
  cursor:pointer;

  &:hover{
    background-color:#2E80B6;
  }
}
.img{
  /* padding:53px 0 0 250px; */
  display: block;
  margin: auto;
  margin-top: 53px;
}
.chi{
  margin:25px 0 0 0;
}

`;


const Section3 = () => {
  return (
    <Section3Wrapper>
      <div className='container'>
        <h1>Tab Section</h1>
        <p>This is some text inside of a div block..</p>
        <div className='boxs-content'>
         <button>Tab Button 1</button>
         <button>Tab Button 2</button>
         <button>Tab Button 3</button>
      </div>
      
      <img src='/imgs/person.png' alt='' className='img' />
      <div className='chi'>
      <h1>Some Title Here</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
      <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
      
      </div>
      </div>
    </Section3Wrapper>
  )
}

export default Section3