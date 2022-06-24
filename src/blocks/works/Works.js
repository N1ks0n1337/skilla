import React from 'react';
import {Container, Wrapper, Content, StoreItems, StoreItem, StoreItemLink, StoreItemIcon} from './Works.elements'
import BackgroundGreen from '../../components/bg/bg.elements'
import {Title, TitleGreen} from '../../components/title/Title.elements'
import SubTitle from '../../components/subtitle/Subtitle.elements'
import AppGalleryImg from '../../image/icon/appgallery.svg';
import ImgAppstore from '../../image/icon/appstore.svg';
import GooglePlayImg from '../../image/icon/googleplay.svg';
import NashImg from '../../image/icon/nash.svg';



const Works = () => {
    return (
        <BackgroundGreen>
        <Container>
            <Wrapper>
                <Content>
                    <Title>
                    <TitleGreen>75 000+</TitleGreen> исполнителей установили приложение Skilla Работа
                    </Title>
                    <SubTitle>Исполнители выполняют заказы и получают оплату через приложение, а вы — комиссию</SubTitle>
                    <StoreItems>
                        <StoreItem><StoreItemLink><StoreItemIcon src={GooglePlayImg}/></StoreItemLink></StoreItem>
                        <StoreItem><StoreItemLink><StoreItemIcon src={ImgAppstore}/></StoreItemLink></StoreItem>
                        <StoreItem><StoreItemLink><StoreItemIcon src={AppGalleryImg}/></StoreItemLink></StoreItem>
                        <StoreItem><StoreItemLink><StoreItemIcon src={NashImg}/></StoreItemLink></StoreItem>
                    </StoreItems>
                </Content>
                </Wrapper>        
        </Container>
        </BackgroundGreen>
    );
};

export default Works;