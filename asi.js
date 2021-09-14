let welcome = new String("Hey, low of your kind; get some colors.");
console.log(welcome);

let ch = welcome.replace("some", "all");
console.log(ch);

let ch1 = welcome.toLowerCase();      // The toLocaleLowerCase() method converts a string to lowercase letters, according to the host's current locale. The locale is based on the language settings of the browser.
console.log(ch1);

let ch2 = welcome.charCodeAt(0);        // returns the Unicode of  the character. .charCodeAt(<0,1,2,..)  
let ch3 = welcome.charCodeAt(welcome.length - 1);
console.log(ch2);
console.log(ch3);

let ch4 = welcome;
let ch5 = " rainbow got seven colors.";
let ch6 = ch4.concat(ch5);
console.log(ch6);

console.log(ch6.endsWith("colors"));  // returns false as string ends with "."
console.log(ch6.endsWith("."))              // returns true.


console.log(String.fromCharCode(72, 69, 76, 76, 79));  // returns the Unicode values to characters.



console.log(ch6.length);        // returns the length of the string.

console.log(ch6.localeCompare(ch5));    //localeCompare() returns -1, 1, or 0 if the string comes before, after, or is equal in sort order.

console.log(ch6.match(/low/));       // the match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

console.log(ch5.repeat(2));        // repeats the number of times

console.log(ch6.search("kind"));     // The search() method searches a string for a specified value, and returns the position of the match.

console.log(ch6.startsWith("of"));
console.log(ch6.startsWith("Of"));

console.log(ch6.includes("rainbow"));
console.log(ch6.includes("dark"));


console.log(ch6.lastIndexOf("colors"));
console.log(ch6.lastIndexOf("low"));
console.log(ch6.lastIndexOf("Hey"));




function myFunctionx() {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("null");
  newItem.appendChild(textnode);

  var list = document.getElementById("myListy");
  list.insertBefore(newItem, list.childNodes[0]);

  var newItem1 = document.createElement("LI");
  var textnode1 = document.createTextNode("amaranth");
  newItem1.appendChild(textnode1);

  var list = document.getElementById("myListy");
  list.insertBefore(newItem1, list.childNodes[0]);

  var newItem2 = document.createElement("LI");
  var textnode2 = document.createTextNode("verillon");
  newItem2.appendChild(textnode2);

  var list = document.getElementById("myListy");
  list.insertBefore(newItem2, list.childNodes[0]);
}
function myFunctiony() {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode("horizon");
  newItem.appendChild(textnode);

  var list = document.getElementById("myListy");
  list.insertBefore(newItem, list.childNodes[0]);

  var newItem1 = document.createElement("LI");
  var textnode1 = document.createTextNode("acrylic hue");
  newItem1.appendChild(textnode1);

  var list = document.getElementById("myListy");
  list.insertBefore(newItem1, list.childNodes[0]);

  var newItem2 = document.createElement("LI");
  var textnode2 = document.createTextNode("caledon");
  newItem2.appendChild(textnode2);

  var list = document.getElementById("myListy");
  list.insertBefore(newItem2, list.childNodes[0]);
}