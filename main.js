let n = 10;
let count = 0;
let number = 5;

function isPrime(n) {
	if (n < 2) return false;
	if (n < 4) return true;

	for (let i = 2; i < n; i++) {
		if (n % i == 0) return false;
	}
	return true;
}

while (count < number) {
	if (isPrime(n)) {
		document.write(n + "<br>");
		count++;
	}
	n++;
}

// for (let i = 0; i < count; i++) {
// 	if (isPrime(n)) {
// 		document.write(n + "<br>");
// 		// arr.push(n);
// 		// count++;
// 	}
// 	n++;
// }
