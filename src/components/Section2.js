import React from 'react'
import styled from "styled-components"

const Section2Wrapper = styled.div`
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
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:20px ;
  margin-top:62px;
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
.box{
  h4{
  padding: 50px 0 20px 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 7px;
  text-transform: uppercase;
  color: #676770;

  }
}
.img{
  padding:0 0 0 170px;
}
`;


function Section2() {
    return (
        <Section2Wrapper>
            <div className='container'>
                <h1>what we do</h1>
                <p>This is some text inside of a div block.</p>
                <div className='boxs-content'>
                    <div className='box'>
                        <img src='/imgs/img1.png' alt='' className='img' />
                        <h4>Graphic Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p></div>
                    <div className='box'>
                        <img src='/imgs/img2.png' alt='' className='img' />
                        <h4>Awesome code</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p></div>
                    <div className='box'>
                        <img src='/imgs/img3.png' alt='' className='img' />
                        <h4>free template </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p></div>
                </div>
            </div>
        </Section2Wrapper>
    );
}

export default Section2
