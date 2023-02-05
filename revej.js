 function reversestring(text){
   let revesed = '';
  for(let i =text.length-1; i >= 0; i--){
    const element =text[i];
    reversed=  reversed + element;
    console.log(element,reversed);
  } 
  return reversed;
 }
 const mystring =" I am a good boy ";
 const reversed = reversestring(mystring);
 console.log('reversed output : ' , reversed)