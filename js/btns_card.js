var btn = document.querySelectorAll('.btn_card'),
    three = document.querySelectorAll('.cards')[0],
    btc_car = document.querySelectorAll('.btn_card')[0];
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        three.className = 'cards';
        three.classList.add('cards_' + i);
    })
}