## Porovnání distribucí

<canvas id="graphdistro"></canvas>
<input id="multiple1" type="checkbox">Vícenásobné porovnání <br/>

## Porovnání grafických rozhraní

<canvas id="graphgui"></canvas>
<input id="multiple2" type="checkbox">Vícenásobné porovnání <br>

## Porovnání podpory distribucí

<canvas id="graphdistrogui"></canvas>
<input id="multiple3" type="checkbox">Vícenásobné porovnání <br>

## Porovnání podpory grafických rozhraní

<canvas id="graphguidistro"></canvas>
<input id="multiple4" type="checkbox">Vícenásobné porovnání <br>

<script>
window.onload = function () {

	function multiple(value) {
		$('#multiple1').prop('checked', value);
		$('#multiple2').prop('checked', value);
		$('#multiple3').prop('checked', value);
		$('#multiple4').prop('checked', value);
	}
	$('#multiple1').click(function() { multiple($(this).is(':checked')); });
	$('#multiple2').click(function() { multiple($(this).is(':checked')); });
	$('#multiple3').click(function() { multiple($(this).is(':checked')); });
	$('#multiple4').click(function() { multiple($(this).is(':checked')); });

	var newLegendClickHandler = function (e, legendItem) {
		var index = legendItem.datasetIndex;
		if( $("#multiple1").is(':checked') ) {
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);
			meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;
			ci.update();
		} else {
			this.chart.data.datasets.forEach(function(ds) {
				if (legendItem.text != ds.label) {
					ds.hidden = true;
				} else {
					ds.hidden = false;
				}
			});
			this.chart.update();
		}
	};
	var options5 = {
		scale: {
			ticks: {
				suggestedMin: 0,
				suggestedMax: 5,
				stepSize: 1
			}
		},
		legend: {
			onClick: newLegendClickHandler
		}
	};
	var options3 = {
		scale: {
			ticks: {
				suggestedMin: 0,
				suggestedMax: 3,
				stepSize: 1
			}
		},
		legend: {
			onClick: newLegendClickHandler
		}
	};

	// Distros
	var distrodatasets = [];
	Object.keys(distributions).forEach(function(distro) {
		var distrodataset = {
			data: distributions[distro],
			label: distro,
			borderColor: bordercolors[distrocolor[distro]],
			backgroundColor: backgroundcolors[distrocolor[distro]],
		}
		distrodatasets.push(distrodataset);
	});

	var distrodata = {
		labels: Object.keys(distro_questions),
		datasets: distrodatasets
	};

	// GUI
	var guidatasets = [];
	Object.keys(guis).forEach(function(gui) {
		var guidataset = {
			data: guis[gui],
			label: gui,
			borderColor: bordercolors[guicolor[gui]],
			backgroundColor: backgroundcolors[guicolor[gui]],
		}
		guidatasets.push(guidataset);
	});

	var guidata = {
		labels: Object.keys(gui_questions),
		datasets: guidatasets
	};

	// Distrogui
	var distroguidatasets = [];
	Object.keys(distributions).forEach(function(distro) {
		var distroguidataset = {
			data: distrogui[distro],
			label: distro,
			borderColor: bordercolors[distrocolor[distro]],
			backgroundColor: backgroundcolors[distrocolor[distro]],
		}
		distroguidatasets.push(distroguidataset);
	});

	var distroguidata = {
		labels: Object.keys(guis),
		datasets: distroguidatasets
	};

	// Guidistro
	var guidistrodatasets = [];
	Object.keys(guis).forEach(function(gui) {
		var guidistrodataset = {
			data: guidistro[gui],
			label: gui,
			borderColor: bordercolors[guicolor[gui]],
			backgroundColor: backgroundcolors[guicolor[gui]],
		}
		guidistrodatasets.push(guidistrodataset);
	});

	var guidistrodata = {
		labels: Object.keys(distributions),
		datasets: guidistrodatasets
	};

	// Draw charts
	var distrochart = new Chart('graphdistro', {
		type: 'radar',
		data: distrodata,
		options: options5
	});

	var guichart = new Chart('graphgui', {
		type: 'radar',
		data: guidata,
		options: options5
	});

	var distroguichart = new Chart('graphdistrogui', {
		type: 'radar',
		data: distroguidata,
		options: options3
	});

	var guidistrochart = new Chart('graphguidistro', {
		type: 'radar',
		data: guidistrodata,
		options: options3
	});
}
</script>
