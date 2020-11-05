

$(function(){

  
    var $qys=$('#dashboard')
  
    var queryTemplate=""+
    "<tr>"+
    "<td>{{name}}</td>"+
    "<td>{{email}}</td>"+
 
    "<td><button data-id='{{_id}}' class='remove'>Delete</button></td>"+
    "</tr>"

    function addQuery(qy){
        $qys.append(Mustache.render(queryTemplate,qy))
    }
    
    $.ajax({

        type:'Get',
        url:'https://safe-hamlet-58854.herokuapp.com/api/users',
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
            url:'https://safe-hamlet-58854.herokuapp.com/api/user/' +$(this).attr('data-id'),
            success:function(){
                $tr.fadeOut(300,function() {
                $(this).remove();
                })
            }
        })
    })


});

