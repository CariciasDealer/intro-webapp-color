document.addEventListener('DOMContentLoaded', function () {
    updateColor();

    document.getElementById('redInput').addEventListener('input', updateColor);
    document.getElementById('greenInput').addEventListener('input', updateColor);
    document.getElementById('blueInput').addEventListener('input', updateColor);
});

function updateColor() {
    const redValue = document.getElementById('redInput').value;
    const greenValue = document.getElementById('greenInput').value;
    const blueValue = document.getElementById('blueInput').value;

    updateColorDisplay(redValue, greenValue, blueValue);
}

function updateColorManual() {
    // Actualiza también los controles deslizantes
    document.getElementById('redInput').value = redValue;
    document.getElementById('greenInput').value = greenValue;
    document.getElementById('blueInput').value = blueValue;

    updateColorDisplay(redValue, greenValue, blueValue);
}

function updateColorDisplay(red, green, blue) {
    const rgbColor = `rgb(${red},${green},${blue})`;
    const hexColor = rgbToHex(red, green, blue);

    document.getElementById('rgbDisplay').style.backgroundColor = rgbColor;
    document.getElementById('hexDisplay').innerText = hexColor;
}

function rgbToHex(r, g, b) {
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hexR = toHex(r);
    const hexG = toHex(g);
    const hexB = toHex(b);

    // Utilizando guiones medios como separadores
    // Puedes cambiar '-' por cualquier otro carácter que desees utilizar
    return `#${hexR}-${hexG}-${hexB}`;
}
document.getElementById('colorPicker').addEventListener('input', function () {
    const selectedColor = this.value;

    // Actualiza los controles deslizantes y los valores manuales
    const rgbValues = hexToRgb(selectedColor);
    document.getElementById('redInput').value = rgbValues.r;
    document.getElementById('greenInput').value = rgbValues.g;
    document.getElementById('blueInput').value = rgbValues.b;

    document.getElementById('redManualInput').value = rgbValues.r;
    document.getElementById('greenManualInput').value = rgbValues.g;
    document.getElementById('blueManualInput').value = rgbValues.b;

    // Actualiza la visualización del color
    updateColorDisplay(rgbValues.r, rgbValues.g, rgbValues.b);
});

// Función para convertir código hexadecimal a RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}
