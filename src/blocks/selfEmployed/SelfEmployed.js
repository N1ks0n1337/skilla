import React from 'react';
import { Container, EnterButton, FormBlock, BtnIcon, FormContent, FormElement, FormInput, ImgContainer, Link, LinkActive, LinksContainer, LogoContainer, MainBlock, MainContent, TitleBlock, TopBlock, TopBlockBottom, TopBlockTop, UnderLink, Wrapper, RadioInput, RadioLabel, RadioBlock, DeputeBlock } from './SelfEmployed.elements';
import logo from '../../image/icon/logo.svg';
import BackgroundGreen from '../../components/bg/bg.elements';
import SubTitle from '../../components/subtitle/Subtitle.elements';
import Button from '../../components/button/Button.elements';
import Vector from '../../image/icon/Vector.svg'


const SelfEmployed = () => {
    return (
        <Container>
            <BackgroundGreen>
                <Wrapper>
                    <TopBlock>
                        <TopBlockTop>
                            <LogoContainer>
                                <ImgContainer>
                                    <img src={logo} alt="" />
                                </ImgContainer>
                                <LinksContainer>
                                    <Link href="/">Заказчикам</Link>
                                    <LinkActive href="/">Предпринимателям</LinkActive>
                                    <Link href="/">Исполнителям</Link>
                                </LinksContainer>
                            </LogoContainer>
                            <EnterButton>
                                Вход в Skilla IS
                            </EnterButton>
                        </TopBlockTop>
                        <TopBlockBottom>
                            <UnderLink>Главная</UnderLink>
                            <UnderLink>Кейсы предпринимателей</UnderLink>
                            <UnderLink>Обучение</UnderLink>
                            <UnderLink>Бизнес-Герои</UnderLink>
                            <UnderLink>Ворос-ответ</UnderLink>
                            <UnderLink>О компании</UnderLink>
                            <UnderLink>Франшиза</UnderLink>
                            <UnderLink>Стать партнером</UnderLink>
                        </TopBlockBottom>
                    </TopBlock>
                    <MainBlock>
                        <MainContent>
                            <TitleBlock>
                                Откройте офис для самозанятых с прибылью до 15 млн в год
                            </TitleBlock>
                            <SubTitle>
                                При поддержке национального проекта России. Присоединиться может каждый.
                            </SubTitle>
                        </MainContent>
                        <FormBlock>
                            <FormContent>
                                <FormElement>
                                    <FormInput placeholder='+7 (___) ___-__-__'></FormInput>
                                    <Button>Узнать больше <BtnIcon src={Vector}/></Button>
                                </FormElement>
                                <FormElement>
                                    <RadioBlock>
                                        <RadioInput id="radio-1" type="radio" name="radio"></RadioInput>
                                        <RadioLabel for="radio-1">Telegram</RadioLabel>
                                    </RadioBlock>
                                    <RadioBlock>
                                        <RadioInput id="radio-2" type="radio" name="radio"></RadioInput>
                                        <RadioLabel for="radio-2">WhatsApp</RadioLabel>
                                    </RadioBlock>
                                    <RadioBlock>
                                        <RadioInput id="radio-3" type="radio" name="radio"></RadioInput>
                                        <RadioLabel for="radio-3">Звонок</RadioLabel>
                                    </RadioBlock>
                                </FormElement>
                            </FormContent>
                        </FormBlock>
                        <DeputeBlock>
                            
                        </DeputeBlock>
                    </MainBlock>
                </Wrapper>
            </BackgroundGreen>
        </Container>
    );
};

export default SelfEmployed;