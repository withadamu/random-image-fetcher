let images = [
    "animals.jpg",
    "galaxy.jpg",
    "grey.jpg",
    "grundar.jpg",
    "pink.jpg"
]

function getImage() {
    let imageIndex = Math.floor(Math.random() * (images.length));
    let source = document.querySelector('img');
    source.setAttribute('src', images[imageIndex]);
}