
        /*CHEESEBURGER ICON SCRIPT*/
function myFunction()
$(".hamburger")
    .append("<div/><div/><div/>")
    .click(function (e) {
        $(this).toggleClass("expanded");
        e.stopPropogation();
    });

$("body").click(function (e) {
    $(".expanded").removeClass("expanded");
});
