// // binary operators


// let a=10;
// let b;
// let res;

// // // addition operation
// // a=10;
// // b=20;


// // res=a+b;
// // // res=10+20

// // console.log(res)



// // // subtraction operation
// // a=110;
// // b=20;   
// // res= (a-b)*10 ;
// // // res=110-20
// // console.log(res)

// // // multiply operation
// // a=10;
// // b=20;
// // res=a*b;
// // // res=10*20
// // console.log(res)

// // // DIVISION OPERATION

// // a=0;
// // b=0;
// // res=a/b;
// // // res=1/0
// // console.log(res)


// // // exponential operation

// // a=2;
// // b=3;
// // res=a**b;
// // // res=2^3
// // console.log(res)

// // // modulus operation
// // a=10;
// // b=3;
// // res=a%b;
// // // res=10%3
// // console.log(res);



// // unary operators

// b=a++;
// console.log(b); 
// // b=a;
// // a=a+1
// console.log(a);

// let c=1;
// let d=++c;
// // c=c+1;
// // d=c

// console.log(d);
// console.log(c);


// a=a*10;
// a*=10;
// a=a*10;

// a+=10;
// a=a+10


// a-=10;
// a=a-10;


// //ternary operator

// let username="admin";
// let password="admin1";

// username==password?console.log("login success"):console.log("login failed");



// let car={

//     brand:"maruti",
//     model:"800",
//     color:"white",

// }

// let model=car.model;
// car.year=2021;




// let user1={
//     email:"nitinrina21@g.c",
//     password:1234,
//     age:null,
// }

// console.log(user1.email);

// user1.age=2;
// user1.gender="male";



// let arr=[1,2,3,4,5,66,"nitin",7,78,8,463,36,366,26,216]



// let arr2=[];


// arr2.push("udhay");
// arr2.push("sharma")
// arr2.unshift("vansh")

// let surname=arr2.shift();
// console.log(surname)
// console.log(arr2)



let age = 91;

// age>=18 true 
// age<60 true 

// true && true  = ture 


// if (age > 18) {
//     if (age > 91) {
//         console.log("how am i alive")
//     } else {
//         console.log("inside if")
//     }
// } else {
//     console.log("hi")
// }

// if(!age){
//     console.log("second if")
// }


let day = 1;
let day2 = 5;

switch (day) {
    case 1:
        console.log("Monday");
        switch (day2) {
            case 3:
                console.log("here");
                break
            case 4:
                console.log("here is 4");
                break
            default:
                console.log("nested default");


        }
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day!");
}


let username = "xyz";

switch (username) {

    case "xyzew2":
        console.log("hello");
        break;
    case "nitin":
        console.log("hi");
        break;
    default:
        console.log("default")



}


// switch(key=username){
//     case value=xyz:

//     case value=nitin:


// }


let age2 = 8;

let res = age2 >= 18;

console.log(res);

switch (res) {
    case (true):
        console.log("voter")
        break;


    default:
        console.log("not a voter")
        break;
}

let age3 = 20;
switch (age3) {
    case (age3 > 18):
        console.log("voter");

        break;
    case (age3===18):
        console.log("voter");

    default:
        console.log("not a voter");

        break;
}