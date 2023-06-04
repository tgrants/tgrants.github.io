function loadRecent(path, id) {
	fetch(path)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		var container = document.getElementById(id);
		let i = 1;
		data.forEach(article => {
			if(i > 3) return;
			
			// Get item
			var item = container.querySelector(".item-" + i);

			// Title
			let titleNode = document.createElement("h2");
			let titleText = document.createTextNode(article.title);
			titleNode.appendChild(titleText);
			item.appendChild(titleNode);

			// Content
			let paragraphNode = document.createElement("p");
			paragraphNode.innerHTML = article.text;
			item.appendChild(paragraphNode);

			let imageNode = document.createElement("img");
			imageNode.setAttribute("src", article.thumbnail);
			imageNode.setAttribute("alt", article.thumbnail_alt);
			item.appendChild(imageNode);

			// Read more link
			let linkNode = document.createElement("a");
			linkNode.setAttribute("href", "/?articles&name=" + article.link);
			linkNode.setAttribute("class", "rm-link");
			let linkText = document.createTextNode("Read more");
			linkNode.appendChild(linkText);
			item.appendChild(linkNode);

			i++;
		});
	})
}

function loadAll(path) {
	var content = document.getElementById("content");

	fetch(path)
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		let i = 0;
		data.forEach(article => {
			// Add horizontal rule, if necessary
			if(i > 0) {
				let hrNode = document.createElement("hr");
				content.appendChild(hrNode);
			}
			else {
				i++;
			}

			// Create article
			let articleNode = document.createElement("article");
			articleNode.setAttribute("class", "article");

			// Create title
			let titleNode = document.createElement("h2");
			let titleText = document.createTextNode(article.title);
			titleNode.appendChild(titleText);
			articleNode.appendChild(titleNode);

			// Create dates
			let paragraphNode = document.createElement("p"); 
			let paragraphText = document.createTextNode("Published " + article.published);
			if (article.published != article.edited) {
				paragraphText.nodeValue += ", last edited " + article.edited;
			}
			paragraphNode.appendChild(paragraphText);
			paragraphNode.setAttribute("class", "date");
			articleNode.appendChild(paragraphNode);

			// Create content
			paragraphNode = document.createElement("p"); 
			paragraphNode.innerHTML = article.text;
			articleNode.appendChild(paragraphNode);

			let imageNode = document.createElement("img");
			imageNode.setAttribute("src", article.thumbnail);
			imageNode.setAttribute("alt", article.thumbnail_alt);
			imageNode.setAttribute("class", "article-image");
			articleNode.appendChild(imageNode);

			// Read more link
			let linkNode = document.createElement("a");
			linkNode.setAttribute("href", "/?articles&name=" + article.link);
			linkNode.setAttribute("class", "rm-link");
			let linkText = document.createTextNode("Read more");
			linkNode.appendChild(linkText);
			articleNode.appendChild(linkNode);

			content.appendChild(articleNode);
		});
	})
}