const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width: 767px)');

burgerButton.addEventListener('click', hideShow);

ipad.addListener(validation);

function hideShow()
{
    if (menu.classList.contains('is-active'))
    {
        menu.classList.remove('is-active');
    }
    else
    {
        menu.classList.add('is-active');
    }
    
}

function validation(event)
{
    if(event.matches)
    {
        burgerButton.addEventListener('click', hideShow);
    }
    else
    {
        burgerButton.removeEventListener('click', hideShow);
    }
}