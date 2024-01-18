let white = document.getElementById('white');
let chess_box = document.getElementById('Chess-box');

white.addEventListener('click', () => {
    for (let i = 0; i < 8; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let j = 0; j < 8; j++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('divAdd');

            if ((i + j) % 2 === 0) {
                newDiv.classList.add('white-square');
            } else {
                newDiv.classList.add('black-square');
            }

            rowDiv.appendChild(newDiv);
        }

        chess_box.appendChild(rowDiv);

    }
});
