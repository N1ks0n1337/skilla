import React from 'react';
import BackgroundGreen from '../../components/bg/bg.elements';
import { TitleGreen, TitleLong } from '../../components/title/Title.elements';
import { Container, Wrapper } from './Business.elements';

const Business = () => {
    return (
        <Container>
            <BackgroundGreen>
                <Wrapper>
                    <TitleLong>
                        Повторите Успех <TitleGreen>250+ предпринемателей,</TitleGreen> <br />начавщих бизнес с нуля
                    </TitleLong>
                </Wrapper>
            </BackgroundGreen>
        </Container>
    );
};

export default Business;