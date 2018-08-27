/*$(function(){
	$('nav#menu a').hover(function(){
		var newWidth = $(this).width() +30;
		var newLeft = $(this).position().left;

		$('span.line').stop().animate({
			width: newWidth,
			left: newLeft
		}, 100)
	});
});*/

$(document).ready(function() {
    $('.parent1').click(function() {
        $('.sub-nav1').toggleClass('visible');
    });
});
$(document).ready(function() {
    $('.parent2').click(function() {
        $('.sub-nav2').toggleClass('visible');
    });
});
$(document).ready(function() {
    $('.parent3').click(function() {
        $('.sub-nav3').toggleClass('visible');
    });
});
$(document).ready(function() {
    $('.parent4').click(function() {
        $('.sub-nav4').toggleClass('visible');
    });
});
$(document).ready(function() {
    $('.parent5').click(function() {
        $('.sub-nav5').toggleClass('visible');
    });
});

/*function mudaicone(foto1,nome,foto2){
	var botao=document.getElementById(nome)
    botao.src=foto1;
    console.log(botao.src);
    if(botao.src.match("botao_mais_faq")){
        botao.src=foto2;   
    }
    
    /*document.getElementById(nome).src=foto2;*/
/*}*/

function mudafoto(botao){
    var foto = document.getElementById(botao);
    if(foto.src.match("menos")){
        foto.src="_imagens/botao_mais_faq.png";
    }
    else{
        foto.src="_imagens/botao_menos_faq.png";
    }
}

