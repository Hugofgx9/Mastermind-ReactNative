import React, { useState, useRef } from 'react';
import Round from '@components/Round';
import { StyleSheet, TouchableOpacity, View, Animated, PanResponder, Text } from 'react-native';

const Result = (props) => {
  const {color1, color2, color3, color4} = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[ styles.round, {backgroundColor : color1} ]}/>
        <View style={[ styles.round, {backgroundColor : color2} ]}/>        
      </View>
      <View style={styles.row}>
        <View style={[ styles.round, {backgroundColor : color3} ]}/>
        <View style={[ styles.round, {backgroundColor : color4} ]}/>        
      </View>

    </View>
  )
}

export default Result;


const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 15,
  },

	round: {
		backgroundColor: 'black',
    height: 12,
    width: 12,
    margin: 2,
    borderRadius: 100,
	},

  row: {
    //flex: 1,
    flexDirection: 'row',
  }
})