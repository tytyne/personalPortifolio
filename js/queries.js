

$(function(){

    var $name=$('#name');
    console.log()
    var $email=$('#email')
    var $subject=$('#subject');
    var $message=$('#message')
    var $qys=$('#dashboard')
    $('#query').on('click',(e)=>{  
    e.preventDefault()

    var queries={
        name:$name.val(),
        email:$email.val(),
        subject:$subject.val(),
        message:$message.val(),
    
    };
    console.log(name)
  


        $.ajax({
            type:'POST',
            dataType: 'json',
            data:JSON.stringify(queries),
            contentType: 'application/json;charset=UTF-8',
            url:'https://safe-hamlet-58854.herokuapp.com/api/post/query',

            success:function(data){
                alert('message sent!')
            
            },
        
            error: function(jqXHR) {  
                if(jqXHR.status&&jqXHR.status==400){
                    alert.error(jqXHR.responseText);
                    
                }else{
                    alert("Something went wrong");
                }
            
        }
        
        });

    

    });
    var queryTemplate=""+
    "<tr>"+
    "<td>{{name}}</td>"+
    "<td>{{email}}</td>"+
    "<td>{{subject}}</td>"+
    "<td>{{message}}</td>"+
    "<td><button data-id='{{_id}}' class='remove'>Delete</button></td>"+
    "</tr>"

    function addQuery(qy){
        $qys.append(Mustache.render(queryTemplate,qy))
    }
    
    $.ajax({

        type:'Get',
        url:'https://safe-hamlet-58854.herokuapp.com/api/queries',
        success:function(qys){
            $.each(qys,function(i,qy){
              addQuery(qy)
            })

        }

    })
    $qys.delegate('.remove','click',function(){
        var $tr=$(this).closest('tr')
        $.ajax({
            type:'DELETE',
            url:'https://safe-hamlet-58854.herokuapp.com/api/query/' +$(this).attr('data-id'),
            success:function(){
                $tr.fadeOut(300,function() {
                $(this).remove();
                })
            }
        })
    })


});

