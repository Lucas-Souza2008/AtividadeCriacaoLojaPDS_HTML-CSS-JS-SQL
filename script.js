const shoes = [
    { id: 1, image: "ImagensDoProjeto/Nike1.png" },
    { id: 2, image: "ImagensDoProjeto/Nike2.png" },
    { id: 3, image: "ImagensDoProjeto/Nike3.png" },
    { id: 4, image: "ImagensDoProjeto/Nike4.png" },
];

const mainImage = document.querySelector('.shoe-image');
const icons = document.querySelectorAll('.icon');

function updateImage(shoeId) {
    const selectedShoe = shoes.find(shoe => shoe.id === shoeId);

    if (selectedShoe) {
        mainImage.src = selectedShoe.image;
    }
}

icons.forEach(icon => {
    icon.addEventListener('click', () => {

        const shoeId = parseInt(icon.getAttribute('data-shoe'));

        updateImage(shoeId);

        icons.forEach(i => i.classList.remove('active'));

        icon.classList.add('active');
    });
});

updateImage(1);