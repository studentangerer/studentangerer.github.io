function myFunction() {
  var stundenlohn = document.getElementById("Stundenlohn").value;
  var arbeitszeit = document.getElementById("Arbeitszeit").value;
  var time_sec = arbeitszeit * 60*60;
  var earnings = stundenlohn /60/60;
  var earned = 0;
  var start = 0;
  var test = 4;
  document.getElementById("p1").innerHTML = "You have earned: ";

  setInterval(updateCountdown,1000);

  function updateCountdown() {
    document.getElementById("p1").innerHTML = "You have earned: " + earned.toFixed(2) + " EUR.";
    earned = earned + earnings;

  }  
}




