date = document.getElementById("birth");

$( document ).ajaxSend(function() {
	console.log("ajaxSend");
  alert("ajaxSend");
});

$( document ).ajaxComplete(function() {
	console.log("ajaxComplete");
	alert("ajaxComplete");
});

$( document ).ajaxSuccess(function() {
	console.log("ajaxSuccess");
	alert("ajaxSuccess");
});

$( document ).ajaxError(function() {
	console.log("ajaxError");
	alert("ajaxError");
});

$( document ).ajaxStart(function() {
	console.log("ajaxStart");
	alert("ajaxStart");
});

$( document ).ajaxStop(function() {
	console.log("ajaxStop");
	alert("ajaxStop");

});

$(document).ready(function (){
	$('#lastButton').click(function(){
		if(date.value == ""){
			alert("Поле год рождения не должно быть пустым");
		}
		else if(date.value <= 1900 || date.value >=2022) {
			alert("Проверьте год рождения!!! Он должен быть в диапазоне от 1900 до 2022");
		}
		else{
			var rates = $('.textSize');
			var rate_value;
			for(var i = 0; i < rates.length; i++){
				if(rates[i].checked){
					rate_value = rates[i].value;
				}
			}
			var year = $('#birth').get(0).value;
			$('#auto').css("font-size", rate_value + "px");
			$('#auto').text("Born in " + year);
			$('#auto').css({"background-color": "white"});
		}
	});
});

$(document).ready(function (){
	$('#secondButton').click(function(){
		if(date.value == ""){
			alert("Поле год рождения не должно быть пустым");
		}
		else if(date.value <= 1900 || date.value >=2022) {
			alert("Проверьте год рождения!!! Он должен быть в диапазоне от 1900 до 2022");
		}
		else{
			$.getScript("../js/newScript.js", function () {
				testAjax($('#birth').get(0).value);
			});
		}
	});
});

$(document).ready(function (){
	$('#firstButton').click(function(){
		$.ajax({
			url: "../resource/text.xml",
			dataType: "xml",
			async: true,
			success: function(data){
				var birth = $(data).find("Birth").text();
				var university = $(data).find("University").text();
				var faculty = $(data).find("Faculty").text();

				$('#birth').attr("value", birth);
				$('#university').attr("value", university);
				$('#faculty').attr("value", faculty);
			},
			error: function () {
				var error = confirm('Произошла ошибка.Перезагрузить страницу?');
				if(error){
					location.reload()
				} else {
					window.location.href = 'error-page.html'
				}
			}
		});
	});
});

