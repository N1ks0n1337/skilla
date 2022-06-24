import styled from "styled-components"
import Uber from '../../image/uber.png'


export const Container = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: #000729;
    background-image: url('${Uber}');
    background-repeat: no-repeat;
    background-position: right bottom;
    @media(max-width: 850px){
        background-position: 0px 200px;
        background-size: contain;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: auto;
    padding: 16px;
    padding-bottom: 134px;
`

export const ContentBlock = styled.div`
margin-bottom: 128px;
padding-top: 413px;
@media(max-width: 1281px){
    padding-top: 223px;
}
@media(max-width: 850px){
    padding-top: 40px;

}
`

export const BtnIcon = styled.img`
    margin-left: 24px;
`