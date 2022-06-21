// // // // var myGlobal = 10;

// // // // function fun1(){
// // // //     outGlobal = 5;
// // // // }

// // // // function fun2(){
// // // //     var box = "";
// // // //     if (typeof myGlobal!="undefined"){
// // // //         box = 'Output '+myGlobal;
// // // //     }
// // // //     if (typeof outGlobal!="undefined"){
// // // //         box='Output '+outGlobal;
// // // //     }
// // // //     console.log(box);
// // // // }
// // // // fun1()
// // // // fun2()

// // // //stand in line

// // // function nextLine(arr,item){
// // //     arr.push(item);

// // //     return arr.shift();
// // // }

// // // var testArry = [1,2,3,4,5];

// // // console.log("Before "+JSON.stringify(testArry));
// // // console.log(nextLine(testArry,6));
// // // console.log("After "+ JSON.stringify(testArry));

// // // if('3'==='3'){
// // //     console.log("it's true ");
// // // }

// // //switch case

// // function inSwitchCase(val){
// //     var answer="";
// //     switch(val){
// //         case 1:
// //             answer = "alpha";
// //             break;
// //         case 2:
// //             answer = "beta";
// //             break;
// //         case 3:
// //             answer = "gama";
// //             break;
// //         case 4:
// //             answer = "delta";
// //             break;
// //         default:
// //             answer= "Sorry out of my range";
// //             break;
// //     }
// //     return answer;
// // }
// // console.log(inSwitchCase(5));

// // card game code

// var count=0;
// function cc(card){
//     switch(card){

//     }
// }

// cc(3) 

//object

// var demoObject ={
// //     'name':'firoz kabir',
// //     'number':'0232344'
// // }
// // demoObject.name="Roz";
// // demoObject.age= 12;
// // demoObject['school']='APBN'
// // var name = demoObject.name;
// // var age = demoObject.age;
// // var school = demoObject.school;
// // delete demoObject.number;

// // var number = demoObject.number;

// // console.log(name);
// // console.log(age);
// // console.log(school);
// // console.log(number);

// //nested object 

// // var myCar={
// //     "car":{
// //         "inside":{
// //             "break":"Two",
// //             "seta":4
// //         },
// //         "outside":{
// //             "light":4,
// //             "glass":2
// //         }
// //     }
// // };
// // var allOk = myCar.car.inside.break;
// // console.log(allOk);

// // Record collection 
// var collection = {
//     "2548":{
//         "album":"Slippery When Wet",
//         "artist":"bon Jovi",
//         "tracks":[
//             "Let it Rock",
//             "You Give a Bad Name"
//         ]
//     },
//     "2549":{
//         "album":"Slippery When Wet",
//         "artist":"bon Jovi",
//         "tracks":[
//             "Let it Rock",
//             "You Give a Bad Name"
//         ]
//     },
//     "2550":{
//         "album":"Slippery When Wet",
//         "artist":"bon Jovi",
        
//     },
//     "2551":{
//         "album":"Slippery When Wet",
       
//         "tracks":[]
//     }
// };
// var coleectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecord(id,prop,value){
//     if (value ===""){
//         delete collection[id][prop];

//     }
//     else if(prop==="tracks"){
//         collection[id][prop] = collection[id][prop]|| [];
//         collection[id][prop].push(value);
//     }
//     else{ 
//         collection[id][prop] = value; 
//     }
    
//     return collection;
// }
 
// console.log(updateRecord(2550,"artist","Abba"));