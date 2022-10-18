/*
Javascript es un lenguaje sincronico. Hasta que no acabe la primera orden, no inicia la otra

orden1
orden2
orden3
*/

/*
AJAX = javascript asincronico

orden1     orden4
orden2
orden3

*/
const container = document.getElementById("container")

async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  insertData(data);
}
getData();

function insertData(data) {
data.map((country) =>{
    container.innerHTML  += `<div class ="container-country">
    <img src = "${country.flags.svg}"></img>
    <h1>${country.name.common}</h1>
    </div>`
    console.log(country)
})
}

