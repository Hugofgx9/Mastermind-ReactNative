const checkCode = (codePlayer, codeToFind) => {
	//find GP
	let PosResult = checkPos(codePlayer);

	//find GC after remove GP
	let ColorsResult = checkColors(PosResult.badPosArray, PosResult.codeWhitoutGP);

	return {
		goodPos: PosResult.goodPosNb,
		goodColors: ColorsResult.goodColorNb
	};
	
	//check and return badPosArray, goodPosNb, codeWhitoutGoodPos
	function checkPos (array) {
		let codeToFindWhitoutGP = [...codeToFind]; //
		let badPos = [...array]
		let counter = 0;

		for (let i = 0; i < codeToFind.length; i++) {
			//check if [i] is the same in codeToFind and array
			if (codeToFind[i] == array[i]) {
				badPos[i] = null;
				codeToFindWhitoutGP[i] = null;
				counter++;
			}
		}
		return {
			badPosArray: badPos, //player array whitout the good positioned elements
			goodPosNb: counter, //number of good positioned elements
			codeWhitoutGP: codeToFindWhitoutGP //code array whithout good positioned elements
		};
	}

	// check and return badColorsArray, goodColorNB
	function checkColors (playerArray, code) {
		let badColors = [...playerArray];
		let codeToFindWhitoutGC = [...code];
		let counter = 0;


		for (let i = 0; i < playerArray.length; i++) {
			//if playerArray[i] == null -> is GP
			//if includes check code contain playerArray[i]
			if ( playerArray[i] !== null && codeToFindWhitoutGC.includes( playerArray[i]) ) {
				badColors[i] = null;
				codeToFindWhitoutGC[codeToFindWhitoutGC.indexOf(playerArray[i])] = null;
				counter ++;
			}
		}
		return {
			badColorsArray: badColors, //player array whithout good colors elements
			goodColorNb: counter //number of good colors elements
		};
	}
}

// input an array and return a random n length code, with array items, 
const createCode = (colors) => {
	let newCode = new Array();
	let length = 4;

	for (i = 0; i < length; i++ ) {
		let color = colors[getRandomInt(colors.length)];
		newCode.push(color);
	}

	return newCode;

	//return int between 0 and max
	function getRandomInt (max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}
}

export { checkCode, createCode};