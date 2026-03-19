//1a and 1b 
var a = prompt("Enter grade");
if(a.toLowerCase()=="a" || a.toLowerCase()=="b"){
    alert("Excellent!");
}
else if(a.toLowerCase()=="c"){
    alert("You Passed");
}
else if(a.toLowerCase()=="d"){
    alert("Needs improvement");
}
else if(a.toLowerCase()=="f"){
    alert("Failed");
}
else{
    alert("enter valid grade");
}
var a = prompt("Enter grade");
switch(a.toLowerCase()){
    case "a":
    case "b":
        alert("Excellent!");
        break;
    case "c":
        alert("You passed!");
        break;
    case "d":
        alert("Needs improvement");
        break;
    case "f":
        alert("Failed");
        break;
    default:
        alert("Enter valid grade")
        break;
}
//#2:

a = prompt("Are You Wearing Your ID");
switch(a.toLowerCase()){
    case "no":
        alert("Please show ID");
        break;
    case "yes":
        alert("Welcome to the Event");
        break;
    default:
        alert("invalid");
        break;
}





a=prompt("Are you a student? (yes/no)");
b=prompt("Are you a senior citizen? (yes/no)");
switch(a,b){
    case "yes":
        alert("You get discounted fare");
        break;
    case "no":
        alert("U pay reg.fare");
        break;
}
  


a =Number(prompt("Enter score (0-100"));

switch(true){
case (a <0):
    alert("Invalid score");
     break;

case (a <60):
    alert("review");
     break;

case (a <75):
    alert("Passed");
    break;

case (a <90):
    alert("Good job");
     break;

case (a <= 100):
    alert("Ex.");
     break;

default:
    alert("invalid score");
     break;
}


a = prompt("A B or C");
b=a.toLowerCase();
switch(b){
    case "a":
        alert("1gb,1d");
        break;
    case "b":
            alert("5gb,7d");
        break;
    case "c":
            alert("10gb,30d");
        break;
    default:
        alert("invalid");
        break;
}

var b =0;
v = ["a","e","i","o","u"];
a = prompt("Enter name");
for(let y= 0; y<a.length;  y++){
    if(a[y]==v[0]||a[y]==v[1]||a[y]==v[2]||a[y]==v[3]||a[y]==v[4]){
        
        b++;
    }
}
switch(true){
    case (b != 1):
        alert("Name has "+ b + " vowels ");
        break;
    case (b==1):
        alert("Name has "+ b + " vowel ");
        break;
    }

var b=0;
a=prompt("Enter Username");
for(var y =0; y<a.length;y++){
    if(a[y]===" "){
        b++;
    }
}
switch(true){
case (b>=1):
    alert("No spaces!");
    break;

case(a.length<6):
    alert("Minimum 6");
    break;

default:
    alert("Valid user");
    break;
}


var y=0;
var p = "Grade9JS";
while(y <3){
    b = prompt("Enter pw");
    switch(true){

    case(b === p):
        alert("Login Success");
        y=0;
        break;
    
    case (b !== p):
        y++
        alert("Incorrect");
        break;
    }
    

}  
switch (true){
    case(y==3):
        
        alert("Acc locked");
        break;
}
