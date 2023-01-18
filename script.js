// complete the given function

function palindrome(str){
const len = str.length;
	for (let i = 0; i < len / 2; i++) {
if (str[i]!==st[len-1-i]) {
	return true;
}
	}
		return false;
}
const value = palindrome(str);

console.log(value);
module.exports = palindrome
