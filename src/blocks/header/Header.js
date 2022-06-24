import React, {useState} from 'react';
import logo from '../../image/icon/logo.svg';
import {Container, LogoText, Wrapper, LogoContainer, Menu, MenuItemBtn,MenuItem, MenuItemLink, LogoIcon, MobileIcon} from './Header.elements';
import {FaBars, FaTimes} from 'react-icons/fa';

const Header = props => {
    const [showMobileMenu, setshowMobileMenu] = useState(false);

    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    <LogoIcon src={logo}/>
                    <LogoText>Предпринимателям</LogoText>
                </LogoContainer>

                <MobileIcon onClick={() => setshowMobileMenu(!showMobileMenu)}>
                    {showMobileMenu ? <FaTimes/> : <FaBars/>}
                </MobileIcon>

                <Menu open={showMobileMenu}>
                    <MenuItem><MenuItemLink>Кейсы предпринимателей</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink>Обучение</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink>Бизнес-Герои</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink>Ворос-ответ</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink>О компании</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemLink>Франшиза</MenuItemLink></MenuItem>
                    <MenuItem><MenuItemBtn>Стать партнером</MenuItemBtn></MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    );
};


export default Header;