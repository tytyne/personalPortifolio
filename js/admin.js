$(function(){

    var $name=$('#name');
    var $email=$('#email')
    var $password=$('#password')
    $('#signUp').on('click',(e)=>{
        e.preventDefault()
       
    
    var user={
        name:$name.val(),
        email:$email.val(),
        password:$password.val()
    
    };
    
    $.ajax({
        type:'POST',
        dataType: 'json',
        data:JSON.stringify(user),
        contentType: 'application/json;charset=UTF-8',
        url:"https://safe-hamlet-58854.herokuapp.com/api/admin",
     
        success:function(data){
            alert('registered succesful!')
            window.location.href = "https://safe-hamlet-58854.herokuapp.com/login";
         
        },
       
        error: function(jqXHR) {  
            if(jqXHR.status&&jqXHR.status==400){
                 alert(jqXHR.responseText);
                
            }else{
                alert("The user arlead exist!");
                location.reload();
            }
           
       }
       
    });
    
});
});