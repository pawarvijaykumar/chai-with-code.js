//-------------- truthly-->means "" inside have  string name then callde the truthly
// truthly value-->"0",'false'," ",[].{},function(){}
// let value = "vijay";//thir is have inside the 



string-->"vijay"

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

//--------fasly(empty)--------->means "" thir is no string inside value ("") its empty
// fasly value---->0,-0, Bigint 0n,"",null,udefined,NaN


let value="";
if(value){
  console.log("true")
} else{
  console.log("false")
}