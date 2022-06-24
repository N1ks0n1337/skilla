import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    overflow: hidden;
    background: #000729;
    height: 63px;
    position: fixed;
    padding: 0px 16px;
    top: 0px;
    @media(max-width: 964px){
        height: 44px;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1492px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;

`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const LogoIcon = styled.img`
    width: 95px;
    height: 28px;
    @media(max-width: 1050px){
        width: 87px;
        height: 26px;
    }
`

export const LogoText = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000729;
    background: #00FF88;
    font-weight: 600;
    font-size: 16px;
    width: 173px;
    height: 30px;
    border-radius: 4px;
    margin-left: 8px;
    @media(max-width: 1050px){
        font-size: 14px;
        width: 154px;
        height: 26px;
    }
`

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    @media(max-width: 1500px){
        padding: 10px;
    }
    @media(max-width: 986px){
        background-color: #000729;
        position: fixed;
        top: 44px;
        left: ${({open}) => (open ? "0" : "-100%")};
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`

export const MenuItem = styled.li`
@media(max-width: 986px){
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-right: 52px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    transition: 0.5s all ease;
    &:hover{
        color: #e3dcdc;
    }
    @media(max-width: 1484px){
        padding-right: 40px;
    }
    @media(max-width: 1413px){
        padding-right: 30px;
        font-size: 14px;
    }
    @media(max-width: 1268px){
        padding-right: 10px;
    }
    @media(max-width: 1250px){
        font-size: 13px;
    }
    @media(max-width: 1055px){
        font-size: 12px;
    }
    @media(max-width: 960px){
        padding-right: 0px;
        width: 100%;
        font-size: 17px;
    }
`

export const MenuItemBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #303550;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    width: 175px;
    height: 40px;
    cursor: pointer;
    transition: 0.5s all ease;
    &:hover{
        background: #474e78;
    }
    @media(max-width: 1390px){
        font-size: 14px;
    }
    @media(max-width: 1250px){
        width: 135px;
        height: 40px;
    }
    @media(max-width: 1250px){
        font-size: 13px;
        width: 123px;
        height: 40px;
    }
    @media(max-width: 960px){
        width: 175px;
        height: 40px;
        font-size: 17px;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media(max-width: 986px){
        display: flex;
        align-items: center;
        cursor: pointer;

        svg{
            fill: #ABADBA;
            margin-right: 0.5rem;
            font-size: 2em;
        }
    }
`
