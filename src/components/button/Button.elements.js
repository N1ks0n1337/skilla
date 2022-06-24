import styled from "styled-components";

const Button = styled.button`
    background: #00FF88;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    padding: 12px 20px;
    font-size: 18px;
    transition: all 0.5s ease;
    &:hover{
        background: #00FF50;
    }
`
export default Button;