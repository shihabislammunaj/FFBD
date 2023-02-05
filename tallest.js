function maxINArray(numbers){
  let largest = numbers[0];
  for(let i =0; i < numbers.lenght;i++){
  const index =i;
  const element =numbers[index];
if(element > largest){
  largest = element;
}

 } 
 return largest;
}
const heights=[190,167,120,165,137];
const tallest = maxINArray(heights);
console.log('tallest person is:',tallest) ;