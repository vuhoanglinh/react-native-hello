import React from 'react';
import styled from 'styled-components';

const Categories = props => <Name>{props.name}</Name>;

export default Categories;

const Name = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_MASSIVE};
  font-weight: ${props => props.theme.FONT_WEIGHT_BOLD};
  margin-left: 15;
  color: ${props => props.theme.PRIMARY_COLOR_LIGHT};
`;
