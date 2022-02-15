// alert("The NaavJeevan ATM Machine Bank");


// function showe()
// {
//     $("#begin").show();
//     $("#indicator2").hide();
//     $("#loading").hide();
//     $("#cash1").hide();
//     clearInterval(ani);
// }
//       function showes()
// {
//     $("#result").show();

//     $("#bill").hide();
//     $("#cash1").hide();
//      $("#indicator2").hide();
    
//     clearInterval(mani);
// } 
            
// $(document).ready(function(){

             
//              ani = setInterval("showe()", 9000);
//              $("#loading").show();
             

//  $("#begin").hide();
    
//     $(".welcome").hide();
//     $("#success").hide ();
//     $("#deti").hide();
//     $("#error").hide();
//     $("#chgpin").hide();
//     $("#balen").hide();
//     $("#witdrw").hide();
//     $("#result").hide();
//     $("#wrong").hide();
//     $("#depst").hide();
//     $("#result2").hide();
//     $("#final").hide();
//     $("#pinwrg").hide();
//     $("#beginwrg").hide();
//     $("#bill").hide();
//     $("#cash1").hide();
//     $("#indicator2").hide();







            var toammount=5000;
            var tammount=parseInt(toammount);
        function back(){
            var exp=document.getElementById('forms').textview.value
            
            exp = exp.substring(0,exp.length - 1);
           
            document.getElementById('forms').textview.value=exp;  
        };
        
        
    function cardcheck() {
        
        document.getElementById('msg').innerHTML="Processing...";
        var textv=document.getElementById('textview').value;
       if(textv=="")
           {
               document.getElementById('msg').innerHTML="Card is no entered";
           }
        else{
             if(textv==1234)
                 {
                      document.getElementById('msg').style.color="white";
                      document.getElementById('msg2').innerHTML="Card No. is correct";
                      document.getElementById('msg').innerHTML="Enter your password";
                     document.getElementById('textview').value="";
                     document.getElementById('btnproced').setAttribute("onclick","passcheck()");
                 }
            else{
                document.getElementById('msg').innerHTML="Card No. is incorrect";
                document.getElementById('msg').style.color="red";
            }
        }
        };
         
        function passcheck() {
            var textv=document.getElementById('textview').value;
          if(textv=="")
           {
               document.getElementById('msg').innerHTML="password is no entered";
               
           }
        else{
             if(textv==9876)
                 {
                      document.getElementById('msg').style.color="white";
                      document.getElementById('msg2').innerHTML="password is correct";
                      document.getElementById('msg').innerHTML="choose option";
                     document.getElementById('textview').value="";
                      document.getElementById('menu').style.display="block";
                     document.getElementById('textview').style.display="none";
                      document.getElementById('btnproced').setAttribute("onclick","");
                     
                 }
            else{
                document.getElementById('msg2').innerHTML="";
                document.getElementById('msg').innerHTML="password is incorrect";
                                document.getElementById('msg').style.color="red";

            }
        }
        };
        function withdraw() {
          
            document.getElementById('msg2').innerHTML="this is your captcha code, please Enter";
              document.getElementById('menu').style.display="none";
            document.getElementById('menuback').style.display="block";
             
             document.getElementById('btnproced').setAttribute("onclick","captchavarification()");
            document.getElementById('textview').style.display="block";
            captcha();
            
            
            
        };
        function calculation1() {
            
             var textview=document.getElementById('textview').value;
            var textv=parseInt(textview);
            if(textv=="" || textv==0)
                {
                    document.getElementById('msg2').innerHTML="amount is not entered";
                    document.getElementById('msg').innerHTML="";
                }
            else{
                if(tammount>1 && textv<tammount){
                     tammount=tammount-textv;

             document.getElementById('msg2').innerHTML="your remaining balance is";
            document.getElementById('msg').innerHTML=tammount;
             document.getElementById('textview').value="";

                }
                else{
                    document.getElementById('msg').innerHTML="insufficient balance!!!!!!!!";
                }
              
            }
            
        };
        function credit() {
          
            document.getElementById('msg').innerHTML="Enter your Amount";
              document.getElementById('menu').style.display="none";
            document.getElementById('menuback').style.display="block";
             document.getElementById('msg2').innerHTML="";
             document.getElementById('btnproced').setAttribute("onclick","calculation2()");
            document.getElementById('textview').style.display="block";
            
            
        };
        function calculation2() {
             var textv=document.getElementById('textview').value;
            if(textv=="" || textv==0)
                {
                    document.getElementById('msg2').innerHTML="amount is not entered";
                    document.getElementById('msg').innerHTML="";
                }
            else{
                tammount=tammount+parseFloat(textv);
             document.getElementById('msg2').innerHTML="your updated balance is";
            document.getElementById('msg').innerHTML=tammount;
             document.getElementById('textview').value="";
            }
            
            
        };
        function menuback() {
            document.getElementById('menu').style.display="block";
            document.getElementById('menuback').style.display="none";
             document.getElementById('btnproced').setAttribute("onclick","");
            document.getElementById('mini-st').style.display="none";
            document.getElementById('msg').innerHTML="choose option";
            document.getElementById('msg2').innerHTML="";
                        document.getElementById('captcha').style.display="none";
        };
        function minist() {
             var textv=document.getElementById('textview').value;
             document.getElementById('mini-st').style.display="block";
            document.getElementById('textview').style.display="none";
            document.getElementById('msg').innerHTML="Your Mini Statement is:-";
            document.getElementById('msg2').innerHTML="";
             document.getElementById('main-balance').innerHTML=tammount;
             document.getElementById('menuback').style.display="block";
             document.getElementById('credit').innerHTML=textv;
             document.getElementById('debit').innerHTML=textv;
            document.getElementById('menu').style.display="none";
            
            
        };
        
//        captcha code
        
         function captcha(){
        
        var captcha1=Math.random()*9999;
    captcha1=Math.floor(captcha1);       
        var ra=document.getElementById('msg').innerHTML=captcha1;
             document.getElementById('captcha').style.display="block";
       
    };
function captchavarification() {
    var varifycaptcha=document.getElementById('msg').textContent;
document.getElementById('msg2').innerHTML="";
    var textview=document.getElementById('textview').value;
    if(varifycaptcha==textview)
        {
            document.getElementById('msg2').innerHTML="captcha matched successfully!!!!!!!!!!"
             document.getElementById('btnproced').setAttribute("onclick","calculation1()");
            document.getElementById('textview').value="";
            document.getElementById('msg').innerHTML="Enter your amount";
            document.getElementById('captcha').style.display="none";
            
            
        }
    else{
        document.getElementById('msg2').innerHTML="captcha not match. Try again";
         document.getElementById('btnproced').setAttribute("onclick","captchavarification()");
         document.getElementById('textview').value="";
        document.getElementById('msg1').innerHTML="Enter your captcha again";
    }
    
};
function exit(){
    document.getElementById('msg').innerHTML="Enter your Atm No.";
    document.getElementById('btnproced').setAttribute("onclick","cardcheck()");
     document.getElementById('msg2').innerHTML="";
    document.getElementById('menu').style.display="none";
    document.getElementById('textview').value="";
     document.getElementById('textview').style.display="block";
}
    
