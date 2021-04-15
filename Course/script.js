const checkEmptyInput = () => {
    blurEfect();
    submitEmpty();
    document.querySelector('.submit').onclick = function(e) {
        e.preventDefault();
        if (document.querySelectorAll('input')[0].value !== '' && document.querySelectorAll('input')[1].value !== '' && document.querySelectorAll('input')[2].value !== '') {
            document.querySelector('.submit').style.cursor = 'pointer';
            let a = setTimeout(() => {
                document.querySelector('.loading').style.display = 'block';
                document.querySelector('.calculate').style.display = 'block';
            }, 100);
            setTimeout(() => {
                document.querySelector('.loading').style.display = 'none';
                document.querySelector('.calculate').style.display = 'none';
                addNewCourse();
            }, 3000);
        }
    }
}

const blurEfect = () => {
    for (let i = 0; i < document.querySelectorAll('input').length; i++) {
        document.querySelectorAll('input')[i].addEventListener('blur', (e) => {
            if (e.target.value == '') {
                e.target.classList.add('empty')
                e.target.setAttribute('placeholder', 'Qeyd olunan xana bosdur...');
            } else {
                e.target.classList.remove('empty')
            }
        })
    }
}

const addNewCourse = () => {
    let arr = ['img/cust-1.jpg', 'img/cust-0.jpg', 'img/cust-5.jpg', 'img/cust-2.jpeg', 'img/cust-3.jpg', 'img/cust-4.jpg'];
    let courseArrayClasses = ['course-name', 'course-describe', 'course-author']
    let courseArrayText = ['Name:', 'Course:', 'Author:'];
    let courseArrayContentClasses = ['name-content', 'course-content', 'author-content']
        // Col-4
    let block = document.createElement('div');
    block.setAttribute('class', 'col-4 mt-4');
    // imG
    let img = document.createElement('img');
    img.setAttribute('src', `${arr[Math.floor(Math.random()*6)]}`)
    block.appendChild(img)
    let row = document.createElement('div');
    row.classList.add('row');
    let col_10 = document.createElement('div');
    col_10.setAttribute('class', 'col-10 mx-auto d-flex');
    let w_40 = document.createElement('div');
    w_40.classList.add('w-40p');
    let div = document.createElement('div');
    for (let i = 0; i < 3; i++) {
        let span = document.createElement('span');
        span.classList.add(`${courseArrayClasses[i]}`)
        span.innerText = courseArrayText[i]
        w_40.appendChild(span)
    }
    for (let i = 0; i < 3; i++) {
        let span = document.createElement('span');
        span.classList.add(`${courseArrayContentClasses[i]}`)
        span.innerText = document.querySelectorAll('input')[i].value;
        div.appendChild(span)
    }
    col_10.appendChild(w_40);
    col_10.appendChild(div);
    row.appendChild(col_10);
    block.appendChild(row);
    document.querySelector('.course-block').appendChild(block)
}


const submitEmpty = () => {
    document.querySelector('.submit').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelectorAll('input').forEach(e => {
            if (e.value == '') {
                e.classList.add('empty');
                e.setAttribute('placeholder', 'Butun xanalar doldurulmalidir!!!');
            }
        })
    })
}
checkEmptyInput()