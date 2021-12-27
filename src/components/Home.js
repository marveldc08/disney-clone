import React, {useState, useEffect }from 'react'
import $ from 'jquery'

import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
     const [movies, setMovies] = useState ([])
    useEffect(() => {
        $.ajax({
          url: "https://disney-clone-5a8e0-default-rtdb.firebaseio.com/Movies.json",
          dataType: 'JSON',
          type: 'GET',
          success: (data) => {
            setMovies(data)
          }
        })
    }, [])
    console.log(movies)
    return (
      <Container>
          <ImgSlider />
          <Viewers />
          <Movies movieProp={movies} />
      </Container>
    );
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
    &:before{
        background: url(/images/home-background.png) center center /cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`
