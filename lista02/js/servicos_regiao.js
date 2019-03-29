
/*Quando o botão cujo id é botao-consultar é pressionado, a seguinte função é disparada */

$(document).ready(function(){
	$.getJSON("https://servicodados.ibge.gov.br/api/v1/localidades/regioes", function(data) {
	$(data).each(function(indice, regiao){
	$("#regiao").append('<option value="'+ regiao.id +'">' + regiao.sigla + '</option>');
});
});
});
$("#botao-consultar").click(function(e) {
        e.preventDefault();   
		
		var idRegiao = $("#regiao").val();
		$.getJSON("https://servicodados.ibge.gov.br/api/v1/localidades/regioes/"+idRegiao+"/estados/", function(data) {
		
		//Limpando a tabela caso haja algum dado anterior
		$("#estados").html("");
		
		//Percorrendo o objeto retornado pelo json e recuperando cada um dos estados
		$(data).each(function(indice, estado){
			$("#estados").append("<tr><td>"+ estado.nome + "</td><td>"+ estado.sigla + "</td></tr>");

		});
		
		
		}).done(function() {
			$("#mensagem").addClass("alert-success");
			$("#mensagem").html("Os dados solicitados estão disponíveis a seguir: " );
		}).fail(function() {
			$("#mensagem").addClass("alert-danger");
			$("#mensagem").html("Dados indisponíveis para essa região" );
		});
});
