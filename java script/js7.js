console.log("This a java script");

function greet(name, greettext="Greeting form java script"){
 console.log(greettext+' '+name);
 console.log(name+ " is a good boy");

}
function sum(a,b,c){
    let d=a+b+c;
    return d;
    // This line is never work
    // console.log("The result is returned")
}

// let name = "Suman";
// let name1 = "Rahul";
// let name2 = "Durlab";
// let name3 = "souvike";
// let greettext="Good Morning";
// greet(name,greettext);
// greet(name1);
// greet(name2,greettext);
// greet(name3,greettext);
// // let returnval=greet(name1);
// // console.log(returnval);

// let returnval=sum(1,2,8);
// console.log(returnval);

// console.log(name+ " is a good boy");
// console.log(name1+ " is a good boy");
// console.log(name2+ " is a good boy");
// console.log(name3+ " is a good boy");

// function gretterthen(a,b){
//     if(a<b){
//         console.log("b is gretter then a")
//     }
//     else{
//         console.log("a is gretter then b")

//     }
// }
// gretterthen(9,1);


// function lesserthen(a,b){
//     if(a<b){
//         console.log("a is lesser then b")
//     }
//     else{
//         console.log("b is lesser then a")

//     }
// }
// lesserthen(3,9);

// minimum
// function minimum(a,b,c,d,e,f,g){
    
//     let small=a;
//     if(small>b){
//             small=b;
//     }
//     else{
//         small=a;
//     }
//     return small;

// }

// let returnvalu= minimum(2,3,1,4,5,6,7);
// console.log('The minimum value is '+ returnvalu);
var totn_array = [4,5,6,7,3,2,1];

console.log(Math.min(...totn_array));



var totn_array = [5, 10, 15, 20, 25];

console.log(Math.max(...totn_array));