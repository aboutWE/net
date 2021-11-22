

//page back buttons begins//

function subscribeBack(){
window.location="index.html";
}
//page back buttons ends//




//Feedback expression smiley script begins//


var activeHappy = document.querySelector(".feedback_expression_0").addEventListener("click", ()=>{
    var Happy = document.getElementById("feedback_expression_happy").style.display="block";
    var Happy = document.getElementById("feedback_expression_happy").style.color="yellow";
    var Happy = document.getElementById("feedback_expression_sad").style.letterSpacing="2px";
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="none";
    var Sad = document.getElementById("feedback_expression_sad").style.display="none";

});
var activeNeutral = document.querySelector(".feedback_expression_1").addEventListener("click", ()=>{
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="block";
    var Happy = document.getElementById("feedback_expression_happy").style.display="none";
    var Sad = document.getElementById("feedback_expression_sad").style.display="none";

});
var activeSad = document.querySelector(".feedback_expression_2").addEventListener("click", ()=>{
    var Sad = document.getElementById("feedback_expression_sad").style.display="block";
    var Sad = document.getElementById("feedback_expression_sad").style.color="red";
    var Sad = document.getElementById("feedback_expression_sad").style.letterSpacing="2px";
    var Happy = document.getElementById("feedback_expression_happy").style.display="none";
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="none";

});

//Feedback expression smiley script ends//




// var sendButtonEffect = document.getElementById("aboutwe_feedback_button");

// document.addEventListener('mouseover', ()=> {

// sendButtonEffec.style.innerHTML="Sending";
// });








//reset feedback form expressions fields//
function resetExpressions() {
    var Happy = document.getElementById("feedback_expression_happy").style.display="none";
    var Neutral = document.getElementById("feedback_expression_neutral").style.display="none";
    var Sad = document.getElementById("feedback_expression_sad").style.display="none";

}


function sendEffect() {
 document.querySelector(".send_feedback_effect").innerHTML="Sending...";

}



//reset feedback form expressions fields//




//function to manupulate subscribe buttons DOM


var subscribe_email_js_validation = document.getElementById("aboutwe_subscribe_input_email_index");



var addSubscribeButtonClickEvent = document.querySelector(".aboutwe_subscribe_button_desktop");
addSubscribeButtonClickEvent.addEventListener("click", function() {


    if (subscribe_email_js_validation.value == '')
    {alert("Field is important.");
    subscribe_email_js_validation.focus();
    subscribe_email_js_validation.style.border="1px solid red";
    return false;}
    document.querySelector("#subscribe_tag").innerHTML="Subscribing..";
    return true;

});


window.addEventListener("load", function() {
    document.querySelector("#subscribe_tag").innerHTML="Subscribe"; 
})

document.querySelector(".aboutwe_subscribe_reset_button_desktop").addEventListener("click", function () {

    document.querySelector("#subscribe_tag").innerHTML="Subscribe";
})




//script for onclick display options for subscribe option, donate option and contact us option.



var clickEvent_subscribe = document.getElementById("subscribe_word");
var dropDownFunction_subscribe = document.getElementById("subscribe_dropdown");
var clickEvent_donate = document.getElementById("donate_word");
var dropDownFunction_donate = document.getElementById("donate_dropdown");
var clickEvent_contactus = document.getElementById("contactus_word");
var dropDownFunction_contactus = document.getElementById("contactus_dropdown");




clickEvent_subscribe.addEventListener("click", function(){

dropDownFunction_subscribe.style.display="block";
dropDownFunction_donate.style.display="none";
dropDownFunction_contactus.style.display="none";

}); clickEvent_subscribe.addEventListener("dblclick", function(){

    dropDownFunction_subscribe.style.display="none";
    
    });







    clickEvent_donate.addEventListener("click", function(){

        dropDownFunction_donate.style.display="block";
        dropDownFunction_subscribe.style.display="none";
        dropDownFunction_contactus.style.display="none";
        
        }); clickEvent_donate.addEventListener("dblclick", function(){
        
            dropDownFunction_donate.style.display="none";
            
            });

            





clickEvent_contactus.addEventListener("click", ()=>{

    dropDownFunction_contactus.style.display="block";
    dropDownFunction_subscribe.style.display="none";
    dropDownFunction_donate.style.display="none";
    
    }); clickEvent_contactus.addEventListener("dblclick", ()=>{
    
        dropDownFunction_contactus.style.display="none";
        
        });
    

//script for onclick display options for subscribe option, donate option and contact us option.






























































//Scroll toTop Button script begins//

var toTop = document.querySelector(".back_to_top");
window.addEventListener("scroll", ()=>{
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}


})

//Scroll toTop Button script ends//
