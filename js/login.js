$(function(){

    var $email=$('#email')
    var $password=$('#password')
    $('#signIn').on('click',(e)=>{
        e.preventDefault()
    
    var user={
        email:$email.val(),
        password:$password.val()
    
    };
    
    $.ajax({
        type:'POST',
        dataType: 'json',
        data:JSON.stringify(user),
        contentType: 'application/json;charset=UTF-8',
        url:'https://safe-hamlet-58854.herokuapp.com/api/auth',
     
        success:function(data){
            alert('login succesful!')
            window.location.href = "/";
         
        },
       
        error: function(jqXHR) {  
            if(jqXHR.status&&jqXHR.status==400){
                 alert(jqXHR.responseText);
                
            }else{
                alert("Something went wrong");
            }
           
       }
       
    });
    
});
});