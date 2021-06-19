/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}
for(let i=0; i <= 9; i++ ){
    console.log(generateRandom(0, 9));
}


