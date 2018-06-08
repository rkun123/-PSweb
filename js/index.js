//ProduceSomethingWebsite

window.onload = function(){
    //title
    console.log("Loaded!!");
    var title = $(".titleWrapper");
    var body = $("body");
    var navBtn = $(".navBtn");
    resized();
    //isotope
    $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    })

    $(".grid-item").hover(function(){
        $(this).animate({
            margin:"10px"
        }, 200);
    },function(){
        $(this).animate({
            margin: "20px"
        }, 200);
    });
    //button effect
    $(".navBtn").hover(function(){
        console.log("Hover!!");
        $(this).animate({
            border:"solid 1px 1px black"
        }, 200);
    },function(){
        console.log("Hover!!");
        $(this).animate({
            border:"none"
        }, 200)
    });

    function resized(){
        console.log("Resized!!");
        //title positioning
        title.css("top",window.innerHeight / 2 - title.height() / 2+"px");
        }
    $(window).resize(resized);


}
//navbtns listener
function navBtnOnClick(num){
    console.log(num)
    var section = $(".pageWrapper")[num];
    console.log(section);
    $("body").animate({
        scrollTop: section.offsetTop
    })
    //$(window).scrollTop(section.scrollTop());

}
