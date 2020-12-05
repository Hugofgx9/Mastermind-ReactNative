import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const Converter = () => {

	const [inputValue, setInputValue] = useState(' ');

	const convertToDollard = (nb) => {
		return (nb * 1.21).toFixed(2)
	}
	return (
		<View style={styles.container}>
			
			<Text> Convert Euro to Dollard </Text>

			<TextInput 
				style={styles.input} 
				placeholder="type a value"
				onChangeText={(text) => setInputValue(text)}
				defaultValue={`${inputValue}`}
			/>

			<Text> { `${convertToDollard(inputValue)} $$`} </Text>

		</View>
	)
}

export default Converter;

const styles = StyleSheet.create({
	container: {
	},
	input: {
		minWidth: 100,
		borderColor: 'black', 
		borderBottomWidth: 1,
		fontSize: 25,		
	},

})