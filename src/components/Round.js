import React, { useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Animated, PanResponder, Text } from 'react-native';

const Round = (props) => {
  const {color} = props;
  const [bgColor, setBgColor] = useState(color);

  return (
    <View style={[styles.round, {backgroundColor: color } ]} />
  )
}

export default Round;


const styles = StyleSheet.create({
	round: {
		backgroundColor: 'red',
    alignItems: 'center',
    height: 35,
    width: 35,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 100,
	},
})