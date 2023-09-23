import React from "react";
import {
    WelcomeCardContainer,
    TextContent,
    TextContentHeaderTeam,
    TextContentDescriptionProject,
    ImageContent,
    TextContentHeaderButton,
    TextContentHeaderButtonText,
    TextContentHeaderButtonDate,
    TextContentButton
} from "./styles";
import WelcomeCardImage from '../../../../assets/WelcomeCardImage.png';
const WelcomeCard = () => {
    return (
        <WelcomeCardContainer>
            <TextContent>
                <TextContentHeaderTeam>Добро пожаловать на дашборд от Отцов-Фронтенда</TextContentHeaderTeam>
                <TextContentDescriptionProject>Сдесь отображена статистика по всему колледжу</TextContentDescriptionProject>
                <TextContentHeaderButton>
                    <TextContentHeaderButtonText>Вперед!</TextContentHeaderButtonText>
                    <TextContentHeaderButtonDate>Сентябрь 2023</TextContentHeaderButtonDate>
                </TextContentHeaderButton>
                <TextContentButton>Подробнее</TextContentButton>
            </TextContent>
            <ImageContent src={WelcomeCardImage} alt={'Test'}/>
        </WelcomeCardContainer>
    );
};

export default WelcomeCard;
