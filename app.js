function myFunction() {
  var stundenlohn = document.getElementById("stundenlohn").value;
  var arbeitszeit = document.getElementById("arbeitszeit").value;
  var time_sec = arbeitszeit * 60*60;
  var earnings = stundenlohn /60/60;
  var earned = 0;
  var start = 0;
  var test = 4;
  setInterval(updateCountdown,1000);

  function updateCountdown() {
    if(stundenlohn > 25){
      document.getElementById("text2").innerHTML = "Man... You are making some money."
    }
    document.getElementById("p1").innerHTML = "You have earned: " + earned.toFixed(2) + " EUR.";
    earned = earned + earnings;

  }  
}

const numb = document.querySelector(".numb");
      let counter = 0;
      setInterval(()=>{
        if(counter == 100){
          clearInterval();
        }else{
          counter+=1;
          numb.textContent = counter + "%";
        }
      }, 300);



