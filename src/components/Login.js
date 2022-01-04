import React  from 'react'
import styled from 'styled-components'

function Login() {
    return (
      <Container>
        <CTA>
          <CTALogoOne src="images/cta-logo-one.svg" />
          <SignUp>Get All Here</SignUp>
          <Description>
            The holiday event you can't miss! get all episodes of Hawkeye,
            streaming now on Disney+. Also Get Primeier access on Raya and the
            lost dragon. All the Movies in on spot.
          </Description>
          <CTALogoTwo src="images/cta-logo-two.png" />
        </CTA>
      </Container>
    );
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;


    &:before{
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0.7;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogoOne =styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom:8px;

    &:hover{
        background: #0483ee;
        text-decoration: none;
        color:  #f9f9f9;
    }
`
const Description = styled.div`
    font-size: 13px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`