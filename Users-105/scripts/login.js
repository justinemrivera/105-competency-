 function login(){
     let email=$('#textEmail').val();
     let password=$('#textPassword').val();
     console.log(email, password);
    
     let userList=readUsers();//from the localstorage
     let found=false;

     for(var i=0;i<userList.length;i++){
         let user=userList[i];
         if(user.email===email &&user.password===password){
             found=true;
             console.log("You are now logged in!");
             //sent the user to another page
             window.location="users.html";
         }
     }

    if(!found){
        console.log("Invalid credentials!");
        $('#alerterror').removeClass("hide");
        setTimeout(function(){
            $('#alerterror').addClass("hide");//show the div
      },3000);

        }
       
          }
    
 
     

function init(){
    console.log("Home page");

    $('#btnLogin').click(login);
}

window.onload=init;