var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

const array = [1];
const element = "foo";
function addElementToBeginningOfArray(array, element){
  return ["foo", ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element){
  return[...array, "foo"];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo");
  return array;
}

 
function accessElementInArray(array, index){
  array = [1,2,3];
   return array[2];
}



function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

<<<<<<< HEAD
function destructivelyRemoveElementFromEndOfArray(array){
 array.pop();
return array;
}


function removeElementFromEndOfArray(array){

=======
function destructivelyRemoveElementFromEndOfArray(){
 const num = [1,2,3];
num.length = 2;
 return num;
}

function destructivelyRemoveElementFromEndOfArray(){
 const num = [1,2,3];
num.pop();
 return num;
}


function removeElementFromEndOfArray(){
  const array = [1,2,3];
>>>>>>> ad11815d9cd8a752f6fdccd758f4d74480d41318
  return array.slice(0, array.length-1);
}
