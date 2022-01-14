import React, {useEffect, useState} from 'react'

import styled from 'styled-components'
import { useParams } from "react-router-dom"
import $ from 'jquery'

function Watching() {
    const { id } = useParams();
    const [trailerSrc, setTrailerSrc] = useState('');

    useEffect(() => {
       $.ajax({
           url: "https://disney-clone-5a8e0-default-rtdb.firebaseio.com/Movies.json",
           type: "GET",
           dataType: "JSON",
           success: (data) => {
               for(let x = 0; x < data.length; x++){
                    if(id == data[x].id){
                        setTrailerSrc(data[x].trailer);
                    }
               }
           }
       })
    }, [])
    
    return (
        <Container>
            <Video src={trailerSrc} controls  />
        </Container>
    )
}

export default Watching

const Container = styled.div`
  height: calc(100vh - 70px);
  @media screen and (max-width: 480px) {
    padding: 0 calc(3.5vh + 5px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Video = styled.video`
    width: 100%;
    height:100%;
  @media screen and (max-width: 480px) {
    position: absolute;
    width: 90vw;
    height: 70vh;
  }
`