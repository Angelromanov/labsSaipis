$('#changeID').on("click", function () {
    $('.id2' , '.container div:odd').attr('class', 'idNew');
    $('.id1' , '.container div:odd').attr('id', 'idNew1');
    $('.container div:even').attr('id', 'idNew2');

    var fontSize = parseInt($("p").css("font-size"));
    fontSize = fontSize * 2 + "px";
    $('.id1','.container div:odd').css({'font-size':fontSize});
    $('.container div:even').css({'font-size':fontSize});

    $('.id1','.container div:odd').css({'border':'5px solid red'});
    $('.container div:even p').css({'border':'5px solid green'});

    $('.container div:odd:last-child img').css({'border':'5px solid red'});
    $('.container div:even img').css({'border':'5px solid green'});

});

$('#changeStyle').on("click", function () {
    $("img").fadeTo(2000, 0, "linear");
    $("#changeID").prop('disabled', true);
});
