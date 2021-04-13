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