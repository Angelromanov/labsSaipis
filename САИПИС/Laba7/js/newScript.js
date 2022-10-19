$.noConflict();
function testAjax(year) {
			console.log(year);
			$('#dd').dialog({
				title: "Описание",
				autoOpen: false,
				modal: true,
				width:600,
				height:300,
			});
			$("#dd").load("../html/results.html", function (){
				$("#birthN").after(function (){
					return "<span>" + " " + year + "</span>";
				});
			});
			$("#dd").css({'background-color': 'green'});
			$("#dd").dialog('open');
			$("#dd").on('dialogclose', function (){
				location.reload();
			})
}