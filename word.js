 function roversewords(str){
  const worlds =str.split(' ')
  const fesuld=[];
  for(let i = worlds.lenght -1; i>=0; i--){
    const element =worlds[i];
    fesuld.push(element);
  }
 console.log(fesuld);
 }
 const mystring ='I am a good boy';
 roversewords(mystring);