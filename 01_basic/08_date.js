//let today=date()
//let month=new year();

// console.log(today.toString());
// console.log(today.toDateString());

// //console.log(month)
// let myCreatedDate=new Date(2026,0,20);//month is started in 0's
// console.log(myCreatedDate.toLocaleString());


// let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth());//month started is 0s
// console.log(newDate.getDate());
// console.log(newDate.getDay());

// const Myarr=[0,1,2,3,4,5]
// console.log(Myarr[5]);//output 5

// Myarr.push(6)//5
// Myarr.pop(6)//remove the last value for ex->5
// console.log(MyArr);




//---------SLICE---------->do not change the orignal value
 let arr=[1,2,3,4,5];
 let result=arr.slice(1,4);
 //console.log(arr);
console.log(result);//[2, 3, 4]
console.log(arr);//[ 1, 2,3,4,5]
    


//----------SPLICE-------------->Changes original array VALUE


let arr=[1,2,3,4,5];
let result=arr.splice(1,4);
 //console.log(arr);
console.log(result);//[2,3,4,5
console.log(arr);//[ 1]
 
