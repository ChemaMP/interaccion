

function tiempoReal()
		{
			var tabla = $.ajax({
				url:'https://ihc-jamk.000webhostapp.com/backend/getDatos.php',
				dataType:'text',
				async:false
			}).responseText;

			document.getElementById("miTabla").innerHTML = tabla;
		}
		setInterval(tiempoReal, 1000);