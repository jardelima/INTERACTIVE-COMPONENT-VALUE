const slider = document.getElementById("myRange");
const titleBox = document.getElementById("title-box");
const valueMounth = document.getElementById("value-mounth");

slider.addEventListener("change", sliderValue);

function sliderValue() {
    const sliderValue = Number(slider.value);

    if (sliderValue === 8) {
        titleBox.innerText = "10k pageviews";
        valueMounth.innerText = "$8.00";
    } else if (sliderValue === 12) {
        titleBox.innerText = "50k pageviews";
        valueMounth.innerText = "$12.00";
    } else if (sliderValue === 16 || sliderValue === 20) {
        titleBox.innerText = "100k pageviews";
        valueMounth.innerText = "$16.00";
    } else if (sliderValue === 24 || sliderValue === 28 || sliderValue === 32) {
        titleBox.innerText = "500k pageviews";
        valueMounth.innerText = "$24.00";
    } else if (sliderValue === 36) {
        titleBox.innerText = "1M pageviews";
        valueMounth.innerText = "$36.00";
    }
}


//

const divTitle = document.querySelector(".title-value");
const divValue = document.querySelector(".value");
var windowClient = window;

function changeLocal() {
    if (windowClient.innerWidth > 450) {
        divValue.remove();
        divTitle.appendChild(divValue);
    }
}

changeLocal()

