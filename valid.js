
let nameNode=document.getElementById("name");
 let errNode1=document.getElementById("err1");

 
document.getElementById("");
document.getElementById("");
document.getElementById("");
document.getElementById("");
document.getElementById("");
document.getElementById("");


function validate1(){
    errNode1.innerHTML="";
    nameNode.style.border="2px green solid";
    nameNode.style.backgroundColor='yellow';
    let name=nameNode.value;
    if(name===""){
    errNode1.innerHTML="<b>required<b>";
    nameNode.style.border="2px red solid";
    nameNode.style.backgroundColor='pink';    
    }
}
let ageNode=document.getElementById("age");
 let errNode2=document.getElementById("err2");

function validate2(){
    errNode2.innerHTML="";
    ageNode.style.border="2px green solid";
    ageNode.style.backgroundColor='yellow';
    let age=ageNode.value;
    if(age===""){
    errNode2.innerHTML="<b>required<b>";
    ageNode.style.border="2px red solid";
    ageNode.style.backgroundColor='pink';    
    }
    else if(age<0 || age>100)
    errNode2.innerHTML="<b>not valid<b>";
    ageNode.style.border="2px red solid";
    ageNode.style.backgroundColor='pink';  
}
let mailNode=document.getElementById("mail");
 let errNode3=document.getElementById("err3");
function validate3(){
    errNode3.innerHTML="";
    mailNode.style.border="2px green solid";
    mailNode.style.backgroundColor='yellow';
    let mail=mailNode.value;
    let ss=mail.substring(mail.indexOf('@')+1);
    console.log(ss);
    if(mail===""){
    errNode3.innerHTML="<b>required<b>";
    mailNode.style.border="2px red solid";
    mailNode.style.backgroundColor='pink';    
    }
    else if(age<0 || age>100)
    errNode3.innerHTML="<b>not valid<b>";
    mailNode.style.border="2px red solid";
    mailNode.style.backgroundColor='pink';  
}
let passNode=document.getElementById("password");
 let errNode4=document.getElementById("err4");
function validate3(){
    errNode3.innerHTML="";
    passNode.style.border="2px green solid";
    passNode.style.backgroundColor='yellow';
    let pass=passNode.value;
    let regexpress=new RegExp((?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$");
    console.log(ss);
    if(mail===""){
    errNode4.innerHTML="<b>required<b>";
    passNode.style.border="2px red solid";
    passNode.style.backgroundColor='pink';    
    }
    else if(age<0 || age>100)
    errNode4.innerHTML="<b>not valid<b>";
    passNode.style.border="2px red solid";
    passNode.style.backgroundColor='pink';  
}