let inputs = document.querySelectorAll('input');
let icon = document.querySelector('.fa');
let password = document.querySelector('#psw');

icon.addEventListener('click',(e)=>{
    if(password.type === 'password'){
        password.type = 'text';
        e.target.setAttribute("class","fa fa-eye-slash");
    }else{
        password.type = 'password';
        e.target.setAttribute("class","fa fa-eye");
    }
});

let patterns = {
    email:/^(\w){5,12}(\d){2}@(\w){5,10}\.(\w){3,5}$/g,
    password:/^(\w){5,12}(\d){2}$/g,
};

inputs.forEach((input)=>{
     input.addEventListener('keyup',(e)=>{
        validate(e.target,patterns[e.target.attributes.name.value])
     });
});

function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
 }
 