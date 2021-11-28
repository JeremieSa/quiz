function calculHamming(a, b) {
    let distance = 0;

    if(a.length == b.length) {
        for (let i = 0; i < a.length; i++) {
            if(a[i] != b[i]) {
                distance++;
            }
        }
    }

    return distance;
}

function calculerAB() {
    const a = document.getElementById("A").value;
    const b = document.getElementById("B").value;

    alert("Distance : " + calculHamming(a, b));
}

function affichage() {
    const textA = document.createElement('input');
    textA.setAttribute('type', 'text');
    textA.setAttribute('id', 'A');
    textA.setAttribute('placeholder', 'A');
    document.body.appendChild(textA);

    const textB = document.createElement('input');
    textB.setAttribute('type', 'text');
    textB.setAttribute('id', 'B');
    textB.setAttribute('placeholder', 'B');
    document.body.appendChild(textB);

    const buttonHamming = document.createElement('button');
    const text = document.createTextNode('Hamming');
    buttonHamming.appendChild(text);
    buttonHamming.addEventListener('click', () => calculerAB())
    document.body.appendChild(buttonHamming);
}

function setup() {
    affichage();
}

window.addEventListener('DOMContentLoaded', setup);