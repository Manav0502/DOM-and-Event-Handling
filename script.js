const button = document.getElementById('greetButton');
const input = document.querySelector('.search input');
const text = document.querySelector('p');
const colorBoxes = document.querySelectorAll('.color');

button.addEventListener('click', function () {
    const name = input.value.trim();

    if (name) {
        text.textContent = 'Hello ' + name + '!';
        button.textContent = 'Welcome';
    } else {
        text.textContent = 'Hello';
        button.textContent = 'Greet';
    }
});

colorBoxes.forEach(function (box) {
    box.addEventListener('click', function () {
        const boxText = box.textContent.trim().toLowerCase();

        if (boxText === 'red') {
            box.style.backgroundColor = 'red';
        } else if (boxText === 'green') {
            box.style.backgroundColor = 'green';
            box.style.color = 'white';
        } else if (boxText === 'blue') {
            box.style.backgroundColor = 'blue';
            box.style.color = 'white';
        } else if (boxText === 'yellow') {
            box.style.backgroundColor = 'yellow';
        }
    });
});
