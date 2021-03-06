// Exercise 1 
/*### Exercise 1:
- Use a for loop to print numbers -3 through 8
*/
//Exercise 1 SOLUTION
for (let k = -3; k <= 8; k++) {
    console.log(k);
}

//Exercise 2
/*### Exercise 2:
- Use a for loop to count from -5 to 5 three times in a row
*/
//Exercise 2 SOLUTION
// !! : looking for a nested loop - check out the answer gist for an example
for (let t = -5; t <= 5; t++) {
    console.log(t);
}

for (let t = -5; t <= 5; t++) {
    console.log(t);
}

for (let t = -5; t <= 5; t++) {
    console.log(t);
}

//Exercise 3
/*### Exercise 3:
- Use a for loop to print only even numbers from -50 to 50
*/
//Exercise 3 SOLUTION
// !! : from -50 to 50
for (let numbers = -50; numbers <= 100; numbers++) {
    if (numbers % 2 == 0) {
        console.log(numbers);
    }

}

//Exercise 4
/*### Exercise 4:
Start with the following array:
`let high_scores = [2112, 1024, 9000, 9001, 7200, 2600, 10000]`
- Use a for loop to print each score
- If the score is greater than 9000 print the score
and the text `OVER 9000!`
Expected Output:
```
HIGH SCORES
2112
1024
9000
9001 OVER 9000!
7200
2600
10000 OVER 9000!
```
*/
//Exercise 4 SOLUTION 
// let high_scores = [`2112, 1024, 9000, 9001, 7200, 2600, 10000`];
// for (let high_scores = 0; i < 6; i++)
//     console.log(high_scores);


/*### Exercise 5:
- Prompt the user to enter a number
- Prompt the user to enter another number
- Create a for loop that counts from the
first number to the second number they entered
*/
// Exercise 5 SOLUTION 

//## While/Do While Loops

// ### Exercise A:
// Print -10 through 5 using a counter and while loop.
// Exercise A SOLUTION
let countdown = -10;
while (countdown > 5); // !! : countdown should be less than or equal to 5
{
    console.log(countdown);
    countdown = countdown - 1;
}

//Exercise B 
/*### Exercise B:
- Write a While loop that counts backwards from 10 to 0
- Log the current count at the end of each
iteration EXCEPT if the current count is ```5```
*/
//Exercise B Solution

//Exercise C 
/*### Exercise C:
- Create an empty `name_array`
- Ask the user ```Enter a word. Enter 'q' to quit.``` Add each word they enter to the array
- Create a while loop that will keep asking for words
to add to the array until they enter 'q'
- When the user enters 'q' use a **for** loop to print
each word from the array
*/
//Exercise C SOLUTION 