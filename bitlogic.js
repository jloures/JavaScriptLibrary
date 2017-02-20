function getBit(number, i) {
	return (number & (1 << i)) === 1;
}

//Set bit - change the ith bit of number to 1
function setBit(number,i) {
	return number | (1 << i);
}

//Clear bit - change the ith bit of number to 0;
function clearBit(number,i) {
	return number & ~(1 << i);
} 
function clearBitMSBthroughI(number,i) {
	let mask = (-1 + 1 << i);
	return mask & number;
}
function clearBitsIthrough0(number,i) {
	let mask = (-1 << (i+1));
	return number & mask;
}

//Update Bit
function updateBit(num, i, bitIs1) {
	let updateValue = bitIs1 ? 1 : 0;
	let mask = ~(1 << i)
	return (num & mask) | (updateValue << i);
}