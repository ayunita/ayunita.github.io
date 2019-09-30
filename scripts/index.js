$(document).ready(function () {
    $("#menu-list a").click(function () {
        var _page = $(this).attr("href").substr(1);
        console.log(_page);
        $("#" + _page).toggleClass("hidden");

        $("#home").addClass("hidden");
        $(".page:not(#" + _page + ")").addClass("hidden");
    });
});