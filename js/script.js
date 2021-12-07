window.onload = function() {
    var open = document.getElementById('op-menu');

    open.addEventListener('click', event => {
        let openBtn = document.querySelector('.nav-bar-main');
        openBtn.classList.toggle('open-menu');

        let opBtn = document.querySelectorAll('.bar_line');
        for (let i = 0; i <= opBtn.length; i++) {
            opBtn[i].classList.toggle('change-color');
        }
    });
}