var equipment = new Array(equipmentList.length).fill(0);

$(document).ready(function() {
	init();
	$("#combo01").change(function() {
		rePaintTable();
		rePaintElement();
	}).change();
	
	$("#table01").on('change', 'input', function() {
		equipment[this.dataset.index]=this.value;
		rePaintElement();
	});
});


function rePaintTable() {
	$('#table01').empty();
	for ( var i = 0; i < equipmentList.length; i++ ) {
		if ( equipmentList[i].job[$("#combo01").val()] ) {
			var tr = $('<tr>');
			tr.append("<td> "+ equipmentList[i].name);
			tr.append("<td> "+ equipmentList[i].description);
			tr.append("<td> "+ "<input type='number' id=inputNumber"+i+" value="+equipment[i]+" data-index="+i+">");
			$('#table01').append(tr);
		}
	}
}

function rePaintElement() {
	var str1 = "";
	var str2 = "";
	for ( var key in require1 ) {
		require1[key] = 0;
	}
	for ( var key in require2 ) {
		require2[key] = 0;
	}
	for ( var i = 0; i < equipmentList.length; i++ ) {
		for ( var key in equipmentList[i].require1 ) {
			require1[key] += equipmentList[i].require1[key] * equipment[i];
		}
		for ( var key in equipmentList[i].require2 ) {
			require2[key] += equipmentList[i].require2[key] * equipment[i];
		}
		
	}
	
	for ( var key in require1 ) {
		if ( require1[key] > 0) {
			str1 += key + " x " + require1[key] + "\n";
		}
	}

	for ( var key in require2 ) {
		if ( require2[key] > 0) {
			str2 += key + " x " + require2[key] + "\n";
			
		}
	}
	$("#equip01").html(str1);
	$("#equip02").html(str2);
}

function rePaint() {
	rePaintTable();
	rePaintElement();
}

function allGreen() {
	for ( var i = 0; i < equipment.length; i++ ) {
		if ( equipmentList[i].job[$("#combo01").val()] ) {
			equipment[i] = equipmentList[i].allGreen;
		}
	}
}

function init() {
	for ( var i = 0; i < jobList.length; i++ ) {
		$('#combo01').append($('<option>').html(jobList[i]).val(i));
	}

}
