
/*Quando o botão cujo id é botao-consultar é pressionado, a seguinte função é disparada */
$("#botao-consultar").click(function(e) {
        e.preventDefault();     
		var cep = $("#cep").val();
		$.getJSON("https://viacep.com.br/ws/"+cep+"/json/", function(data) {
		$("#logradouro").html(data.logradouro);
		$("#complemento").html(data.complemento);
		$("#bairro").html(data.bairro);
		$("#localidade").html(data.localidade);
		$("#uf").html(data.uf);
		/* complete aqui com os demais dados */
		
		
		}).done(function() {
			$("#mensagem").addClass("alert-success");
			$("#mensagem").html("Os dados solicitados estão disponíveis a seguir: " );
		})
		.fail(function() {
			$("#mensagem").addClass("alert-danger");
			$("#mensagem").html("Dados para esse CEP não estão disponíveis" );
		});
});



/*Quando o botão cujo id é botao-limpar é pressionado, a seguinte função é disparada */
$("#botao-limpar").click(function(e) {
        e.preventDefault();     
		$("#cep").html();
		$("#mensagem").removeClass("alert-danger");
		$("#mensagem").removeClass("alert-success");
		$("#mensagem").html();
		/* Limpe os demais valores da tabela  */
});
