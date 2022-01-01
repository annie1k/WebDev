// $(document).ready(function(){

//     
//     console.log($("h1").css("color"));

// })

$("h1").addClass("big-title margin-50");

$("h1").text("Bye");
// $("button").text("Don't click me!");
// $("button").text("<em>YO</em>");
$("button").html("<em>Don't click me!</em>");

$("a").attr("href","http://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color","yellow");
});

$("button").click(function(){
    $("h1").css("color","red");
    $("h1").slideUp().slideDown().animate({opacity: 0.5}).animate({opacity: 1});
    // hide show toggle fadeIn fadeOut fadeToggle slideUp slideDown slideToggle also works
});

$("body").keypress(function(event) {
    // console.log(event.key);
    $("h1").html(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","blue");
})

// prepend and append will add element inside the h1 element right before and after
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");


