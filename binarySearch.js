function binarySearch (array, value) {
	let start = 0;
	let stop = array.length -1;
	let middle = Math.floor((start + stop) /2);

	while (array[middle] !== value && start < stop) {
    if(value < list[middle]){
    	stop = middle - 1;
    } else {
    	start = middle + 1
    }
    middle = Math.floor((start + stop) / 2);
	}
	return (list[middle] !== value) ? -1 : middle
}