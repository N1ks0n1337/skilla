import styled from "styled-components";
import Smartphone from '../../image/smartphone.png'


export const Container = styled.div`
    width: 100%;
    overflow: hidden;
    background-image: url('${Smartphone}');
    background-repeat: no-repeat;
    background-position: left;
    @media(max-width: 1402px){
        background-size: 500px;
        background-position: 0% 100%;
    }    
    @media(max-width: 850px){
        background-size: contain;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: auto;
    padding: 16px;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 210px;
    @media(max-width: 1402px){
        padding-top: 0px;
    }
    @media(max-width: 850px){
        margin-top: 63px;
    }
`

export const StoreItems = styled.ul`
display: flex;
margin-top: 136px;
padding-bottom: 209px;
flex-wrap: wrap;
`

export const StoreItem = styled.li`
    margin-right: 33px;
    cursor: pointer;
`
export const StoreItemLink = styled.a`

`
export const StoreItemIcon = styled.img`
`