const inputas = document.getElementById('inputas');
const searchButton = document.getElementById('searchButton');
const countriesList = document.getElementById('countriesList')
const countryName = document.getElementById('countryName');
const countryCapital = document.getElementById('countryCapital');
const countryFlag = document.getElementById('countryFlag');


// inputas.addEventListener('input', function() {
//     if (searchInput.value.length >= 1) {
//         searchButton.disabled = false;
//     } else {
//         searchButton.disabled = true;
//     }
// });
inputas.addEventListener('input', function() { //1 symbolis suaktyvina mygtuka, o function kas bus po paspaudimo
    searchButton.disabled = inputas.value.length === 0;
});


//3uzd

searchButton.addEventListener('click', () => {
    fetch('https://countries.dev/name/' + inputas.value)
        .then(response => response.json())
        .then(data => {

            countriesList.innerHTML = '';

            data.forEach(country => {

                countriesList.innerHTML += `
                    <div class="country">
                        <p>${country.name}<p>
                        <p>${country.capital}</p>
                        <p>${country.flag}</p>
                    </div>
                `;

                console.log(country.name, country.capital, country.flag);
            });
        });
});