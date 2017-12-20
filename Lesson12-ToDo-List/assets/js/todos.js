// check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
})

//click on x to delete todos
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    })
    event.stopPropagation()
})
//add input to todo list
$("input[type='text']").keypress(function (event) {
    //if user presses the return-key
    if (event.which === 13) {
        //grabbing new todo text from input
        let todoText = $(this).val()
        $(this).val("")
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
})
