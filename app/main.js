// get data here
const input = document.querySelector("input");
const submit = document.querySelector("button");
const msg = document.querySelector("p.msg");




input.onkeyup = (e) => {
  
  const data = e.target.value;
  
  // user validation here 
  if(data.length > 0 && data.length <= 5 ){
    msg.innerHTML = '<span style="color: skyblue;">Plz Simble Minimam 5 Character</span>';
  }else if(data.length > 5 && data.length <= 12){
    msg.innerHTML = '<span style="color: green;">You are Right Now !</span>';
  }else{
    msg.innerHTML = '<span style="color: red;">Incurrect User Name</span>';
  }

}