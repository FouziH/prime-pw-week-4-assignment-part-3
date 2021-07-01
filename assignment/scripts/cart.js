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
  if (item.length >= 0 || item.length === undefined) {

    // if item has greater than 0, we will return true
    return true;
  }else {
    return false;
  }
};


//i am conseling addItem and taking "milk" as an argument
addItem("Milk");

//test  addItem


console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);




//checking to see if the milk argument was pushed to basket array;
console.log(basket);


//Create a function called listItem. it should:
  //loop over the items in the basket array
  //console.log each item on a new line

//created listItem function that takes array as parameter
  const listItem = (array) => {

    //created variable called items
    let items;

    //using for loop to get the length of the array and return the elements within the array
      for (let i = 0; i < array.length; i++){

        // assigning items to the output of array[i]
        items = array[i];
        //login the items to console
        console.log(items);
      }

      // finally, we are returning items
      return items;
  };

//log listItem to console and pass basket as an argument
  console.log(listItem(basket));// out should be Milk


  //Create a function called empty array
    //reset the basket to an empty array.

  //Created a function called emptyArray

  function emptyArray(){

    //created veriable called items and set it equal to basket.splice
    //basket.slice This will remove all elements from the array and will actually clean the original array.
     let items = basket.splice(0, basket.length);

     // returning items
     return items;
  }

//envoking emptyArray which will clear the basket array to empty
emptyArray();

console.log(basket);
