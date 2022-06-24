import React from 'react';
import { Container, Wrapper, ContentBlock, BtnIcon } from './Uber.elements';
import {Title, TitleGreen} from '../../components/title/Title.elements';
import Button from '../../components/button/Button.elements';
import SubTitle from '../../components/subtitle/Subtitle.elements';
import Vector from '../../image/icon/Vector.svg'

const Uber = () => {
    return (
        <Container>
            <Wrapper>
            <ContentBlock>
            <Title>
            Принцип Uber: соединяйте <TitleGreen>заказчиков и исполнителей</TitleGreen><br/> в мобильном приложении
            </Title>
            <SubTitle>Получайте 50% комиссию с каждого заказа 24 часа в сутки, даже, когда спите.</SubTitle>
            </ContentBlock>
            <Button>Получить подробности <BtnIcon src={Vector}/></Button>
            </Wrapper>
        </Container>
    );
};

export default Uber;