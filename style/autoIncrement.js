// Select increment and decrement buttons
const incrementCount = document.querySelector(".qty-plus");
const decrementCount = document.querySelector(".qty-minus");

// Select total count
const totalCount = document.querySelector(".qty");

// Variable to track count
var count = totalCount.innerHTML;
console.log(count)

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
    if (count > 0) {
        count--;
    } else if (count = 0) {
        count = 0;
    }
    totalCount.innerHTML = count;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

