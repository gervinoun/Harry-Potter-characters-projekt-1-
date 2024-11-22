const number = prompt("Mitu tegelast näha tahad?")
url = "https://hp-api.onrender.com/api/characters";

async function fetchMessages() {
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector(".containers");

    console.log(data)

let i = 0
element.innerHTML = "";5


if (number > 0) {
    for (const item of data) {
        const mang = item.name;
        const pilt = item.image;
        const zanr = item.gender;
        const sisu = item.actor;

        if (i < number) {
            element.innerHTML += '<div class="container"> <img src="' +
             pilt + '" alt="Character Image"> <h2>' + mang +
              '</h2> <h3> Gender: ' + zanr + '<br/> Actor: ' +
               sisu + '</h3> </div>';
        i++;
        }
    }
}
}
fetchMessages()