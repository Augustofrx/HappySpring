

let button_generator = document.getElementById("flower-generator");


let flower_generator = () => {
    let flower_container = document.createElement("div")
    flower_container.classList.add = "flower-container"
    flower_container.innerHTML = `<ion-icon class="flower-generated" name="flower-sharp"/>`
    let general_container = document.getElementById("general-container")
    general_container.append(flower_container)
}


button_generator.addEventListener("click", flower_generator);