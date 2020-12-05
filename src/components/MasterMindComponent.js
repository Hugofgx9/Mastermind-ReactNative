import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInputn, TouchableOpacity } from 'react-native';
import Round from '@components/Round';
import Result from '@components/ResultComponent';
import { checkCode, createCode } from '@src/utils';
import { test } from '@src/test/test';

//test();

//utils 
let button = 0;
let currentRow = 0;
let nbRows = 14;
let availableColors = ['orange', 'blue', 'green', 'purple'];
let basicColor = 'grey';
let codeToFind = createCode( availableColors );


//create a full grey board
const initBoard = ( nbRows ) => {
	let array = new Array();
	for (let i = 0; i < nbRows; i++) {
		array.push({
			decodingBoard : [basicColor, basicColor, basicColor, basicColor],
			resultBoard : [basicColor, basicColor, basicColor, basicColor],
		})
	}
	return array;
};

//COMPONENT
const MasterMindComponent = () => {

	const scrollView = useRef();
	const [boardColors, setBoardColors] = useState( initBoard( nbRows ) );
	const [canPlay, setCanPlay] = useState( true );

	const newGame = () => {
		codeToFind = createCode( availableColors );
		button = 0;
		currentRow = 0;
		setBoardColors( initBoard(nbRows) );
		scrollView.current.scrollToEnd();
		setCanPlay( true );

	}

	useEffect(() => {
		scrollView.current.scrollToEnd();
	}, [] )

	//call each time that player press a color button
	const changeNextButton = (newColor) => {
		//change button color
		let newArr = [...boardColors];
		newArr[currentRow].decodingBoard[button] = newColor;
		setBoardColors(newArr);
		button ++;

		//verifie les couleurs lorsque l'on arrive à la fin d'une ligne
		if (button%4 == 0) {
			let checkResult = checkCode(boardColors[currentRow].decodingBoard, codeToFind);// checkResult = {goodPos: NB, goodColors: NB}


			//fill the result Board
			let goodPosRemaining = checkResult.goodPos;
			let goodColorsRemaining = checkResult.goodColors;

			for (let i = 0; i < 4; i++ ) {

				if ( goodPosRemaining != 0 ) {
					newArr[currentRow].resultBoard[i] = "red";
					goodPosRemaining --;

				} else if ( goodColorsRemaining != 0 ) {
					newArr[currentRow].resultBoard[i] = "white";
					goodColorsRemaining --;
				}
			}

			setBoardColors(newArr);

			//if win
			if (checkResult.goodPos == 4) {
				alert('You win!');
				setCanPlay(false);
			}

			//if loose
			else if (currentRow == (nbRows - 1)  ) {
				alert('You loose!');
				setCanPlay(false);
			}

			//continue
			else {
				currentRow++;
				button = 0;
			}
		}
	}	


	return (
		<View style={styles.container} >	

			<View style={styles.board} >	
				<ScrollView ref={scrollView} >
					{ [...boardColors].reverse().map((row, index) => {
						return (

							<View style={styles.row} key={index}>

								{ row.decodingBoard.map((color, index) => {
									return(
										<Round color={color} key={index}/>
									)
								})}

								<Result 
									color1={row.resultBoard[0]}
									color2={row.resultBoard[1]}
									color3={row.resultBoard[2]}
									color4={row.resultBoard[3]}
								/>

							</View>
						)
					})}
				</ScrollView>
			</View>

			<View style={styles.row}>
				{
					availableColors.map( (color) => {
						return(
							<TouchableOpacity key={color} onPress={ () => {
								if(canPlay) changeNextButton(color); 
							}}>
								<Round color={color}/>
							</TouchableOpacity>
						)
					})
				}
			</View>

			<Button title='New Game' onPress={ () => newGame() }/>
		</View>
	)
}

export default MasterMindComponent;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'stretch',
		marginBottom: 15,
	},
	board: {
		backgroundColor: '#6b6b6b',
		height: 300,
		flex: 1,
	},
	row: {
		flexDirection: 'row',
		height: 70,
		justifyContent: 'center',
		alignItems: 'center'
	}
})