console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


//create a global variable and set i to an empty array.


//declared a variable named basket and set it to an empty array
let basket = [];

//created a function called addItem that takes item as a parameter
const addItem = (item) => {

  //using the push method and will accept the item variale
  basket.push(item);
  //using an if method to check if the item has a length greater than 0
  if(item.length > 0){

    // if item has greater than 0, we will return true
    return true;
  }
};


//i am conseling addItem and taking "milk" as an argument
console.log(addItem("milk")); //out should true

//checking to see if the milk argument was pushed to basket array;
console.log(basket)
