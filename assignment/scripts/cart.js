console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//.1 Add a global const named maxItems and set it to 5;

const maxItems = 5;

//declared a variable named basket and set it to an empty array
let basket = [];

//created a function called addItem that takes item as a parameter
const addItem = item => {

  // if my isFull function is less than the maxItems variable
  if ( !isFull() ){

      //push item to the basket
        basket.push( item );

  }
       // or return false
      return false;
};

/*----Testing  to see if the functions created are working correctly -----*/
console.log(`Basket is ${basket}`);

//adding more items to the basket
console.log('Adding apples (expect true)', addItem('apple'));
console.log('Adding apples (expect true)', addItem('Orange'));
console.log('Adding apples (expect true)', addItem('Mango'));
console.log('Adding apples (expect true)', addItem('Grapes'));
console.log('Adding apples (expect true)', addItem('Apple fruit'));
console.log('Adding apples (expect true)', addItem('Peanuts'));
console.log(`Basket is now ${basket}.`);

//checking to see if the milk argument was pushed to basket array;
console.log ( basket );


//Create a function called listItem. it should:
  //loop over the items in the basket array
  //console.log each item on a new line

//created listItem function that takes array as parameter
  const listItem = array => {

    //created variable called items
    let items;

    //using for loop to get the length of the array and return the elements within the array
      for ( let i = 0; i < array.length; i++ ) {

        // assigning items to the output of array[i]
        items = array[i];
        //login the items to console
        console.log ( items );
      }

      // finally, we are returning items
      return items;
  };

//log listItem to console and pass basket as an argument
  console.log ( listItem ( basket ) );// out should be Milk


  //Create a function called empty array
    //reset the basket to an empty array.

  //Created a function called emptyArray
  function emptyArray(){
    //created veriable called items and set it equal to basket.splice
    //basket.slice This will remove all elements from the array and will actually clean the original array.
     let items = basket.splice( 0, basket.length );

     // returning items
     return items;
  }

//envoking emptyArray which will clear the basket array to empty
//emptyArray();

 //basket to console to see if the array is reset to empty;
 //console.log ( basket );

/*Stretch Goals*/

//Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

//using functions in other function


//2. Create a function  called isFull(). it should:
  //return false is the basket contains less than max number of items
  //return true otherwise (equal or more than maxItems)

  //3. Update the required addItem function to:
    //Use the isFull function to prevent more than maxItems from being added to the basket.
    //If an item was added to the array, return true
    //If there was no room and the item could not be added return false
    //Using Array built-in functions!
  function isFull () {

      if ( basket.length < maxItems ) {
        return false;
      }

      else if ( basket.length >=  maxItems ) {

        return true;
      }
  }

//4. Create a function called removeItem. It should:
  //Take an input parameter for a string item
  //Use Array.indexOf to find the index of the first matching item in the basket.
  //Use Array.splice to remove the first matching item from the basket.
  //Return the item removed or null if the item was not found
  function removedString ( string ) {

    //declared index and set it equal to basket.index Of and pass string
    let index = basket.indexOf(string);

    // index is greater than -1 (indexOf will give -1 if the string doesnt match elements within the basket)

    if ( index > -1 ) {

      let removedItem = basket.splice(index, 1);

      return removedItem;
    }
    return null;

}


//Testing removedString function
console.log(basket)
console.log(removedString("Mango"))
console.log(basket[2]);
