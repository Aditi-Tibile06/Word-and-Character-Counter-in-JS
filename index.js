let textbox= document.getElementById("textbox");

textbox.addEventListener('input', function(){
  var text=this.value;      //storing value enter in textbox
  let char = text.length;     //getting length of the enter string

  document.getElementById("char").innerHTML=char;   //changing char count 0 till entered char

  text=text.trim();
  let words = text.split(" ");
  let cleanList = words.filter(function(elm){
      return elm != ""; 
  });

  document.getElementById("word").innerHTML=cleanList.length;

});
