//step-1 Create all regular expressions and store them in an object. 

const regexPattern= {
    username: /^[a-zA-Z_][\d\w_]{5,}$/,
    phone: /^91-[987][0-9]{9}$/,
    password: /^[\w@#-$&]{10,15}$/,
    email:/^[a-zA-Z_]([\w\.])+@[a-zA-Z-]+\.([a-zA-Z]{3,8})(\.[a-zA-Z]{3,8})?$/   //me@mydomain.com.org
};

//Step-2 Create a validate function which returns true or false

function validate(pattern,text){
    return pattern.test(text);
}

// console.log(validate(regexPattern.password,'p@$$w0rd_123'))

//Step-3 Attach event handlers to input field and test the value it with pattern

var inputs= document.querySelectorAll('input');
inputs.forEach(input=>{
    input.addEventListener('keyup',(e)=>{
        let text= input.value;
        // console.log(text);
        // console.log(e.target.attributes.name)
        if(validate(regexPattern[e.target.attributes.name.value],text))
            console.log(true);
        else 
            console.log(false);
    })
})
