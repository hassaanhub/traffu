$('.input-1').keydown(function(){
    var a = $('.input-1').val();
    var b = a.length;
    $('.cara-1').text(b+1);
    var c = a.split(' ');
    $('.wo-1').text(c.length);
});