// const hollywood_movies=["Rampage","avatarm","interstaller"];
// const bollywood_movies=["kgf","RRR","dhurandher"];
//  hollywood_movies.push(bollywood_movies);
//  console.log(hollywood_movies);

// // console.log(bollywood_movies[2][1]);-------->output[
//   'Rampage',
//   'avatarm',
//   'interstaller',
//   [ 'kgf', 'RRR', 'dhurandher' ]
// ]


//----concate------->combine the both array in same line
//  const hollywood_movies=["Rampage","avatarm","interstaller"];
// const bollywood_movies=["kgf","RRR","dhurandher"];
//  hollywood_movies.concat(bollywood_movies);
//  console.log(hollywood_movies,bollywood_movies);///[ 'Rampage', 'avatarm', 'interstaller' ] [ 'kgf', 'RRR', 'dhurandher' ]




//------------------flat()------------

const another_arra=[1,2,3,[4,5,6,[7,8,9]]];
const real_array=another_arra.flat(Infinity);
console.log(real_array);