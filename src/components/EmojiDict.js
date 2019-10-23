import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components';

class EmojiDict extends Component {
	state = {
		'😃': '😃 Smiley',
		'🚀': '🚀 Rocket',
		'⚛️': '⚛️ Atom Symbol'
	};

	render() {
		return (
			<Container>
				<FlatList
					contentContainerStyle={styles.container}
					data={[
						{ key: '😃', value: '😃 Smiley' },
						{ key: '🚀', value: '🚀 Rocket' },
						{ key: '⚛️', value: '⚛️ Atom Symbol' }
					]}
					renderItem={({ item }) => <Text>{item.value}</Text>}
				/>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const Container = styled.View`
  flex: 1;
	justify-content: center;
  align-items: center;
`;

const List = styled.FlatList`
	flex: 1;
  justify-content: center;
  align-items: center;
`;

export default EmojiDict;