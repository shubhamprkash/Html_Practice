var fizzBuzz1 = function(n) {
    let answer=[];
    for(let i = 1; i<= n.length;i++){
        if(i % 3 === 0 && i % 5 === 0){
            answer.push("FizzBuzz");
        }
        else if(i % 3 === 0){
            answer.push("Fizz");
        }
        else if(i % 5 === 0 ){
            answer.push("Buzz");
        }
        else{
            answer.push(i.toString());
        }
    }  
    return answer;
};


var fizzBuzz2 = function(n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push('FizzBuzz');
        } else if (i % 3 === 0) {
            output.push('Fizz');
        } else if (i % 5 === 0) {
            output.push('Buzz');
        } else {
            output.push(i.toString());
        }
    }
    return output;
};

var createCounter = function(init) {
    let i = 0;
    return {
        increment : ()=> init + ++i,
        decrement : ()=> init - --i,
        reset :()=>{
            i=0;
            return init;
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++)
            if(nums[i] + nums[j]==target){
            return [i,j];
            }
    }
    return [];
};

let s1 = "abc";
let s2 = "pqrs";


function stringMix(s1, s2) {
   
    let size1 = s1.length;
    let size2 = s2.length;

    let i = 0, j = 0;
    let result = "";
    while(i < size1 && j < size2)
    {
        result += s1[i++];
        result += s2[j++];
    }


}

// function for reversing an string word by word not letter by letter
function reverseString(str)
{
    let strArr = str.split(" ");
    let result = "";
    for(let i = strArr.length-1; i>=0; i--)
    {
        result += strArr[i] + " ";
    }
    return result;
  
}