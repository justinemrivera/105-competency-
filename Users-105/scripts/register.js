console.log("Users register");
//create constructor
class User{
constructor(email,pass,first,last,age,address,phone,payment,color){
    this.email=email;
    this.password=pass;
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}
    }

function registerUser(){
    let email= $("#textEmail").val();
    let password =$("#textPassword").val();
    let first=$("#textFirst").val();
    let last= $("#textLast").val();
    let age= $("#textAge").val();
    let address= $("#textAddress").val();
    let phone= $("#textPhone").val();
    let payment= $("#selPayment").val();
    let color= $("#textColor").val();
    
    let user=new User(email,password,first,last,age,address,phone,payment,color);
    console.log(user);
    
    saveUser(user);
}


function init(){
    console.log("init function");
    $("#btnSave").click(registerUser);
}

window.onload=init;


            
                    
