//Created By TAPPS https://togar.app
//version: EARLY ALPHA V0.2.9

window.addEventListener('load', (event) => {
	console.log('T-Logg Started. Created By TAPPS');
	console.log('https://togar.app')
});

function autoTFinish(tlog) {
	tlog.onkeypress = function() {
		var key = window.event.keyCode || window.event.charCode;
		if (key !== 8) {
			//if backspace is being held/pressed, allow user to delete t-log element
			setTimeout(() => {
				if (tlog.value.endsWith("<t>")) {
					var finished = tlog.value + "TEXT</t>"
					tlog.value = finished
				}
			}, 50);


		};

	}
}

function runTconsole() {
	var tlogBefore = document.getElementById('tlog').value
	document.getElementById('console').innerHTML = ""

	if (document.createElement("p")) {
		const p = document.createElement("p");
		p.innerHTML = tlogBefore
		p.setAttribute('class', 'tlog-console-text')
		p.setAttribute('id', 'tct')
		document.getElementById("console").appendChild(p);
	}
	var nodeList = document.querySelectorAll('[c]');
	nodeList.forEach(node => {
		console.log(node.innerHTML)
		if (node.textContent.startsWith('//')) {
			node.hidden = true
		} else {
			var tlogAfter_color = node.getAttribute("c")
			if (node.getAttribute("wms") != "" && Number.isInteger(parseInt(node.getAttribute("wms")))) {
				//add with wait (MS)'
				node.hidden = true
				setTimeout(() => {
					node.hidden = false
					node.style.color = tlogAfter_color
				}, node.getAttribute("wms"));
			} else {
				//add without wait
				node.hidden = false
				node.style.color = tlogAfter_color
			}
		}
	})
}