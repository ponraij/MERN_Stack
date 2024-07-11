let val = 'X';
function update(obj){
  if(obj.innerHTML == ""){
    if(val == 'X'){
      obj.innerHTML = 'X';
      val = 'O';
      check(obj);
    }
    else{
      obj.innerHTML = 'O';
      val = 'X';
      check(obj);
    }
  }
}

function check(obj){
  console.log(obj.id);
  let key = obj.innerHTML;

  let key1 = document.getElementById('con_1').innerHTML;
  let key2 = document.getElementById('con_2').innerHTML;
  let key3 = document.getElementById('con_3').innerHTML;
  let key4 = document.getElementById('con_4').innerHTML;
  let key5 = document.getElementById('con_5').innerHTML;
  let key6 = document.getElementById('con_6').innerHTML;
  let key7 = document.getElementById('con_7').innerHTML;
  let key8 = document.getElementById('con_8').innerHTML;
  let key9 = document.getElementById('con_9').innerHTML;

  if((obj.id == "con_1")&&((key2==key && key3==key) || (key5==key && key9==key) ||(key4==key && key7==key))){
    console.log(`${key} Wins`);
    reset();
  }
  else if((obj.id == "con_2")&&((key1==key && key3==key) || (key5==key && key8==key))){
    console.log(`${key} Wins`);
    reset();
  }
  else if((obj.id == "con_3")&&((key1==key && key2==key) || (key5==key && key7==key) ||(key6==key && key9==key))){
    console.log(`${key} Wins`);
    reset();
  }
  else if((obj.id == "con_4")&&((key1==key && key7==key) || (key5==key && key6==key))){
    console.log(`${key} Wins`);
    reset();
  }
  else if((obj.id == "con_5")&&((key4==key && key6==key) || (key2==key && key8==key) ||(key1==key && key9==key) ||(key3==key && key7==key))){
    console.log(`${key} Wins`);
    reset();
  }
  
}

function reset(){
  for(let i = 1; i < 10; i++){
    document.getElementById(`con_${i}`).innerHTML = "";
  }
}