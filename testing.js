// compress a string

let testString = 'aaaabbbcccccd';

function compressString(strToCompress){
    let counter = 1;
    let finalStr = ""
    for(let i = 0; i < strToCompress.length; i++)    {
        if(strToCompress[i] == strToCompress[i+1]){
            counter++
        }
        else{
            finalStr += counter + strToCompress[i];
            counter = 1
        }
    }
    return finalStr;
}

let result = compressString(testString)
console.log(result)

// print random number

let randomNumber = Math.random() * 6;
randomNumber = Math.round(randomNumber);

console.log(randomNumber);


// reverse a string

function reverseString(str){
    var strArr = str.split("") 
    var reverseStrArr = strArr.reverse();
    var reversedStr =  reverseStrArr.join("");
    return reversedStr;
}

console.log(reverseString("hello")); // olleh


// FizzBuzz

for (let i=1; i<=100; i+=1){
    if (i % 3 === 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else{
        console.log(i)
    }
}

// Buy or sell

// delcare the array
let stockMarketPrices = [8,4,30,1,2,3];
function buyOrSell() { 
	// declare the inital profit
	let profit = 0;

	// stockmarketPrices.length - 1 becuase second loop will scan elements to right
	for ( i=0; i< stockMarketPrices.length - 1; i+1){ 
		// j will be scanning all conbinations from first loop
		for (let j=i+1; I<stockMarketPrices.length; i+1 ){
            // current profit is the second loop minus the first loop
			const currentProfit  =  stockMarketPrices[j] - stockMarketPrices[i];
            
            // check to see if currentProfit is greater than profit
			if (currentProfit > profit) {
                // if current profit is greater that proft, then profit equals profit
				profit = Math.max(profit, currentProfit);
			}
		}
	}

	return profit;
}

// Leetcode 1. Two Sums

var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
};

// LeetCode 2. Add Two Numbers

var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) {
        current.next = new ListNode(sum);
    }
    
    return result.next;
};

// LeetCode 3. Longest SubString Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};

// LeetCode 5. Longest Palindromic Substring

var longestPalindrome = function(s) {
    var start = 0;
    var end = 0;
    for (var i=0; i<s.length; i++) { 
        var oddPalindrome = true;
        var lenOdd = expandAroundCenter(s, i, i); 
        var lenEven = expandAroundCenter(s, i, i+1); 
        var lenMax = Math.max(lenOdd, lenEven); 
        if (lenMax === lenEven) { 
            oddPalindrome = false;
        }
        if (lenMax > (end - start+1)) {
            if (oddPalindrome) { 
                start = i - Math.floor(lenMax/2); 
                end = i + Math.floor(lenMax/2); 
            } else {
                start = (i - (lenMax/2)) +1; 
                end = (i+1 + (lenMax/2)) -1; 
            }
        }
    }
    return s.substring(start, end+1);
}
var expandAroundCenter = function(s, L, R) {
    while (L >=0 && R < s.length && s[L] == s[R]) { 
        L--;
        R++;
    }
    R = R-1;
    L = L+1;
    return R - L + 1;
}

// LeetCode 6. Zigzag Conversion

var convert = function(s, numRows){
    var length = s.length;
    if (numRows == 1) return s;
    var cycleLen = numRows * 2 - 2;
    var aZig = [];
    for (var i = 0; i < numRows; i++){
        for (var j = 0; j + i < length; j=j+cycleLen){
            aZig.push(s.charAt(j + i));
            if (i!=0 && i!=numRows -1 && j + cycleLen - i < length){
                aZig.push(s.charAt(j + cycleLen - i));
            }
        }
    }

    return aZig.join("");
};

// LeetCode 9. Palidrome Number

var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 == 0))
        return false;

    let reverse = 0;
    
    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = ~~(x/10);
    }
    
    return x === reverse || x === ~~(rev??erse/10);
};

// LeetCode 13. Roman to Ineger

var romanToInt = function(s) {
    // delcare map that'll store numerals
    const romanMap = new Map();
    // fill the map
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    // find the length of the string
    const n = s.length;
    //Variable to store result
    let num = romanMap.get(s[n-1]);
    // loop from right to left
    for( let i=n-2; i>=0; i--){
        // chech if character to right is larger or smaller
        if (romanMap.get(s[i]) >= romanMap.get(s[i+1])){
            num += romanMap.get(s[i]);
        } 
        else {
            num -= romanMap.get(s[i]);
        }
    }
    return num;
};

// LeetCode 14. Longest Common Prefix

var longestCommonPrefix = function(strs) {
    // delcare an empty string
    let longestCommonPrefix = "";
    //set base condition
    if (strs == null || strs.length == 0){
        return longestCommonPrefix;
    }

    // find minimum length string from array
    let minimumLength = strs[0].length;
    for (let i =1; i < strs.length; i++ ){
        minimumLength = Math.min(minimumLength, strs[i].length);
    }
    // loop for minimum length 
    for (let i=0; i<minimumLength; i++){
        // get current character
        let current = strs[0][i];
        // check if this character is in all strings
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != current) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += current;
    }
    return longestCommonPrefix;
};

// LeetCode 20. Valid Parantheses

var isValid = function(s) {
    const leftSymbols = []
    //loop for each character of the string
    for (let i=0; i<s.length; i++){
        // see if the sybmbol is encountered
        if (s[i] === ')' || s[i] === '{' || s[i] === '[') {
            leftSymbols.push(s[i]);
        }
        // If right symbol is encountered
        else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
            leftSymbols.pop();
        } else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
            leftSymbols.pop();
        } else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
            leftSymbols.pop();
        }
        // if no symbols is encountered
        else {
            return false;
        }
    }
    return leftSymbols.length === 0;
};