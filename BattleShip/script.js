const board = () => {
    let gameBoard = document.querySelector('.board');
    let posX = document.querySelector('.posX');
    let posY = document.querySelector('.posY');
    let arrayX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arrayY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 100; i++) {
        let area = document.createElement('div');
        area.classList.add('area');
        area.setAttribute('data-n', i)
        gameBoard.appendChild(area);
    }
    /* Position X teyin et */
    for (let i = 0; i < 10; i++) {
        let x = document.createElement('div');
        x.classList.add('x');
        x.innerText = arrayX[i];
        posX.appendChild(x);
    }
    /* Position Y teyin et */
    for (let i = 0; i < 10; i++) {
        let y = document.createElement('div');
        y.classList.add('y');
        y.innerText = arrayY[i];
        posY.appendChild(y);
    }
    getShips()
    shoot();

}



const getShips = () => {
    let button = document.querySelector('.button');

    button.addEventListener('click', () => {
        let a = document.querySelectorAll('.getShip')
        if (a.length == 5) {
            alert('Sizin artiq 5 geminiz var ve onlar doyuse hazirdirlar!')
            return 0
        }
        /* Umumı blok */
        let getShip = document.createElement('div');
        getShip.classList.add('getShip');
        document.querySelector('.shipContent').appendChild(getShip);

        /* Gemilerin secen button */
        let selectButton = document.createElement('button');
        selectButton.classList.add('selectButton');
        getShip.appendChild(selectButton);
        selectButton.innerText = 'Select ship';

        /* Gemılerın oldugu block */
        let allShips = document.createElement('div');
        allShips.classList.add('allShips');

        /* Gemiler */
        let rand = Math.floor(Math.random() * (6 - 1)) + 1;
        for (let i = 0; i < rand; i++) {
            let shipPart = document.createElement('div');
            shipPart.classList.add('shipPart');
            allShips.appendChild(shipPart)
        }
        getShip.appendChild(allShips);
        addShipsToBoard(getShip);

    })

}


const addShipsToBoard = (block) => {
    let shipLength = 0;
    let shipArray = [];
    if (document.querySelector('.shipContent').hasChildNodes() == true) {
        document.querySelectorAll('.selectButton').forEach(e => {
            e.addEventListener('click', (elem) => {
                shipLength = elem.target.nextElementSibling.children.length
                document.querySelector('.board').addEventListener('click', (e) => {
                    let ship = e.target.getAttribute('data-c');
                    if (ship == 'checked') {
                        alert(`Burda artiq gemi yerlesdirilib`)
                        return 0
                    }
                    if (shipArray.length == shipLength) {
                        shipArray = [];
                        shipLength = 0;
                        return 0;
                    }
                    shipArray.push('add')
                    block.style.display = 'none';
                    e.target.setAttribute('data-c', 'checked');
                    e.target.style.backgroundColor = 'darkviolet';
                    checkEndOfGame()
                })
            })
        })
    }
}

const shoot = () => {
    let gameBoard = document.querySelector('.board');
    let arr = [...gameBoard.children]
    document.querySelector('.send').addEventListener('click', () => {
        arr.forEach(e => {
            if (e.getAttribute('data-n') == document.querySelector('.coordinate').value && e.getAttribute('data-c') == 'checked') {
                e.style.backgroundColor = 'red';
                e.removeAttribute("data-c")
                alert('Hedef vuruldu...')
            }
        })
        let check = checkEndOfGame();
        if (check == 0) {
            document.querySelector('.game-over').innerText = 'Dusmen gemileri mehf edildi';
            return 0
        }
    })
}

const checkEndOfGame = () => {
    let gameBoard = document.querySelector('.board');
    let arr = [...gameBoard.children];
    let array = []
    arr.forEach(e => {
        if (e.getAttribute('data-c') == 'checked') {
            array.push(e.getAttribute('data-c'))
        }
    })
    return array.length
}


board();