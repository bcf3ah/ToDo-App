/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//click an item to check it off
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");      
});

//click X to remove to do list
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();   
    });
    event.stopPropagation();
});

//add to-do items
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        //save the text users entered
        var toDoText = $(this).val();
        //create new li using toDoText via append() method and toDoText
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+toDoText+"</li>");
        //clear the content from the input bar
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});