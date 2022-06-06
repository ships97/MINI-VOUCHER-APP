document.querySelector('form').addEventListener('submit',signup); 
 
 let data = JSON.parse(localStorage.getItem("user")) || [];
 console.log(data);

 function signup(){
     event.preventDefault();

     let signUpDetails = {
         name : document.getElementById("name").value,
         email : document.getElementById("email").value,
         address : document.getElementById("address").value,
         wallet : document.getElementById("amount").value,
     }
     data.push(signUpDetails);
     console.log(data);
     localStorage.setItem("user",JSON.stringify(data));
    //  window.location.href = "index.html";
    document.getElementById("name").value ="";
    document.getElementById("email").value ="";
    document.getElementById("address").value ="";
    document.getElementById("amount").value ="";
 }