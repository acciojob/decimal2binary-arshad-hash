function decimalToBinary(num) {
  let binaryNum = new Array(32);

    // Counter for binary array
    let i = 0;

    // Check if the input is not a negative number
    if (num < 0) {
        throw new Error("Input must be a non-negative integer");
    }

    // Handle the special case when num is 0
    if (num === 0) {
        return "0";
    }

    // Convert decimal to binary
    while (num > 0) {
        // Storing remainder in the binary array
        binaryNum[i] = num % 2;
        num = Math.floor(num / 2);
        i++;
    }

    // Convert the binary array to a string
    const binaryString = binaryNum.slice(0, i).reverse().join("");

    return binaryString;
		
   
	
	
  
}

window.decimalToBinary = decimalToBinary;
