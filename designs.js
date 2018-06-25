$('document').ready(function(){
	//globl variables
	let gridH, gridW, colorP;

	//submit button handler
	$('#sizePicker').submit(function(event){
		$('tr').remove();
		event.preventDefault();
		gridH = $('#inputHeight').val();
		gridW = $('#inputWeight').val();
		makeGrid(gridH, gridW);
		$('td').each(function(index){
			$(this).on('click', function(event){
				colorP = $('#colorPicker').val();
				$(event.target).css('background', colorP);
			});
		});
	});

	//function that handle grid creation accordingly
	function makeGrid(gridH, gridW){
		let table = $('table');
		for(let i = 1; i <= gridH; i++){
				let row = $('<tr></tr>');
			for(let j = 1; j <= gridW; j++){
				let col = $('<td></td>');
				table.append(row);
				row.append(col);
			}
		}
		$('#pixelCanvas').append(table);
	}
});