// Cross off list
$("ul").on("click", "li", function (e) {
    $(this).toggleClass("strikethrough")
})

// Delete
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(function (e) {
        $(this).remove()
    })
    // Error in console, but works as intended. Couldn't find out why.
    e.stopPropogation()
})

// Add new 
$("input[type='text']").keypress(function (e) {
    if (e.which == 13) {
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>")
        $(this).val("")
    }
})

// Plus sign fade add new todo
$("#plus").on("click", function (e) {
    $("input[type='text']").fadeToggle();
})