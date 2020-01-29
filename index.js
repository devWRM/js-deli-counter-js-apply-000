var katzDeliLine = [];

//function takeANumber adds names to the katzDeliLine list

function takeANumber(inLine, nextInLine) {
	
	
	inLine.push(nextInLine);

	var welcome = "Welcome, " + nextInLine + ". You are number " + inLine.length + " in line.";
	
	console.log(welcome);
	return welcome;
}

