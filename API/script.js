// 1 variantas ASYNC API

const photoContainer = document.getElementById('photoContainer');
const getDogPhoto = async () => {
    // async.... await...... await....
    const result = await fetch('https://dog.ceo/api/breeds/image/random')
    console.log(result);

    const data = await result.json();
    console.log(data)

    const image = document.createElement('img');
    image.src = data.message;
    image.alt = 'dog random foto'

    photoContainer.appendChild(image);
    image.style.height = '200px';
    image.style.width = '200px';
    image.style.borderRadius = '50%';
    image.style.objectFit = 'cover';
}

getDogPhoto();

const data = {
    "message": "https://images.dog.ceo/breeds/pembroke/n02113023_4391.jpg",
    "status": "success"

}

console.log(data.message);



//2 VARIANTAS ASYNC API NAUJESNIS VARIANTAS

const getDogPhoto1 = () => { //NESUPRANTU GERIAU 1 NAUDOT
    //fetch('url").then().then()
    const result = fetch('https://dog.ceo/api/breeds/image/random').then(result => result.json())
        .then((result) => result.json())
        .then((data) => {
            console.log('su then', data)
        })
    const image = document.createElement('img');
    image.src = data.message;
    image.alt = 'dog random foto'

    photoContainer.appendChild(image);
    image.style.height = '200px';
    image.style.width = '200px';
    image.style.borderRadius = '50%';
    image.style.objectFitFit = 'cover';

}



//3

const getDogPhoto2 = async () => {
    // async.... await...... await....

    try {
        const result = await fetch('https://dog.ceo/api/breeds/image/random')
        console.log(result);

        const data = await result.json();
        console.log(data)

        const image = document.createElement('img');
        image.src = data.message;
        image.alt = 'dog random foto'

        photoContainer.appendChild(image);
        image.style.height = '200px';
        image.style.width = '200px'; s
        image.style.borderRadius = '50%';
        image.style.objectFitFit = 'cover';
    } catch (error) { //ERRORUS GAUDO?? NESUPRANTU
        console.error(error)
    }
}



//PRATYBOS 1
const randomPhoto3 = document.getElementById('randomPhoto3');
const getRandomPhoto = async () => {
    const resultPhoto = await fetch("https://coffee.alexflipnote.dev/random.json") // nuroda butent i random daug foto o ne vieno url foto
    console.log(resultPhoto)

    const dataConvert = await resultPhoto.json();
    console.log(dataConvert);


    const imageRandom = document.createElement('img');
    imageRandom.src = dataConvert.file;
    imageRandom.alt = 'coffee random generator photo';

    randomPhoto3.appendChild(imageRandom);
    imageRandom.style.height = '300px';
    imageRandom.style.width = '300px';
    imageRandom.style.objectFit = 'cover';
    imageRandom.style.borderRadius = '24%';
}
getRandomPhoto()


/// end points !!!!! KAIP SU URL TVARKYTIS
const getPhotoWithEndPoint = async() => {
    const result = await fetch('.....');
    const data = await result.json();
    console.log('endpointai ', data);
}

getPhotoWithEndPoint();


