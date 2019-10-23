import React from 'react';
import styled from 'styled-components';

const Card = props => (
  <Container color={props.color}>
    <Cover>
      <Image source={props.image} resizeMode={'cover'}/>
      {/* <Image source={{uri: props.image}} resizeMode={'cover'}/> */}
    </Cover>
    <Content>
      <Title>{props.title}</Title>
      <Caption>{props.caption}</Caption>
    </Content>
  </Container>
);

export default Card;

const Container = styled.View`
  background: ${props => props.color ? props.theme.color[props.color].PRIMARY_COLOR : props.theme.PRIMARY_COLOR};
  height: 504;
  border-radius: 14;
  margin-top: 20;
  margin-right: 18;
  margin-bottom: 18;
  margin-left: 18;
  overflow: hidden;
`;

const Cover = styled.View`
  flex: 1;
  flex-direction: column;
  min-height: 300;
  border-top-left-radius: 14;
  border-top-right-radius: 14;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  padding-left: 30;
  padding-right: 30;
  padding-bottom: 40;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 96;
`;

// #3c4560
const Title = styled.Text`
  color: ${props => props.theme.PRIMARY_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_MASSIVE};
  font-weight: 600;
`;
// #b8b3c3
const Caption = styled.Text`
  color: ${props => props.theme.PRIMARY_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_LARGE};
  font-weight: 600;
  margin-top: 4;
`;