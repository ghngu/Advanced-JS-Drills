// testing 
name = 'George Nguyen';
var name;
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
};
console.log('test');
let avg = findAvg(2, 3);
console.log('test', avg);
function findAvg(num1, num2) {
    console.log('test');
    var answer = (num1 + num2) / 2;
    return answer;
};

// testing Scope
var fruits = ['apples', 'oranges', 'mangos', 'watermelon', 'pears', 'peaches', 'bananas'];
// let favFruit;

function printFruit() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit();
    console.log(leastFav);
};
let leastFav = fruits[4];
printFruit();

hello();
function hello() {
    console.log('Hello ' + name + '!');
};

let message = function () {
    alert('Something Happened!');
};
message();