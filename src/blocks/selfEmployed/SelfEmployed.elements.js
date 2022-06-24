import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 33px;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    margin: auto;
    padding: 16px;
`

export const TopBlock = styled.div`
    padding-top: 29px;
    display: flex;
    flex-direction: column;
    @media(max-width: 964px){
        display: none;
    }
`

export const TopBlockTop = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TopBlockBottom = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 601px;
`

export const ImgContainer = styled.div`
    width: 95px;
`

export const LinksContainer = styled.div`
    display: flex;
    justify-self: flex-end;
    background: rgba(0, 7, 41, 0.5);
    border-radius: 4px;
    margin-left: 24px;
`

export const Link = styled.a`
    text-decoration: none;
    color: #E3E4E8;
    padding: 9.5px 20px;
    font-weight: 500;
    font-size: 16px;
`

export const LinkActive = styled.a`
    background: #00FF88;
    border-radius: 4px;
    padding: 9.5px 20px;
    text-decoration: none;
    color: #0F1324;
    font-weight: 600;
    font-size: 16px;
`

export const EnterButton = styled.a`
    background: rgba(0, 7, 41, 0.5);
    border-radius: 4px;
    padding: 9.5px 20px;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
`

export const UnderLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: #E3E4E8;
    font-weight: 500;
    font-size: 18px;
    @media (max-width:1200px){
        font-size: 14px;
    }
`
export const MainBlock = styled.div`
    padding-top: 88px;
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
`

export const TitleBlock = styled.h1`
    max-width: 807px;
    font-weight: 800;
    font-size: 54px;
    line-height: 110%;
    @media(max-width: 817px){
        font-size: 50px;
    }
    @media(max-width: 650px){
        font-size: 38px;
    }
`

export const FormBlock = styled.div`
    max-width: 625px;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 10px;

    background: rgba(0, 7, 41, 0.5);
    border-radius: 12px;
    @media(max-width: 964px){
        display: none;
    }
`
export const BtnIcon = styled.img`
    margin-left: 24px;
`

export const FormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
`
export const FormElement = styled.div`
    display: flex;
`

export const RadioBlock = styled.div`
    margin-top: 17px;
    display: flex;
    gap: 8px;
    &:not(:first-child){
        margin-left: 20px;
    }
`

export const FormInput = styled.input`
    width: 365px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13px;
    gap: 12px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px 0px 0px 4px;
    padding: 12.5px 13px;
    &::placeholder{
        color: white;
        font-weight: 500;
        font-size: 18px;
    }
`
export const RadioLabel = styled.label`
    display: inline-block;
	cursor: pointer;
	position: relative;
	padding-left: 25px;
	margin-right: 0;
	line-height: 18px;
	user-select: none;
    &::before{
        content: "";
	    display: inline-block;
	    width: 16px;
        height: 16px;
        border: 1px solid rgba(199, 201, 209, 0.3);
        border-radius: 50%;
	    position: absolute;
	    left: 0;
	    bottom: 1px;
    }
`
export const RadioInput = styled.input`
    display: none;
    &:checked + ${RadioLabel}{
        &::before{
            border: 1px solid #00FF88;
        }
        &::after{
            content: "";
            display: inline-block;
            position: absolute;
            width: 6px;
            height: 6px;
            left: 5px;
            top: 6px;
            border-radius: 50%;
            background: #00FF88;
            border: 1px solid #00FF88;
        }
    }
`

export const DeputeBlock = styled.div`
    max-width: 593px;
    width: 100%;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 56px;
    mix-blend-mode: normal;
    opacity: 0.5;
`