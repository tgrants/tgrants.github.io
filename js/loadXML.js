function loadXMLDoc(url) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else {
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET",url,false);
	xmlhttp.send(null);
	document.getElementById('main').innerHTML=xmlhttp.responseText;
}
document.addEventListener('DOMContentLoaded', (event) => {
    loadXMLDoc('projects.xml');
});
