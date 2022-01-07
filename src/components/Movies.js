import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

function Movies({ movieProp, allMovieProp }) {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movieProp.map((element) => (
          <Wrap key={element.id}>
            <Link to={`/detail/${element.id}`}>
              <img src={element.src} />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
}

export default Movies


const Container = styled.div`

`
const Content = styled.div`
    display : grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    
    //mobile view
    @media screen and (max-width: 768px){
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgb(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
const Contain = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;