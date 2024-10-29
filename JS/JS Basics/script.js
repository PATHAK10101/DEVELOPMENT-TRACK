// let str="  apple  ";
// console.log(str.trim());

// let msg="APNA COLLEGE";
// console.log(msg.slice(4,9), msg.indexOf("NA"), msg.replace("APNA","OUR"));

//ARRAY METHODS IN JS

// let start=['january','july','march','august'];
// start.shift();
// start.shift();
// start.unshift('june');
// start.unshift('july');
// console.log(start);

//SPLICE IN ARRAY
// start.splice(0,2,'july','june');
// console.log(start);

// MUTLIPLICATION OF 5
// let n=prompt("Write your Number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i+=n){
//     console.log(i);
// } 
// let i=n;
// while(i<=n*10){
//     console.log(i);
//     i+=n;
// }



// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(i,j);
// }
// }

//FAVOURITE MOVIE GUESS

let favourite="VIVAH";
let guess=prompt("Can you guess my favourite movie name");

while((guess!=favourite)&&(guess!='quit')){
    guess=prompt("OOPS! Try again. Can you guess my favourite movie name");}

if((guess=='quit')||(guess=='QUIT')){
    alert("Thanks for playing");
}
if(guess==favourite){
    console.log("congrats you find the Movie name");}


