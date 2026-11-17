
const catPage = document.getElementById('catPage');
const catFilter = document.getElementById('catFilter');
const catButton = document.getElementById('catButton');

// Funkcija, kuri gauna katino nuotrauka
const getCatPhoto = () => {

    fetch('https://cataas.com/cat')
        .then(response => response.blob())
        .then(image => {

            const img = document.createElement('img');

            img.src = URL.createObjectURL(image);
            img.alt = 'Random cat photo';

            img.style.width = '300px';
            img.style.height = '300px';
            img.style.objectFit = 'cover';

            // Pritaikome pasirinkta filtra
            img.style.filter = catFilter.value;

            // Isvalome sena nuotrauka
            catPage.innerHTML = '';

            // Pridedame nauja nuotrauka
            catPage.appendChild(img);
        });
};

// Mygtuko paspaudimas
catButton.addEventListener('click', getCatPhoto);

