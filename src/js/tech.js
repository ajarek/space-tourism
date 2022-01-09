const bio = document.querySelector(".bio")
const nameTech = document.querySelector(".name-tech")
const btn = document.querySelectorAll(".btn button")
const techImg = document.querySelector(".img img")
btn.forEach(bt => {
    bt.addEventListener("click", displayTech)

})
async function displayTech(e) {
    const res = await fetch("/data.json")
    const data = await res.json()
    const myName = e.target.name
    console.log(myName)
    data.technology.forEach(ds => {
        if (ds.name == myName) {
            const image = ds.images.portrait.replace('.', '')
            techImg.src =  image
            nameTech.innerHTML = ds.name
            bio.innerHTML = ds.description
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