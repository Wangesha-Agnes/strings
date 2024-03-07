// Extract the last four characters from the string below."extravaganza"

let a = "extravaganza";
console.log({character:a[11]});
console.log({character:a[10]});
console.log({character:a[9]});
console.log({character:a[8]});

//Insert the following string at the fourth index of the below variable;"eat" const food="The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const insertString = "eat"

const newFood = food.substring(0,4) + insertString + food.substring(4)
console.log(newFood);

//Count how many times the following string appears in the string variable:1. "the"2."brown"cons story="The quick brown fox jumps over the lazy dog"

const story="The quick fox jumped over the lazy dog"
const countThe=(story.match(/the/gi)||[]).length;
const countBrown=(story.match(/brown/gi|| [].length));

console.log("Number of occurences of 'the':",countThe)
console.log("Number of occurences of 'brown':",countBrown);

//Using JavaScript,find the following words from the following strings:1. "are"const sting1 = "The pupils are reading in the library";2. "sitting"const string2= "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell"
console.log({index:string1.indexOf('are')});
console.log({index:string2.indexOf('sitting')})

//Convert the following strings into the specified format:1.UpperCase:"wonderful"2.LowerCase:"amazing" "UndEneath"3.Title case "A wonderful world"

let b= "wonderful";
let result1= b.toUpperCase();
console.log(result1);


let d = "amazing"
let result = d.toLowerCase();
console.log(result);

let e = "UndERneath"
let result2 = e.toLowerCase();
console.log(result2);

let c = "A wonderful world"
function titlecase(string){
    return string.toLowerCase().replace(/\b\w/g,s=>s.toUpperCase());
}
console.log(titlecase(`A wonderful world`))