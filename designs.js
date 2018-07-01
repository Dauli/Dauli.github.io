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
		let i = 1;
		while(i <= gridH){
			let row = $('<tr></tr>');
			for(let j = 1; j <= gridW; j++){
				let col = $('<td></td>');
				table.append(row);
				row.append(col);
			}
			i++;
		}
		$('#pixelCanvas').append(table);
	}
});