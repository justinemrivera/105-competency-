const KEY_USERS="users";

function saveUser(user){
    //load old data
    let data=readUsers();
    //merge
    data.push(user);
    //save
    let val=JSON.stringify(data);
    localStorage.setItem(KEY_USERS,val);
}
function readUsers(){
    let data = localStorage.getItem(KEY_USERS);
    if(!data){//NOT data 
    console.log("empty");
    return[];
}else{
    let list=JSON.parse(data);//parse string back into object
    return list;
    
  }
}
function clearUsers(){
    localStorage.removeItem(KEY_USERS);
}

function clearData(){
    //WARNING: this will delete all data
    localStorage.clear();
}