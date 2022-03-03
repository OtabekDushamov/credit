create = document.querySelector('.cr');
del = document.querySelector('.del');
create.addEventListener('click', btn_click);
del.addEventListener('click', btn_delete);


function btn_click() {
    add_block = document.querySelector('.calculations');
    block_left = document.querySelector('.left');
    block_time = document.querySelector('.time');
    block_percent = document.querySelector('.percent');
    overall = document.querySelector('.overall')

    left = block_left.value;
    time = block_time.value;
    percent = block_percent.value;

    minus = time * 12;
    minus = minus.toFixed(1)
    monthly = left / minus;
    perc = left / 50;
    total = perc + monthly;
    div = perc / minus

    overall_sum = 0

    for (let index = 0; index < minus; index++) {
        total = perc + monthly;
        add_block.innerHTML += `<div class="row">${left}</div>
            <div class="row">${monthly}</div>
            <div class="row">${perc}</div>
            <div class="row">${total}</div>`;

        overall_sum += total

        left -= monthly;
        perc -= div;

    };
    overall.innerHTML = `Umumiy to'lov miqdori: ${overall_sum}`
}

function btn_delete() {
    innertext = document.querySelector('.calculations');
    overall = document.querySelector('.overall')

    innertext.innerHTML = `<div class="row begin">Kreditni umumiy miqdori</div>
    <div class="row begin">Kreditni asosiy to'lovi</div>
    <div class="row begin">Kreditni foiz to'lovi</div>
    <div class="row begin">Umumiy to'lov</div>`;

    overall.innerHTML = `Umumiy to'lov miqdori:`
}