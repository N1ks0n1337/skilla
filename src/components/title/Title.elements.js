import styled from "styled-components";

export const Title = styled.h2`
    font-weight: 800;
    font-size: 46px;
    max-width: 688px;
    width: 100%;
    margin-bottom: 24px;
    @media(max-width: 858px){
        font-size: 35px;
    }
    @media(max-width: 658px){
        font-size: 33px;
    }
    @media(max-width: 600px){
        font-size: 26px;
    }
`

export const TitleGreen = styled.strong`
    color: #00FF88;
`

export const TitleLong = styled.h2`
    font-weight: 800;
    font-size: 46px;
    margin-bottom: 24px;
    @media(max-width: 858px){
        font-size: 35px;
    }
    @media(max-width: 658px){
        font-size: 33px;
    }
    @media(max-width: 600px){
        font-size: 26px;
    }
`