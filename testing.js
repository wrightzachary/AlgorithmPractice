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