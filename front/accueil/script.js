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

httpGetAsync("http://localhost:3005/", (e) => {
    console.log("l'appel au back marche")
    console.log(typeof e)
    e = JSON.parse(e);
    console.log(e)

    for (let i = 0; i < e.length; i++) {
        let main = document.querySelector("main");
        let div = document.createElement("div");
        let table = document.createElement("table");
        const tr = table.insertRow();
        const tr_img = tr.insertCell();
        const img = document.createElement("img");
        img.src = e[i]["image"];
        const tr_description = tr.insertCell();
        const description = document.createElement("p");
        description.textContent = e[i]["description"];
        const tr_price = tr.insertCell();
        const price = document.createElement("p");
        price.textContent = e[i]["price"];
        main.append(div);
        div.append(table);
        tr_img.append(img);
        tr_description.append(description);
        tr_price.append(price);

    }
})