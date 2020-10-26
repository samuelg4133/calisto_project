const items = JSON.parse(localStorage.getItem('items')) || [];

function generateItem() {
    const item = {
        id: idGenerator(),
        salesman: document.getElementById("fsalesman").value,
        type: document.getElementById("ftype").value,
        description: document.getElementById("fdescription").value,
        value: parseFloat(document.getElementById("fvalue").value),
        whatsapp: document.getElementById("whatsapp").value,
        urlPhoto: document.getElementById("url-photo").value
    }

    return item;
}

function idGenerator () {
    const timestamp = new Date();

    const id =
        timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString();

    return id;
}

function handleSubmit (){

    items.push(generateItem());

    console.log(items);

    localStorage.setItem("items", JSON.stringify(items));

    alert("Dados inseridos com sucesso!");

}

function handleShowOptions(){

    const navOptions = document.querySelector("nav#nav-options");

    if(navOptions.classList.contains("selected")){
        navOptions.style.display = "none";
        navOptions.classList.remove("selected");
    }else{
        navOptions.style.display = "flex";
        navOptions.classList.add("selected");
    }
}

