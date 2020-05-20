$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip(); 

    setTimeout(function(){
        $('#show').slideDown(2500);
    },30);
    
  setTimeout(function(){
        $('#user').slideDown(1000);
    },2500);
    
    
    $("#user").focusin(function()
        {
          $("#password").slideDown(800); 
        });
    
        $("#password").focusin(function()
        {
          $("#rem,#login").slideDown(800); 
        });
    
    
        $("#login").click(function()
        {
          $("#pop,.arrow").fadeIn(200);
            ("#notfication").play(); 
        });
     
        $("#verfy,#verfy_").click(function()
        {
          $("#pop,.arrow").fadeOut();
        
        });
    
    
    var notfication=document.getElementById("addsound"),
        autoplay=document.getElementById("login");
    
      autoplay.onclick = function (){
        notfication.play();  
      }  
        
    
    
});


