/*
PRACTICANDO =)

$(document).ready(function(){
	$(".red").click(function(){
		$(this).text("X")
	})

	$(".orange").click(function(){
		$(this).text("O")
	})
})*/

$(document).ready(function(){
    $(".package").on("click",marcar);
        $(this).html("x")

        $(".reset").on("click",function(c){
        $(".package").html("")
    });

    $(".package").on("click",function(c){
        var x1=$("#spot1").text()
        var x2=$("#spot2").text()
        var x3=$("#spot3").text()
        var x4=$("#spot4").text()
        var x5=$("#spot5").text()
        var x6=$("#spot6").text()
        var x7=$("#spot7").text()
        var x8=$("#spot8").text()
        var x9=$("#spot9").text()

        if(x1==x2 && x2==x3 && x1!="")
            alert("Jugador de la marca "+x1+ " gana");
        else if(x4==x5 && x5==x6 && x4!="")
            alert("Jugador de la marca "+x4+ " gana");
        else if(x7==x8 && x8==x9 && x7!="")
            alert("Jugador de la marca "+x7+ " gana");
        else if(x1==x4 && x4==x7 && x1!="")
            alert("Jugador de la marca "+x1+ " gana");
        else if(x2==x5 && x5==x8 && x2!="")
            alert("Jugador de la marca "+x2+ " gana");
        else if(x3==x6 && x6==x9 && x3!="")
            alert("Jugador de la marca "+x3+ " gana");
        else if(x1==x5 && x5==x9 && x1!="")
            alert("Jugador de la marca "+x1+ " gana");
        else if(x3==x5 && x5==x7 && x3!="")
            alert("Jugador de la marca "+x3+ " gana");
        if(i==9){
            alert("Empate")
            i=0;
        }
    });
});

var i=0;
function marcar(){
    i++;
    if(i%2==0)
        $(this).text("o");
    else
        $(this).text("x");
}
    






