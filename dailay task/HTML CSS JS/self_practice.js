

function saddam(){

    var fname = document.getElementById('fname').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var add = document.getElementById('add').value
    var sub = document.getElementById('sub').value

  var result = (fname , lname , email , add ,sub);

   if(result==0){
    // document.write("PLEASE INSERT YOUR DATA");
    alert("PLEASE INSERT YOUR DATA")
   }
  
else if(fname=="ashfaque" && lname=="alam" && email=="mashfaque624@gmail.com" && add=="patna" && sub=="math"){
    // document.getElementById("demo").innerHTML="WELCOME TO MY ACCOUTNT";
    location.replace("page.html")
}
else{
document.getElementById("demo").innerHTML="YOUR ACCOUNT NOT CONNECT RETRY AGAIN";
};


// var result= document.write(fname , lname , email , add ,sub).value;
   
};

 



 

