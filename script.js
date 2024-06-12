const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	const isKeyPresent = sampleObject.hasOwnProperty(key);
	return isKeyPresent;
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
