// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let square = arr.forEach((el)=>{
//     console .log(el*el);
// })

// let sum=square.reduce((acc,cur)=>acc+cur,0);

// let avg = (sum / arr.length);
// console.log(avg);

//Create a new array using the map function whose each element is equal to the original element plus5.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr = array.map((el)=>console.log(el+5));



//Qs3.Create a new array whose elements are inuppercase of words present in the original array.
// let arr_2 = ['hello', 'world', 'in', 'a', 'frame'];
// let upper_Case = arr_2.map((el)=>console.log(el.toUpperCase()));

//Qs4.Write a function called double And Return Args which accepts an array and a variable number of arguments.
//The function should return a new array with the original array values and all of the additional arguments doubled.



//Qs5.Write a function called mergeObjects that accepts two objects and returns a new object which contains all thekeys and values of the first object and second object.



//DOM EVENTS

// let btns = document.querySelector("button");
// function sayhello(){
//     alert("hello");
// }

// // btns.onclick = sayhello;
// console.dir(button);


//Activity
 
// let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     document.querySelector("h1").innerText = Random_color();

//     div.style.backgroundColor = Random_color;
// });

// function Random_color(){

//     let red = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let color = `rgb(${red},${blue},${green})`; 


// }


//Event listeners for Elements


// function change_color(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";

// }

// let div = document.querySelector("div");
// div.addEventListener("click",change_color);

// let h1= document.querySelector("h1");
// h1.addEventListener("click",change_color);

// let button = document.querySelector("button");
// button.addEventListener("click",change_color);



//Keyboard Events

// let inp =document.querySelector("input");
// inp.addEventListener("keydown",function(e){
//     console.log("key=",e.key);

//     if(e.key = "ArrowUp"){
//         console.log("Character move upward");
//     }
//     else if(e.key = "ArrowDown"){
//         console.log("Character move downward");
//     }
//     else if(e.key = "ArrowLeft"){
//         console.log("Character move leftward");
//     }
//     else if(e.key = "ArrowRight"){
//         console.log("Character move rightward");
//     }
// });


//Form Events

// let form = document.querySelector("form");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     let username = document.querySelector("#username");
//     let password = document.querySelector("#password");
    
//     alert(`username is ${username.value} and password is ${password.value}`);

// })


//Creating a Text Editor

// let inp = document.querySelector("input");
// let p = document.querySelector("p");

// inp.addEventListener("input",()=>{
//     console.log(inp.value);
//     p.innerText = inp.value;
// });


//Practise Question

// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// btn.addEventListener("click",()=>{

//     body.style.backgroundColor = "green";
// })

