const role = document.querySelector(".role")
const bio = document.querySelector(".bio")
const nameCrew = document.querySelector(".name-crew")
const btn = document.querySelectorAll(".dots button")
const crewImg = document.querySelector(".img img")
btn.forEach(bt => {
    bt.addEventListener("click", displayCrew)

})
async function displayCrew(e) {
    const res = await fetch("/data.json")
    const data = await res.json()
    const myName = e.target.name
    data.crew.forEach(ds => {
        if (ds.name == myName) {
            const image = ds.images.png.replace('.', '')
            crewImg.src =  image
            nameCrew.innerHTML = ds.name
            bio.innerHTML = ds.bio
            role.innerHTML = ds.role
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