// let cars=[["BMW","Mercedes","Mustang 1969"], ["Nano","Pajero","Bolero"]];

// for(let i=0;i<cars.length;i++){
//     for(j=0;j<cars[i].length;j++){
//         console.log(cars[i][j]);
//     }}


    //object literals

    // let post={
    //     username:"Mangru1122",
    //     content:"comdey related",
    //     likes:1,
    //     report:0,
    //     tags:"[comdey,adventure]"
    // }

//Guessing Game

// let max=prompt("enter the max number");
// let guess=prompt("Guess a number");
// let num=Math.floor(Math.random()*max);

// while(true){
//     if(guess==num){
//         console.log("YOU GUESS IT RIGHT");
//         console.log("IT WAS "+num);
//         break;
//     }
//     if((guess=='quit')||(guess=='q')||(guess=='exit')){
//         console.log("user quit")
//         break;
//     }
//     if(guess<num){
//         console.log("Hint:Your guess is less than the number");
//         guess=prompt("Guess a number");
//     }
//     if(guess>num){
//         console.log("Hint:Your guess is more than the number");
//         guess=prompt("Guess a number,again");
//     }
//     else{
//         console.log("YOU GUESS IT WRONG");
//         prompt("TRY AGAIN");
//     }
// }
   

//FUNCTIONS

// function Diceroll(){
//     console.log(Math.floor(Math.random()*6)+1);   
// }
// Diceroll();

// //Arow Function
// const cube=(n)=>{
//     return n*n*n;
//     cube();
// }
//settimeout and setInterval for breaking the loop use clearinterval(id)-----> id is the variable for the setinterval or setTimeout.

// let id= setTimeout(()=>{
//     console.log("hello")}
// ,2000);
// let id2= setInterval(()=>{
//     console.log("hello")}
// ,2000);


// // clearTimeout(id);
// clearInterval(id2);


//This with Arrow function

// const person ={
//     name:"PP",
//     age:21,

//     getName:function(){
//         console.log(this);               //Parent scope --->person
//         this.name;
//     },

//     getAge:()=>{                         
//         console.log(this);              //Parent scope --->window
//         this.age;
//     },

//     getInfo1: function(){
//         setTimeout(()=>{                        
//             console.log(this);            //person
//             this.name;
//         },2000)
//     }
//     ,
//     getInfo2: function(){
//         setTimeout(function(){
//             console.log(this);    //window
//             this.age;
//         },2000)
//     }
// }


//ARRAY METHODS

//Map Method

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((el)=>{
//     console.log(el);
// });

// let arr_2=[{
//     name:"PP",
//     age:21
// },{
//     name:"Yash",
//     age:21 
// },{
//     name:"PP",
//     age:31
// }];

// arr_2.forEach((arr_2)=>{
//     console.log(arr_2.name);
// })

//Filter Method

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let even = arr.filter((el)=>{
//     console.log(el);
//     return el%2==0;
// })

//Reduce Method

// let reduce = arr.reduce((res,curr)=>{
//     return res+curr;
// })

//Mutiple of 10 or not

// let arr_3 = [1,2,3,4,5,6,7,8,9,10];

// let ans = arr_3.every((el)=>{
//     return el%10==0;
// })

//Minimum NUmber In an array

// let arr_4 = [1,2,3,4,5,6,7,8,9,10];
// let min = arr_4.reduce((res,curr)=>{
//     if(res<curr){
//         return res;
//     }
//     else{
//         return curr;
//     }
// })

//Default Parameters

// let sum = (a=1,b = 3)=>{
//     return a+b;
// }

//Destructing

// let names = ["PP","Yash","Rohit","Vishal"];
// let[winner,second,...partcipants] = names;
// console.log(winner,second,partcipants);

//Object Destructing
// const student = {
//     name:"PP",
//     age:21,
//     marks:{
//         maths:90,
//         physics:70
//     }
// }

// let{ name, age ,marks:{maths,physics}, city="Delhi"} = student;
