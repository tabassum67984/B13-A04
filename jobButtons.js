document.addEventListener("DOMContentLoaded", function() {

 
  document.querySelectorAll(".not-applied").forEach(function(btn){
    btn.addEventListener("click", function(){
      alert("Marked as NOT APPLIED");
      btn.className = "px-3 py-1 bg-gray-300 text-black border border-gray-300 rounded";
    });
  });

  
  document.querySelectorAll(".interview").forEach(function(btn){
    btn.addEventListener("click", function(){
      alert("Marked as INTERVIEW");
      btn.className = "px-3 py-1 bg-green-500 text-white border border-green-500 rounded";
    });
  });


  document.querySelectorAll(".rejected").forEach(function(btn){
    btn.addEventListener("click", function(){
      alert("Marked as REJECTED");
      btn.className = "px-3 py-1 bg-red-500 text-white border border-red-500 rounded";
    });
  });

});