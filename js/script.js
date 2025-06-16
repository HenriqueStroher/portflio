const buttons = document.querySelectorAll('.buttons')

buttons.forEach(button => button.addEventListener('click', () => clickedButton(button)));

const clickedButton = (button) => {
    const containers = document.querySelectorAll('.container');

    containers.forEach(container => container.classList.remove('show'));

    const hrefButton = button.getAttribute('href').substring(1);
    const selectId = document.getElementById(hrefButton);

    if (hrefButton === 'home') {
        selectId.classList.add('show');
    } else { 
        const portfolio = document.getElementById('portfolio');
        portfolio.classList.add('show');
        selectId.classList.add('show')
    }
}
// 
