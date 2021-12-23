import React from 'react'

import styled from 'styled-components'

function Detail() {
    return (
      <Container>
        <Background>
          <img src="images/simpsons.jpg" />
        </Background>
        <ImageTitle>
          <img src="images/clipart.png" />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="images/play-icon-black.png" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="images/play-icon-white.png" />
            <span>Trailer</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="images/group-icon.png" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>2018 + 7m + Family, Fantasy, Kids, Animation.</SubTitle>
        <Description>
          The series is a satirical depiction of American life, epitomized by
          the Simpson family, which consists of Homer, Marge, Bart, Lisa, and
          Maggie. The show is set in the fictional town of Springfield and
          parodies American culture and society, television, and the human
          condition.
        </Description>
      </Container>
    );
}

export default Detail

const Container = styled.div`
    min-hight : cal(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    
`
const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.8;
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
   

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
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

    &:hover{
        background: rgb(198, 198, 198);
    }


`
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
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`