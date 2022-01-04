import React , { useState } from 'react'

import styled from 'styled-components'





function Viewers() {

  const [disneyImgIsShowing, setDisneyImgIsShowing] = useState(true);
  const [pixarImgIsShowing, setPixarImgIsShowing] = useState(true);
  const [marvelImgIsShowing, setMarvelImgIsShowing] = useState(true);
  const [starwarsImgIsShowing, setStarwarsImgIsShowing] = useState(true);
  const [nationalImgIsShowing, setNationalImgIsShowing] = useState(true);

  const [disneyVideoIsPlaying, setDisneyVideoIsPlaying] = useState(false);
  const [pixarVideoIsPlaying, setPixarVideoIsPlaying] = useState(false);
  const [marvelVideoIsPlaying, setMarvelVideoIsPlaying] = useState(false);
  const [starwarsVideoIsPlaying, setStarwarsVideoIsPlaying] = useState(false);
  const [nationalVideoIsPlaying, setNationalVideoIsPlaying] = useState(false);

    return (
      <Container>
        <Wrap onMouseEnter={() => {setDisneyVideoIsPlaying(true); setDisneyImgIsShowing(false);}} onMouseLeave={() => {setDisneyImgIsShowing(true); setDisneyVideoIsPlaying(false);}}>
          <img src="images/viewers-disney.png" className= { disneyImgIsShowing ? 'display' : 'hide' } />
          <video src="/videos/disney.mp4" autoPlay muted loop className= { disneyVideoIsPlaying ? 'display' : 'hide'} ></video>
        </Wrap>
        <Wrap onMouseEnter={() => {setPixarVideoIsPlaying(true); setPixarImgIsShowing(false)}} onMouseLeave={() => {setPixarImgIsShowing(true); setPixarVideoIsPlaying(false);}}>
          <img src="images/viewers-pixar.png" className= {pixarImgIsShowing ? 'display' : 'hide'} />
          <video src="/videos/pixar.mp4" autoPlay muted loop className= { pixarVideoIsPlaying ? 'display' : 'hide'} ></video>
        </Wrap>
        <Wrap onMouseEnter= {() => {setMarvelVideoIsPlaying(true); setMarvelImgIsShowing(false)}} onMouseLeave={() => {setMarvelImgIsShowing(true); setMarvelVideoIsPlaying(false);}} >
          <img src="images/viewers-marvel.png" className= { marvelImgIsShowing ? 'display' : 'hide' } />
          <video src="/videos/marvel.mp4" autoPlay muted loop className= { marvelVideoIsPlaying ? 'display' : 'hide'} ></video>
        </Wrap>
        <Wrap onMouseEnter={() => {setStarwarsVideoIsPlaying(true); setStarwarsImgIsShowing(false)}} onMouseLeave={() => {setStarwarsImgIsShowing(true); setStarwarsVideoIsPlaying(false);}}>
          <img src="images/viewers-starwars.png" className={ starwarsImgIsShowing ? 'display' : 'hide'} />
          <video src="/videos/star-wars.mp4" autoPlay muted loop className= { starwarsVideoIsPlaying ? 'display' : 'hide'} ></video>
        </Wrap>
        <Wrap onMouseEnter={() => {setNationalVideoIsPlaying(true); setNationalImgIsShowing(false)}} onMouseLeave={() => {setNationalImgIsShowing(true); setNationalVideoIsPlaying(false);}}>
          <img src="images/viewers-national.png" className= {nationalImgIsShowing ? 'display' : 'hide'} />
          <video src="/videos/national-geographic.mp4" autoPlay muted loop className= { nationalVideoIsPlaying ? 'display' : 'hide'} ></video>
        </Wrap>
      </Container>
    );
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns : repeat(5, minmax(0, 1fr));
`
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 5%;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow: hidden;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img.display, video.display {
    display: inline-block; 
  }

  img.hide, video.hide{
    display: none;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`