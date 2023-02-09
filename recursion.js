/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	return i === nums.length ? 1 : nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
	// non-recursive solution:
	// return Math.max(...words.map((word) => word.length));

	// recursive solution:
	if (words.length === 0) return;

	const [ head, ...tail ] = words;
	if (words.length === 1) return head.length;
	return head.length > longest(tail) ? head.length : longest(tail);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
	return str.length === 0 ? '' : str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	// non-recursive solution:
	// let arr1 = [ ...str ];
	// let arr2 = [ ...str ].reverse();
	// for (let i = 0; i < str.length; i++) return arr1[i] != arr2[i] ? false : true;

	// recursive solution:
	if (str.length === 0) return true;

	return str[0] !== str[str.length - 1] ? false : isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1;

	return arr[i] === val ? i : findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
	return str.length === 0 ? '' : str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	const result = [];
	Object.values(obj).forEach((val) => {
		if (typeof val === 'object') {
			result.push(...gatherStrings(val));
		} else {
			result.push(val);
		}
	});
	const mainResult = [];
	result.forEach((val) => {
		if (typeof val === 'string') {
			mainResult.push(val);
		}
	});
	return mainResult;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, i = 0) {
	if (i === arr.length) return -1;

	return arr[i] === val ? i : findIndex(arr, val, i + 1);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
