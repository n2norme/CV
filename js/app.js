import "../node_modules/jquery/dist/jquery";
import "../node_modules/popper.js/dist/popper"
import '../node_modules/bootstrap/dist/js/bootstrap';

$(function(){

    $(".navbar a, footer a").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
        
    });

})

