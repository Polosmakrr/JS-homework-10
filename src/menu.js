import menuTpl from './templates/card.hbs';
import menuList from './menu.json';

const menu = document.querySelector('.menu');
const menuBlock = createMenu(menuList);

checkTheme();

menu.insertAdjacentHTML('beforeend', menuBlock);

function createMenu(menuList) {
    return menuTpl(menuList);
}

const btn = document.querySelector('.theme-switch__track');

btn.addEventListener('click', onClickBtn);

function onClickBtn() {

    
    if (localStorage.getItem('themeValue') === 'light-theme') {
        localStorage.setItem('themeValue', 'dark-theme');
        document.body.classList.remove('light-theme');
        document.body.classList.add(localStorage.getItem('themeValue'));
    }
    else {
        localStorage.setItem('themeValue', 'light-theme');
        document.body.classList.remove('dark-theme');
        document.body.classList.add(localStorage.getItem('themeValue'));
    }
}

function checkTheme() {
    const savedThemeValue = localStorage.getItem('themeValue');

    if (savedThemeValue) {
        document.body.classList.add(savedThemeValue);
    } else {
         localStorage.setItem('themeValue', 'light-theme');
        document.body.classList.add('light-theme')
    }
}