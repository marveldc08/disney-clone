import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { useParams } from "react-router-dom"
import $ from 'jquery'

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([])
    const [src, setSrc] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    useEffect(() => {
      //grab the movie info from database
      $.ajax({
        url: "https://disney-clone-5a8e0-default-rtdb.firebaseio.com/Movies.json",
        dataType: "JSON",
        type: "GET",
        success: (data) => {
          for (let x = 0; x < data.length; x++) {
            //save the movie data
            if (id == data[x].id) {
              setSrc(data[x].src);
              setTitle(data[x].title);
              setDescription(data[x].description);
            } else {
              //redirect to home page
            }
          }
        },
      });
    
    }, [])

    return (
      <Container>
        <Background>
          <img src={src} />
        </Background>
        <ImageTitle>
          <img src="/images/viewers-disney.png" />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>{title}</SubTitle>
        <Description>
          {description}
        </Description>
      </Container>
    );
}

export default Detail

const Container = styled.div`
    min-height : cal(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    
`
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.4;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 17px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 480px) {
    height: 20vh;
    margin-top: 10px;
  }
  /**ipad portriate and landscape */
  @media screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    height:25vh;
    margin-top: 21px;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  
 
  @media screen and (max-width: 768px){
    flex-wrap: wrap;
  }
`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
    height: 54px;
    margin-right: 7px;
    margin-bottom: 7px;
  }
  /**ipad portriate and landscape */
  @media screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 56px;
    margin-right: 10px;
  }
`;
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
    align-self: center;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  &:focus {
    outline: none;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-weight: 500;
  font-size: 35px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    line-height: 1.3;
  }

  /*ipad Portrait and Landscape */
  @media only screen 
    and (min-device-width: 1024px) 
    and (max-device-width: 1366px)
    and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 31px;
      line-height: 1.5;
  }

  @media screen and (min-width : 190px) {
    padding-bottom: 20px;
  }
`