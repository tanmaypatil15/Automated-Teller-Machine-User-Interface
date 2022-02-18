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
        document.getElementById('msg').innerHTML="Enter Your Account No.";
        document.getElementById('msg1').innerHTML="Card No. is Not Entered";
        var obj = document.getElementById("msg1");
        obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
        }
    else{
            if(textv==1234)
                {
                    // document.getElementById('msg').style.color="white";
                    var obj = document.getElementById("msg1");
                    obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
                    document.getElementById('msg1').innerHTML="Card No. is correct";
                    document.getElementById('msg').innerHTML="Enter your password";
                    document.getElementById('textview').value="";
                    document.getElementById('btnproced').setAttribute("onclick","passcheck()");
                }
        else{
            document.getElementById('msg1').innerHTML="Card No. is Incorrect";
            var obj = document.getElementById("msg1");
            obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
            // document.getElementById('msg4').style.color="red";
            // document.getElementById('msg4').style.background="white";
        }
    }
};
        
function passcheck() {
    var textv=document.getElementById('textview').value;
    if(textv=="")
    {
        document.getElementById('msg1').innerHTML="Password is not Entered";
        var obj = document.getElementById("msg1");
        obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
        
    }
    else{
        if(textv==9876)
            {
                // document.getElementById('msg').style.color="white";
                document.getElementById('msg1').innerHTML="Password is Correct";
                var obj = document.getElementById("msg1");
                obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
                document.getElementById('msg').innerHTML="choose option";
                document.getElementById('textview').value="";
                document.getElementById('menu').style.display="inline";
                document.getElementById('textview').style.display="none";
                document.getElementById('btnproced').setAttribute("onclick","");
                
        }
        else{
                document.getElementById('msg1').innerHTML="";
                document.getElementById('msg1').innerHTML="Password is Incorrect";
                var obj = document.getElementById("msg1");
                obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
                document.getElementById('msg1').style.color="red";

        }
    }
};


function withdraw() {
    document.getElementById('msg4').innerHTML="This is your Captcha Code, Please Enter in the TextBox";
    var obj = document.getElementById("msg4");
    obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
    document.getElementById('menuback').style.display="inline";
    document.getElementById('btnproced').setAttribute("onclick","captchavarification()");
    document.getElementById('textview').style.display="inline";
    document.getElementById('msg1').style.display="none";
    document.getElementById('menu').style.display="none";
    captcha();
};


function calculation1() {
    var textview=document.getElementById('textview').value;
    var textv=parseInt(textview);

    if(textv=="" || textv==0)
        {
            document.getElementById('msg6').innerHTML="Amount is Not Entered";
            var obj = document.getElementById("msg6");
            obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
            document.getElementById('msg').innerHTML="";
        }

    else{

        if(tammount>1 && textv<tammount)
        {
            tammount=tammount-textv;
            document.getElementById('msg6').innerHTML="Your Remaining Balance";
            var obj = document.getElementById("msg6");
            obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
            document.getElementById('msg6').innerHTML=tammount;
            document.getElementById('textview').value="";
        }
        else{
            document.getElementById('msg5').innerHTML="insufficient balance!!";
            var obj = document.getElementById("msg5");
            obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
            document.getElementById('msg5').style.color="red";
        }
        
    }
    
};
    

function credit() {
    document.getElementById('msg').innerHTML="Enter your Credit Amount";
    document.getElementById('menu').style.display="none";
    document.getElementById('menuback').style.display="inline";
    document.getElementById('msg1').innerHTML="";
    document.getElementById('btnproced').setAttribute("onclick","calculation2()");
    document.getElementById('textview').style.display="inline";
};


function calculation2() {
    var textv=document.getElementById('textview').value;
    if(textv=="" || textv==0){
        document.getElementById('msg1').innerHTML="Amount is Not Entered";
        document.getElementById('msg').innerHTML="Enter your Credit Amount";
    }
    else{
        tammount=tammount+parseFloat(textv);
        document.getElementById('msg1').innerHTML="Updated Balance:";
        document.getElementById('msg2').innerHTML=tammount;
        var obj = document.getElementById("msg2");
        obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
        document.getElementById('textview').value="";
    }  
};

    function menuback() {
        document.getElementById('menu').style.display="inline";
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
        document.getElementById('msg1').innerHTML="Mini Statement:";
        document.getElementById('msg2').innerHTML="";
        var obj = document.getElementById("mini-st");
        obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px 20px 20px 20px; border-radius: 10px; background-color: #fff;");
        document.getElementById('Ac-holder').innerHTML="Username: Pankaj Naik";
        document.getElementById('main-balance').innerHTML="Total Balance:"+ tammount;
        document.getElementById('menuback').style.display="inline";
        document.getElementById('credit').innerHTML="Credit:"+ textv;
        document.getElementById('debit').innerHTML="Debit:"+ textv;
        document.getElementById('menu').style.display="none";
        document.getElementById('msg2').style.display="none";
    };
    

// captcha code

function captcha(){
    var captcha1=Math.random()*9999;
    captcha1=Math.floor(captcha1);       
    document.getElementById('msg').innerHTML="Enter the Captcha";
    var ra=document.getElementById('msg2').innerHTML=captcha1;
    var obj = document.getElementById("msg2");
    obj.setAttribute("style", "width: 130%; height: 40%; padding: 20px; border-radius: 10px; background-color: #fff;");
    document.getElementById('captcha').style.display="inline";
};

function captchavarification() {
    var varifycaptcha=document.getElementById('msg2').textContent;
    document.getElementById('msg2').innerHTML="";
    var textview=document.getElementById('textview').value;

    if(varifycaptcha==textview)
        {
        document.getElementById('msg2').innerHTML="Captcha Matched Successfully!!"
        document.getElementById('btnproced').setAttribute("onclick","calculation1()");
        document.getElementById('textview').value="";
        document.getElementById('msg').innerHTML="Enter Your Amount";
        document.getElementById('msg4').style.display="none";
        document.getElementById('captcha').style.display="none";
    }
    else{
        document.getElementById('msg2').innerHTML="Captcha Not Match. Try Again";
        document.getElementById('msg4').style.display="none";
        document.getElementById('btnproced').setAttribute("onclick","captchavarification()");
        document.getElementById('textview').value="";
        // document.getElementById('msg2').innerHTML="Enter Your Captcha Again";
    }
};


function exit(){
    document.getElementById('msg').innerHTML="Enter Your Account No.";
    document.getElementById('btnproced').setAttribute("onclick","cardcheck()");
    document.getElementById('msg3').innerHTML="";
    document.getElementById('menuback').style.display="none";
    document.getElementById('menu').style.display="none";
    document.getElementById('msg1').style.display="none";
    document.getElementById('msg2').style.display="none";
    document.getElementById('msg4').style.display="none";
    document.getElementById('msg5').style.display="none";
    document.getElementById('msg6').style.display="none";
    document.getElementById('textview').value="";
    document.getElementById('textview').style.display="inline";
}
    
