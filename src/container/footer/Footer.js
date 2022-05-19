import React from 'react'
import styled from "styled-components"




const Section2Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
padding:77px 0 80px 0;
.btn{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 4px;
  color: #676770;
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  margin: 0 0 0 200px;
  .pop{


    h4 {
        font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 4px;
    color: #676770;
    }
    p{
        font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #6A859C;
    }
    h6{
        font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px;
color: #668CAD;
    }
  }
  .p{
    color: #6A859C;
  }
 
}
`;

const Footer = () => {
    return (
        <Section2Wrapper>
            <div className='btn'>
                <div className='pop'>
                    <h4>ABOUT VELOCITY</h4>
                    <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>
                <div className='pop'>
                    <h4>USEFUL LINKS</h4>
                    <p>Phasellus gravida semper nisi <br/> Suspendisse nisl elit <br/>Dellentesque habitant morbi <br/> Etiam sollicitudin ipsum
                    </p>
                </div>
                <div className='pop'>
                    <h4>SOCIAL</h4>
                    <p className=''> Twitter <br/>  Facebook <br/> Pinterest <br/> Google <br/> Webflow </p>
                </div>
            </div>
        </Section2Wrapper>
    )
}

export default Footer 
