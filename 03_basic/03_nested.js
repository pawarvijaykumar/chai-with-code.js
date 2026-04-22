function one(){
  const username1="vijay"//outside fn



   function two(){
    const username2="pawar"//inside fn
    console.log(username1)
    console.log(username2)
   }
   two()
}
one()