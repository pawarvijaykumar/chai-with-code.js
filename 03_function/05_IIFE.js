
//IIFE(Immediately Invoked Function Expression)-->its avoid the global variable
(function() {
  let name = "Vijay";
  console.log(name);
})();


//with paramiters----->
(function(name) {
  console.log("Hello " + name);
})("Vijay");

//another way

(function(name) {
  console.log(`iam king  ${name}`);
})("Vijay");