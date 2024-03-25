const form = document.getElementById('form-geral')

function valida(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', (e) => {
    let formValido = false
    e.preventDefault();

    const campoA = Number(document.getElementById('campo_a').value);
    const campoB = Number(document.getElementById('campo_b').value);

    formValido = valida(campoA, campoB);

    if (formValido) {
        document.querySelector('.sucess-message').style.display = 'block';


    } else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('#campo_a').style.border = '2px solid red';
    }

    campoA.value = "";
    campoB.value = "";

});