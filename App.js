import React from 'react';
import { ScrollView } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
// import Button from './src/components/Button';
import Categories from './src/components/Categories';
import Card from './src/components/Card';
import items from './src/mockup-data';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
        <Container>
          <Titlebar>
            <Avatar source={require('./assets/icons8-gradient-line-96.png')}/>
            <Title>Welcome back,</Title>
            <Name>Aman</Name>
          </Titlebar>

          <HorizontalScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {items.map(({id , text}) => (
              <Categories name={text} key={id} />
            ))}
          </HorizontalScrollView>

          <Subtitle>Vector Styles</Subtitle>
          <ItemsLayout>
            {items.map(({id , text, caption, image, uri, color}) => (
              <Card title={text} caption={caption} image={image} uri={uri} color={color} key={id} />
            ))}
          </ItemsLayout>
        </Container>
      </ScrollView>
    </ThemeProvider>  
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const Titlebar = styled.View`
  width: 100%;
  margin-top: 50;
  padding-left: 80;
`;

const Avatar = styled.Image`
  width: 50;
  height: 50;
  background: transparent;
  border-radius: 25;
  margin-left: 20;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_EXTRA_LARGE};
  font-weight: ${props => props.theme.FONT_WEIGHT_MEDIUM};
  color: ${props => props.theme.PRIMARY_COLOR_LIGHT};
`;

const Name = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_EXTRA_LARGE};
  color: ${props => props.theme.PRIMARY_COLOR};
  font-weight: ${props => props.theme.FONT_WEIGHT_BOLD};
`;

const Subtitle = styled.Text`
	font-size: ${props => props.theme.FONT_SIZE_EXTRA_LARGE};
	color: ${props => props.theme.PRIMARY_COLOR};
	font-weight: ${props => props.theme.FONT_WEIGHT_MEDIUM};
	margin-top: 10;
	margin-left: 25;
  text-transform: uppercase;
`;

const ItemsLayout = styled.View`
	flex-direction: column;
	flex: 1;
`;

const HorizontalScrollView = styled(ScrollView)`
  padding-top: 15;
  padding-bottom: 15;
  padding-left: 12;
  flex-direction: row;
`;