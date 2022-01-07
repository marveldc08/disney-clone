//begin with rfce .
import React, { useState, useEffect } from 'react'
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import { useNavigate, Navigate , Link} from 'react-router-dom';

import styled from "styled-components";



import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut
} from "../features/user/userSlice";

import { useDispatch, useSelector} from 'react-redux';

 
function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const navigate = useNavigate()
    
   const signIn = () => {
     signInWithPopup(auth, provider)
       .then((result) => {
         // This gives you a Google Access Token. You can use it to access the Google API.

         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
         // The signed-in user info.
         const user = result.user;

         dispatch(
           setUserLogin({
             name: user.displayName,
             email: user.email,
             photo: user.photoURL,
           })
         );
         // ...
         navigate("/home");
       })
       .catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         // The email of the user's account used.
         const email = error.email;
         // The AuthCredential type that was used.
         const credential = GoogleAuthProvider.credentialFromError(error);
         // ...
       });
   };

    useEffect(() => {
      onAuthStateChanged(auth, user => {
        if(user){
           dispatch(
             setUserLogin({
               name: user.displayName,
               email: user.email,
               photo: user.photoURL,
             })
           );
           // ...
           navigate("/home");
        }
      })
      
    }, [])

   const logOut = () => {
      auth.signOut()
      .then(() => {
        dispatch(setSignOut({ name: "", email: "", photo: ""}));
        navigate('/');
      })
    }

    const [burgernav , setBurgernav] = useState(false);

    return (
      <Nav>
        {userName ? (
          <>
            <LeftMenu>
              <span>
                <i
                  className="fa fa-bars"
                  aria-hidden="true"
                  onClick={() => setBurgernav(true)}
                ></i>
              </span>
            </LeftMenu>

            <BurgerNav show={burgernav}>
              <CloseWrapper>
                <span>
                  <i
                    className="fa fa-times"
                    aria-hidden="true"
                    onClick={() => setBurgernav(false)}
                  ></i>
                </span>
              </CloseWrapper>

              <li>
                <Link to={`/home`} onClick={() => setBurgernav(false)}>
                  <img src="/images/home-icon.svg" />
                  <span>HOME</span>
                </Link>
              </li>
              <li>
                <a>
                  <img src="/images/search-icon.svg" />
                  <span>SEARCH</span>
                </a>
              </li>
              <li>
                <a>
                  <img src="/images/watchlist-icon.svg" />
                  <span>WATCHLIST</span>
                </a>
              </li>
              <li>
                <a>
                  <img src="/images/original-icon.svg" />
                  <span>ORIGINALS</span>
                </a>
              </li>
              <li>
                <a>
                  <img src="/images/movie-icon.svg" />
                  <span>MOVIES</span>
                </a>
              </li>
              <li>
                <a>
                  <img src="/images/series-icon.svg" />
                  <span>SERIES</span>
                </a>
              </li>
            </BurgerNav>
          </>
        ) : (
          <></>
        )}

        <Logo src="/images/logo.svg" />

        {!userName ? (
          <LoginContainer>
            <Login onClick={signIn}>Login</Login>
          </LoginContainer>
        ) : (
          <>
            <NavMenu>
              <Link to={`/home`}>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
              </Link>
              <a>
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
              </a>
              <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
              </a>
              <a>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
              </a>
              <a>
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
              </a>
            </NavMenu>

            <UserImg onClick={logOut} src={userPhoto} />
          </>
        )}
      </Nav>
    );
}

export default Header

const Nav = styled.nav`
  height : 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 36px;
  overflow: hidden;
`
const Logo = styled.img`
 width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 80px;
  a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: #f9f9f9;
        text-decoration : none;

        img {
          height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            //creating a div below span for animation.
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
  }
  @media screen and (max-width: 768px){
      display: none;
  }
`
const UserImg = styled.img`
  width: 48px;
  height:48px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 5px;
  display: flex;
  align-items: center;

  @media screen and (max-width : 480px){
    width: 31px;
    height: 31px;
  }
`
const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover{
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;


    }
`
const LoginContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 18px 0;
    align-items: center;
`


const LeftMenu = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;
  
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
  span i {
    color: #f9f9f9;
  }

  @media screen and (max-width: 768px){
    display: flex;
  }
 
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: #090b13;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    a {
    
      color: #f9f9f9;

      img {
        height: 20px;
      }
      span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
      }

      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
