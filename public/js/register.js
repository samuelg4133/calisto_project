const users = JSON.parse(localStorage.getItem('users')) || [];

function idGenerator () {
    const timestamp = new Date();

    const id =
        timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString();

    return id;
}

function setUser (){
    const user = {
        id: idGenerator(),
        name: document.getElementById("fname").value,
        username: document.getElementById("fusername").value,
        passwd: document.getElementById("fpasswd").value
    }

    return user;
}

function handleSubmit (){

    users.push(setUser());

    localStorage.setItem("users", JSON.stringify(users));

    alert("Dados inseridos com sucesso!");

}
