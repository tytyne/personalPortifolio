

$(function(){

    var $header=$('#header')
    var $content=$('#content');
    var $category=$('#category')
    var $tag=$('#tag')
    var $articles=$('#dashboard')
    $('#article').on('click',(e)=>{  
    e.preventDefault()

    var arts={
        header:$header.val(),
        content:$content.val(),
        category:$category.val(),
        tag:$tag.val(),
    
    };
    console.log(name)
  


        $.ajax({
            type:'POST',
            dataType: 'json',
            data:JSON.stringify(arts),
            contentType: 'application/json;charset=UTF-8',
            url:'https://safe-hamlet-58854.herokuapp.com/api/post/article',

            success:function(data){
                alert('article sent!')
            
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
    var queryTemplate=$("#article-template").html()
 
    function addArticle(article){
        $articles.append(Mustache.render(queryTemplate,article))
    }
    
    $.ajax({

        type:'Get',
        url:'https://safe-hamlet-58854.herokuapp.com/api/articles',
        success:function(articles){
            $.each(articles,function(i,article){
              addArticle(article)
            })

        }

    })
    $articles.delegate('.remove','click',function(){
        var $tr=$(this).closest('tr')
        $.ajax({
            type:'DELETE',
            url:'https://safe-hamlet-58854.herokuapp.com/api/article/' +$(this).attr('data-id'),
            success:function(){
                $tr.fadeOut(300,function() {
                $(this).remove();
                })
            }
        })
    })

    $articles.delegate('.editArticle','click',function(){
        var $tr=$(this).closest('tr')
        $li.find(input.header).val($li.find('span.header').html())
        $li.find(input.content).val($li.find('span.content').html())
        $li.find(input.category).val($li.find('span.category').html())
        $li.find(input.tag).val($li.find('span.tag').html())
    })
    $articles.delegate('.cancelEdit','click',function(){
        var $tr=$(this).closest('tr').removeClass('edit')
    })
    
    $articles.delegate('.saveEdit','click',function(){
        var $tr=$(this).closest('tr');
        var  arti={
            header:$tr.find('input.header').val(),
            content:$tr.find('input.content').val(),
            category:$tr.find('input.category').val(),
            tag:$tr.find('input.tag').val(),
        }
    })

    $.ajax({
        type:'PUT',
        url:'https://safe-hamlet-58854.herokuapp.com/api/article'+$tr.attr(data-id),
        data:arti,
        success:function(newArticle){
            addArticle(newArticle)
            $tr.find('span.header').html(arti.header)
            $tr.find('span.content').html(arti.content)
            $tr.find('span.category').html(arti.category)
            $tr.find('span.tag').html(arti.tag)
        },
        error:function(){
            alert('error saving article')
        }
            
    })

});

