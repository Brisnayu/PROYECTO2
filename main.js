// const products = [
//     {
//     name: 'opcional',
//     price: 'OBLIGATORIO',
//     stars: 'opcional',
//     reviews: 'opcional', 
//     seller: 'OBLIGATORIO, indicar de donde salen los productos',
//     image: 'opcional pero necesario', 
//     }
// ]

const adoptionBoard = [
    {
        photo: "./assets/icon/cat_calico.png",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        photo: "./assets/1-adoption/image2.jpg",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        photo: "./assets/1-adoption/image3.jpg",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        photo: "./assets/1-adoption/image4.jpg",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        photo: "./assets/1-adoption/image5.jpg",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        photo: "./assets/1-adoption/image6.jpg",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        photo: "./assets/1-adoption/image7.jpg",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        photo: "./assets/1-adoption/image8.jpg",
        pet: 'Hera',
        year: 2022,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

const adoptionBoardList = document.querySelector('#adoption-block');

const getAdoptionBoard = (photo, pet, year, desc) => {
    return `
        <div class="container-gallery">
            <img src=${photo} alt=${pet} />
            <h3>${pet}</h3>
            <p>${year}</p>
            <p>${desc}</p>
        </div>
        `;
};

const setupProductsList = () => {
    
    for (let i = 0; i < adoptionBoard.length; i++) {
        const adoptionBoardElement = adoptionBoard[i];

            adoptionBoardList.innerHTML += getAdoptionBoard (
            adoptionBoardElement.photo,
            adoptionBoardElement.pet,
            adoptionBoardElement.year,
            adoptionBoardElement.desc,
        );
    };

};

setupAdoptionBoardList();