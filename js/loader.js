function loadRecent(path, name) {
    fetch(path)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Get element
        //var = document.getElementById("recent-" + name);

        // Set names
        title.textContent = data.name;
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

            // Create title, append to article
            let titleNode = document.createElement("h2");
            let titleText = document.createTextNode(article.title);
            titleNode.appendChild(titleText);
            articleNode.appendChild(titleNode);

            // Create dates, append to article
            let paragraphNode = document.createElement("p"); 
            let paragraphText = document.createTextNode("Published " + article.publishedDate);
            if (article.publishedDate != article.editedDate) {
                paragraphText.nodeValue += ", last edited " + article.editedDate;
            }
            paragraphNode.appendChild(paragraphText);
            paragraphNode.setAttribute("class", "date");
            articleNode.appendChild(paragraphNode);

            // Create content, append to article
            article.content.forEach(element => {
                if(element.type == "text"){
                    let paragraphNode = document.createElement("p");
                    paragraphNode.innerHTML = parseText(element.data);
                    paragraphNode.setAttribute("class", "article-paragraph");
                    articleNode.appendChild(paragraphNode);
                }
                else if(element.type == "image"){
                    let imageNode = document.createElement("img");
                    imageNode.setAttribute("src", element.data);
                    imageNode.setAttribute("class", "article-image");
                    articleNode.appendChild(imageNode);
                }
            });
            content.appendChild(articleNode);
        });
    })
}

function parseText(text) {
    return text.replaceAll(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');
}