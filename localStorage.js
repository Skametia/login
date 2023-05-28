let user= localStorage.get('user');
if(!user){
    user=[]
}
else{
    user =JSON.parse(user);
}
const newUser = {
    name: 'John',
    age: 25,
}
users.push(newUser);
localStorage.setItem('user',JSON.stringify(user));