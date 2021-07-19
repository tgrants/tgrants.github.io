function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		loadProjects(this);
	}
	};
	xmlhttp.open("GET", "projects.xml", true);
	xmlhttp.send();
}
