const destinationImg = document.querySelector(".destination-img")
const btn = document.querySelectorAll(".btn")
const titleH3 = document.querySelector(".title-h3")
const desc = document.querySelector(".desc")
const distance = document.querySelector("#distance")
const travel = document.querySelector("#travel")

btn.forEach(bt => {
    bt.addEventListener("click", displayDestinations)

})
async function displayDestinations(e) {
    btn[0].classList.remove("active")
    const res = await fetch("/data.json")
    const data = await res.json()
    const planet = e.target.innerHTML
    data.destinations.forEach(ds => {
        if (ds.name == planet) {
            const image = ds.images.png.replace('.', '')
            destinationImg.src =  image
            titleH3.innerHTML = ds.name
            desc.innerHTML = ds.description
            distance.innerHTML = ds.distance
            travel.innerHTML = ds.travel
        }
    })
}

const toggleMenu = document.querySelector('.toggle-menu');
const navUl = document.querySelector('nav ul')
const icons = document.querySelector('#icons')

function change() {
    navUl.classList.toggle('show')
    if (icons.id === `icons`) {
        icons.src = '/assets/shared/icon-close.svg';
        icons.id = `close`;
    } else {
        icons.src = '/assets/shared/icon-hamburger.svg';
        icons.id = `icons`;
    }
}

toggleMenu.addEventListener('click', change)