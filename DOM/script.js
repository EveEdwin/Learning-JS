// Window ---->> Document ---- >> head and body 

// . notation ka use kar ke andar ja sakte ho 

document.getElementById("heading").innerHTML ="<h1>new coding</h1>"

// lockdown-install.js:1 Removing unpermitted intrinsics
// document.getElementById("content")
// <p class=​"content" id=​"content">​…​</p>​
// document.getElementById("content").id
// 'content'
// document.getElementById("content").class
// undefined
// document.getElementById("content").className
// 'content'
// document.getElementById("content").getAttribute
// ƒ getAttribute() { [native code] }
// document.getElementById("content").getAttribute("id")
// 'content'
// document.getElementById("content").getAttribute("class")
// 'content'
// document.getElementById("content").setAttribute("class","test")

const title = document.getElementById("content")

title.style.backgroundColor="green"
title.style.padding="15px"
title.style.borderRadius="10px"
title.style.backgroundColor="green"

title.testContent 

document.querySelector('h1')
let abc =document.querySelector('ul')
let variable = document.querySelectorAll("li") // this is a node list array jaisa dikhata hai but hao nahi array 

variable.forEach(function(e){
    e.style.backgroundColor="green";
});

// this is how you apply the style for the whole element in a NodeList array

let listclass=document.getElementsByClassName("list")  // this is a HTML collection array v

Array.from(listclass) // this is the way by which this element will convert this to an array from the HTML collection 


// *********************************************************************************************