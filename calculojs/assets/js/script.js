function calcular() {
    var price, y, calculo, text;
    price = 1000000;
    y = document.querySelector("#cantidad").value;
    if (y <= 0) {
        text = "Es necesario introducir la cantidad de lunas que desea!";
        document.querySelector("#cantText").style.display = "none";
        document.querySelector("#total").innerHTML = text;
        document.querySelector("#total").style.color = "red";
    } else {
        calculo = parseFloat(price) * parseFloat(y);
        text = calculo;
        document.querySelector("#cantText").style.display = "block";
        document.querySelector("#total").innerHTML = "$" + text;
        document.querySelector("#total").style.color = "black";
        document.querySelector("#cantText").innerHTML = y + " Lunas";
    }
}




function colorChange() {
    var colorSelected, colorBox;
    colorSelected = document.querySelector("#color").value;
    colorBox = document.querySelector("#color-box");
    if (colorSelected === "orange") {
        document.querySelector("img").src = "assets/img/orangemoon.jpg";
        colorBox.style.color = "orange";
    } else if (colorSelected === "classic") {
        document.querySelector("img").src = "assets/img/classicmoon.jpg";
        colorBox.style.color = "grey";
    } else if (colorSelected === "blue") {
        document.querySelector("img").src = "assets/img/bluemoon.jpg";
        colorBox.style.color = "blue";
    }
}