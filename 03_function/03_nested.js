//nested function-->function inside a function

function one(){
  const username1="vijay"//outside fn



   function two(){
    const username2="pawar"//inside fn
    console.log(username1)//vijay
    console.log(username2)//pawar
   }
   two()
}
one()

//use the if else statement