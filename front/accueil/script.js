//FRONT

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

const url = new URL(document.URL);
console.log(url);
let type = url.searchParams.get("type");
console.log(type);

httpGetAsync("http://localhost:3005/", (categories) => {
    console.log("l'appel au back marche")
    categories = JSON.parse(categories);
    const elements = categories[type];
    console.log(elements);

    for (let i = 0; i < elements.length; i++) {
        let main = document.querySelector("main");
        let div = document.createElement("div");
        let table = document.createElement("table");
        const tr = table.insertRow();
        const tr_img = tr.insertCell();
        const img = document.createElement("img");
        img.src = elements[i]["image"];
        const tr_description = tr.insertCell();
        const description = document.createElement("p");
        description.textContent = elements[i]["description"];
        const tr_price = tr.insertCell();
        const price = document.createElement("p");
        price.textContent = elements[i]["price"];
        main.append(div);
        div.append(table);
        tr_img.append(img);
        tr_description.append(description);
        tr_price.append(price);
    }
})