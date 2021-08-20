function displayUsers(users){
    //travel the array
for(let i=0;i<users.length;i++){
    //get each user
let user = users[i];
//display the user
let syntax=`
<tr>
<td>${user.email}</td>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.age}</td>
<td>${user.payment}</td>
<td>${user.address}</td>
<td>${user.phone}</td>
<td>${user.color}</td>

</tr>
`;
$("#tblUsers").append(syntax);
    //append the user to the DOM
}
}

function init(){
console.log("Listing users");
var users = readUsers(); //this fn is on the storemanager
displayUsers(users);
//hook event
$("#btnClear").click(function(){
clearUsers();
location.reload();
})
}

window.onload=init;