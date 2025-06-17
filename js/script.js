const buttons = document.querySelectorAll('.buttons')

buttons.forEach(button => button.addEventListener('click', () => clickedButton(button)));

const clickedButton = (button) => {
    const containers = document.querySelectorAll('.container');

    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active')

    const hrefButton = button.getAttribute('href').substring(1);
    const selectId = document.getElementById(hrefButton);

    containers.forEach(container => container.classList.remove('show'));

    if (hrefButton === 'home') {
        selectId.classList.add('show');
    } else { 
        const portfolio = document.getElementById('portfolio');
        portfolio.classList.add('show');
        selectId.classList.add('show')
    }
}
