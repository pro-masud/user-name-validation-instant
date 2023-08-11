// get data here
const input = document.querySelector("input");
const submit = document.querySelector("button");
const msg = document.querySelector("p.msg");




input.onkeyup = (e) => {
  
  const data = e.target.value;
  
  // user validation here 
  if(data.length > 0 && data.length < 5 ){
    msg.innerHTML = "";
  }

}