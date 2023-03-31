// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number

// 2) create a variable to represent the current total

// 3) write a while loop that sums the numbers from 1 to 100


// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

let x = 1;

// while x is less than or equal to 10,
while (x <= 100) {
  // print x
  console.log(x++);

  // increment by one and re-assign x
  // if we forgot this step, x <= 10 always evaluates to true and we create an infinite loop
  x++;
}
