// Colors
var bordercolors = {
	red:		'rgb(255,	99,		132)',
	orange:		'rgb(255,	159,	64)',
	yellow:		'rgb(255,	205,	86)',
	green:		'rgb(75,	192,	192)',
	blue:		'rgb(54,	162,	235)',
	purple:		'rgb(153,	102,	255)',
	grey:		'rgb(201,	203,	207)',
	navy:		'rgb(0,		0,		128)',
	teal:		'rgb(0,		128,	128)',
	olive:		'rgb(128,	128,	0)',
	maroon:		'rgb(128,	0,		0)',
	magenta:	'rgb(255,	0,		255)',
	cyan:		'rgb(0,		255,	255)',
};
var backgroundcolors = {
	red: 'rgba(255, 99, 132, 0.25)',
	orange: 'rgba(255, 159, 64, 0.25)',
	yellow: 'rgba(255, 205, 86, 0.25)',
	green: 'rgba(75, 192, 192, 0.25)',
	blue: 'rgba(54, 162, 235, 0.25)',
	purple: 'rgba(153, 102, 255, 0.25)',
	grey: 'rgba(201, 203, 207, 0.25)',
	navy: 'rgba(0, 0, 128, 0.25)',
	teal: 'rgba(0, 128, 128, 0.25)',
	olive: 'rgba(128, 128, 0, 0.25)',
	maroon: 'rgba(128, 0, 0, 0.25)',
	magenta: 'rgba(255, 0, 255, 0.25)',
	cyan: 'rgba(0, 255, 255, 0.25)',
};

// GUI features
var gui_questions = {};
gui_questions["moderni"] = "Jak moc moderní má rozhraní být?"
gui_questions["konfigurovatelne"] = "Jak moc konfigurovatelné má být?";
gui_questions["macosx"] = "Má vypadat jako Apple MAC OS X?";
gui_questions["windows"] = "Má vypadat jako Windows?";
gui_questions["tradicni"] = "Má mít tradiční ovládání?";
gui_questions["hw"] = "Jak nenáročné má mít hardwarové požadavky?";

// GUI
var guis = {};
guis["Budgie"] =		[4, 1, 3, 1, 4, 3];
guis["Cinnamon"] =		[4, 4, 1, 4, 5, 2];
guis["Deepin"] =		[4, 2, 5, 1, 3, 2];
guis["Elementary"] =	[5, 3, 4, 1, 4, 2];
guis["Enlightenmnt"] =	[3, 2, 4, 3, 4, 3];
guis["Gnome3"] =		[5, 3, 1, 1, 2, 1];
guis["KDE"] =			[3, 5, 2, 5, 5, 1];
guis["LXDE"] =			[1, 5, 1, 4, 5, 5];
guis["LXQT"] =			[1, 5, 1, 4, 5, 5];
guis["Mate"] =			[1, 5, 2, 4, 5, 5];
guis["Unity"] =			[2, 1, 3, 2, 3, 3];
guis["Xfce"] =			[1, 5, 2, 4, 5, 4];

var guisagr = {};

var guicolor = {};
guicolor["Budgie"] =		"red";
guicolor["Cinnamon"] =		"orange";
guicolor["Deepin"] =		"yellow";
guicolor["Elementary"] =	"green";
guicolor["Enlightenmnt"] =	"blue";
guicolor["Gnome3"] =		"purple";
guicolor["KDE"] =			"navy";
guicolor["LXDE"] =			"teal";
guicolor["LXQT"] =			"olive";
guicolor["Mate"] =			"maroon";
guicolor["Unity"] =			"magenta";
guicolor["Xfce"] =			"cyan";

// Distro features
var distro_questions = {};
distro_questions["instalace"] = "Jak snadná má být instalace distribuce?";
distro_questions["komunita"] = "Jak velkou komunitu (lidi používající distribuci) má mít?";
distro_questions["nejnovejsi"] = "Jak moc má používat nejnovější technologie?";
distro_questions["customizovatelnost"] = "Jakou míru customizovatelnosti (možnosti úpravy) má distribuce nabízet?";
distro_questions["dokumentace"] = "Jak dobrá je dokumentace?";
distro_questions["hardware"] = "Jak dobrá je podpora různého a moderního hardwaru?";
distro_questions["software"] = "Jak dobrá je podpora výrobců softwaru a jak moc integruje software od výrobců?";

// Distros
var distributions = {};
distributions["Arch Linux"] =	[1, 2, 5, 4, 5, 2, 5];
distributions["Debian"] =		[3, 5, 2, 5, 4, 3, 4];
distributions["Fedora"] =		[5, 3, 5, 3, 2, 2, 2];
distributions["Linux Mint"] =	[5, 3, 3, 1, 2, 4, 4];
distributions["Open Suse"] =	[4, 3, 3, 4, 5, 3, 2];
distributions["Ubuntu"] =		[5, 5, 3, 2, 4, 5, 5];
var distributionsagr = {};

var distrocolor = {};
distrocolor["Arch Linux"] =	"red";
distrocolor["Debian"] =		"orange";
distrocolor["Fedora"] =		"yellow";
distrocolor["Linux Mint"] =	"green";
distrocolor["Open Suse"] =	"blue";
distrocolor["Ubuntu"] =		"purple";

// Distro gui
var distrogui = {};
distrogui["Arch Linux"] =	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
distrogui["Debian"] =		[3, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 3];
distrogui["Fedora"] =		[2, 3, 2, 2, 2, 3, 3, 1, 3, 3, 1, 3];
distrogui["Linux Mint"] =	[1, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 3];
distrogui["Open Suse"] =	[2, 3, 2, 2, 2, 3, 3, 3, 2, 3, 1, 3];
distrogui["Ubuntu"] =		[3, 2, 2, 2, 2, 3, 3, 3, 2, 2, 3, 3];

var guidistro = {};
guidistro["Budgie"] =		[2, 3, 2, 1, 2, 3];
guidistro["Cinnamon"] =		[2, 2, 3, 3, 3, 2];
guidistro["Deepin"] =		[2, 2, 2, 1, 2, 2];
guidistro["Elementary"] =	[2, 2, 2, 1, 2, 2];
guidistro["Enlightenmnt"] =	[2, 2, 2, 1, 2, 2];
guidistro["Gnome3"] =		[2, 3, 3, 1, 3, 3];
guidistro["KDE"] =			[2, 3, 3, 3, 3, 3];
guidistro["LXDE"] =			[2, 2, 1, 1, 3, 3];
guidistro["LXQT"] =			[2, 2, 3, 1, 2, 2];
guidistro["Mate"] =			[2, 2, 3, 3, 3, 2];
guidistro["Unity"] =		[2, 2, 1, 1, 1, 3];
guidistro["Xfce"] =			[2, 3, 3, 3, 3, 3];

var distroguidata = {
	"Arch Linux": {
		"Budgie":		2,
		"Cinnamon":		2,
		"Deepin":		2,
		"Elementary":	2,
		"Gnome3":		2,
		"KDE":			2,
		"LXDE":			2,
		"LXQT":			2,
		"Mate":			2,
		"Unity":		2,
		"Xfce":			2
	},
	"Debian": {
		"Budgie":		3,
		"Cinnamon":		2,
		"Deepin":		2,
		"Elementary":	2,
		"Gnome3":		3,
		"KDE":			3,
		"LXDE":			2,
		"LXQT":			2,
		"Mate":			2,
		"Unity":		2,
		"Xfce":			3
	},
	"Fedora": {
		"Budgie":		2,
		"Cinnamon":		3,
		"Deepin":		2,
		"Elementary":	2,
		"Gnome3":		3,
		"KDE":			3,
		"LXDE":			1,
		"LXQT":			3,
		"Mate":			3,
		"Unity":		1,
		"Xfce":			3
	},
	"Linux Mint": {
		"Budgie":		1,
		"Cinnamon":		3,
		"Deepin":		1,
		"Elementary":	1,
		"Gnome3":		1,
		"KDE":			3,
		"LXDE":			1,
		"LXQT":			1,
		"Mate":			3,
		"Unity":		1,
		"Xfce":			3
	},
	"Open Suse": {
		"Budgie":		2,
		"Cinnamon":		3,
		"Deepin":		2,
		"Elementary":	2,
		"Gnome3":		3,
		"KDE":			3,
		"LXDE":			3,
		"LXQT":			2,
		"Mate":			3,
		"Unity":		1,
		"Xfce":			3
	},
	"Ubuntu": {
		"Budgie":		3,
		"Cinnamon":		2,
		"Deepin":		2,
		"Elementary":	2,
		"Gnome3":		3,
		"KDE":			3,
		"LXDE":			3,
		"LXQT":			2,
		"Mate":			2,
		"Unity":		3,
		"Xfce":			3
	}
};
distrogui["Arch Linux"] =	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
distrogui["Debian"] =		[3, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 3];
distrogui["Fedora"] =		[2, 3, 2, 2, 2, 3, 3, 1, 3, 3, 1, 3];
distrogui["Linux Mint"] =	[1, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 3];
distrogui["Open Suse"] =	[2, 3, 2, 2, 2, 3, 3, 3, 2, 3, 1, 3];
distrogui["Ubuntu"] =		[3, 2, 2, 2, 2, 3, 3, 3, 2, 2, 3, 3];


// Guestion answers
var resultguis = Object.keys(guis);

function dataagregate() {
	Object.keys(guis).forEach(function(gui) {
		var datas = guis[gui];
		guisagr[gui] = [];
		datas.forEach(function(data) {
			guisagr[gui].push(Math.floor(data/2+1))
		});
	});
	Object.keys(distributions).forEach(function(distro) {
		var datas = distributions[distro];
		distributionsagr[distro] = [];
		datas.forEach(function(data) {
			distributionsagr[distro].push(Math.floor(data/2+1))
		});
	});
}

function whichdistro(distroelement) {
	$("#distroquestion").html('<div style="clear: both; font-style: italic; text-align: right;">1 - vůbec, 3 - nejvíc</div>');
	for (var distroindex = 0; distroindex < Object.keys(distro_questions).length; distroindex++) {
		var distrostate = Object.keys(distro_questions)[distroindex];
		console.log("Asking for", distrostate, ":", distro_questions[distrostate]);
		$("#distroquestion").append(get_question_slider(distro_questions[distrostate], distrostate, 3, 1))
		init_slider(distrostate)
	}
	distroresult();
}

function distroresult() {
	var resultdistros = Object.keys(distributions);
	console.log("count results");
	var selectedgui = $("#selectedgui").val();
	if(selectedgui != "ignore") {
		var easyinstall = $('#easyinstall').slider('getValue');
		console.log("Deleting distro because of gui")
		console.log("all distro:", resultdistros)
		console.log("list guis:", resultguis)
		resultdistros.forEach(function(distro) {
			var todelete = true;
			Object.keys(guis).forEach(function(gui) {
				if (resultguis.indexOf(gui) != -1 && distroguidata[distro][gui] >= easyinstall) {
					console.log(distro," is fine because of", gui, resultguis.indexOf(gui), distroguidata[distro][gui])
					todelete = false;
				}
			});
			if (todelete) {
				console.log("Detelting "+distro+" because it's gui incompatible")
				delete resultdistros[resultdistros.indexOf(distro)]
			}
		});
		console.log("all distro:", resultdistros)
	} else if(selectedgui != "ignore") {
		console.log("Select all whish supports"+ selectedgui)
	}
	for (var distroindex = 0; distroindex < Object.keys(distro_questions).length; distroindex++) {
		var distrostate = Object.keys(distro_questions)[distroindex];
		var value = $('#'+distrostate).slider('getValue');
		console.log("result: "+distrostate," => "+value);
		resultdistros.forEach(function(distro) {
			//console.log("comparing",distro,"it's feature",distributionsagr[distro][distroindex]);
			if(value > distributionsagr[distro][distroindex]) {
				console.log("=> deleting");
				delete resultdistros[resultdistros.indexOf(distro)];
			}
		});
	}
	console.log("possible distros", resultdistros);
	$("#distroresult").html('<b>Možné distribuce:</b> ');
	var nodistro = true;
	resultdistros.forEach(function(distro) {
		if (!nodistro) $("#distroresult").append(", ");
		$("#distroresult").append(distro);
		nodistro = false;
	});
	if (nodistro) {
		$("#distroresult").append("Zadaným parametrům bohužel nevyhovuje žádná distribuce, zkuste parametry změnit.");
	}
}

function get_answers(count_of_possibilites, radioname, defaultvalue=1) {
	var html = '';
	html += "<div class=\"slides\" style=\"float: right;\">";
	html += "<input id=\""+radioname+"\" name=\""+radioname+"\" data-slider-ticks=\"[1, 2, 3]\" data-slider-ticks-snap-bounds=\"30\" data-slider-ticks-labels=\"[1, 2, 3]\" type=\"text\" data-slider-min=\"1\" data-slider-max=\""+count_of_possibilites+"\" data-slider-step=\"1\" data-slider-value=\""+defaultvalue+"\"/ size=\"5\" data-slider-tooltip=\"hide\" data-slider-ticks-snap-bounds=\"30\">";
	html += "</div>";
	return html;
}

function get_question(question) {
	var html = '';
	html += '<div class=\"answer\">';
	html += question;
	html += '</div>';
	return html;
}

function init_slider(radioname) {
	$('#'+radioname).slider().on('change', function(ev) {
		result();
	});
}

function get_question_slider(question, radioname, count_of_possibilites=3, defaultvalue=1) {
	var html = '';
	html += "<div style=\"clear: both\">";
	html += get_answers(count_of_possibilites, radioname, defaultvalue);
	html += get_question(question);
	html += "</div>";
	return html;
}

function whichgui(quetionelement) {
	$("#guiquestion").html('<div style="clear: both; font-style: italic; text-align: right;">1 - vůbec, 3 - nejvíc</div>');
	for (var guiindex = 0; guiindex < Object.keys(gui_questions).length; guiindex++) {
		var guistate = Object.keys(gui_questions)[guiindex];
		console.log("Asking for", guistate, ":", gui_questions[guistate]);
		$("#guiquestion").append(get_question_slider(gui_questions[guistate], guistate, 3, 1))
		init_slider(guistate)
	}
	$("#guiinstall").append(get_question_slider("Jak moc je těžké grafické rozhraní nainstalovat?", "easyinstall", 3, 3))
	init_slider("easyinstall")
	$("#guiinstall").append("<div style=\"clear: both; font-style: italic; text-align: right;\">1 - jen pro profíky, 2 - složité (pro zkušenější), 3 - jednoduché (pro začátečníky)</div>");
	guiresult();
}

function guiresult() {
	var selectedgui = $("#selectedgui").val();
	if (selectedgui == "ignore") {
		return;
	}
	if (selectedgui != "unknown") {
		return;
	} else {
		resultguis = Object.keys(guis);
	}
	console.log("count results");
	for (var guiindex = 0; guiindex < Object.keys(gui_questions).length; guiindex++) {
		var guistate = Object.keys(gui_questions)[guiindex];
		var value = $('#'+guistate).slider('getValue');
		console.log("result: "+guistate," => "+value);
		resultguis.forEach(function(gui) {
			console.log("comparing",gui,"it's feature",guisagr[gui][guiindex]);
			if(value > guisagr[gui][guiindex]) {
				console.log("=> deleting");
				delete resultguis[resultguis.indexOf(gui)];
			}
		});
	}
	console.log("possible guis", resultguis);
	var nogui = true;
	$("#guiresult").html('<b>Možná grafická rozhraní:</b> ');
	resultguis.forEach(function(gui) {
		if (!nogui) $("#guiresult").append(", ");
		$("#guiresult").append(gui)
		nogui = false;
	});
	if (nogui) {
		$("#guiresult").append("Zadaným parametrům bohužel nevyhovuje žádné grafické rozhraní, zkuste parametry změnit.");
		$("#distroresult").html("");
	}
}

function get_radio_gui(value, name, checked=false) {
	html = "<option value=\""+value+"\"";
	if(checked) html += " selected=\"true\"";
	html += ">"+name+"</option>";
	return html;
}

function guilist(guilistelement) {
	dataagregate();
	var htmlselect = '';
	htmlselect += "<select id=\"selectedgui\" onchange=\"guichanged();\" name=\"gui\">";
	htmlselect += get_radio_gui("ignore","Nezáleží mi na grafickém rozhraní");
	htmlselect += get_radio_gui("unknown","Nevím, jaké preferuji grafické rozhraní", true);
	Object.keys(guis).forEach(function(gui) {
		htmlselect += get_radio_gui(gui, gui);
	});
	htmlselect += "</select>";
	$("#"+guilistelement).append(htmlselect);
	guichanged();
}

function guichanged() {
	resultguis = Object.keys(guis);
	var selectedgui = $("#selectedgui").val();
	console.log("Selected gui: "+selectedgui);

	if(selectedgui == "unknown") {
		$("#guiquestion").show();
	} else {
		if(selectedgui != "ignore") {
			resultguis = [selectedgui];
			console.log("set result gui to", resultguis);
			$("#guiresult").html("<b>Zvolené grafické rozhraní:</b> "+selectedgui);
		} else {
			$("#guiresult").html("");
		}
		$("#guiquestion").hide();
	}
	result();
}

function result() {
	guiresult();
	distroresult();
}
