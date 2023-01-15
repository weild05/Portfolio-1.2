// alert("Функция внутресетевого чата ещё не введена!")
document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

    var footerBtn = document.querySelector('.footer-btn_link') // находим кнопку для открытия/закрытия окна навигации
    footerBtn.addEventListener('click', () => {
        alert("Функция внутреннего чата ещё не введена!")
    })
  })
  
// Изменение языка основного сайта
let headerRuBtn = document.querySelector('.lng-ru');
let headerEngBtn = document.querySelector('.lng-eng');
let headerCommonBtn = document.querySelector('.lng-common');

headerRuBtn.addEventListener('click', () => {
  
    if (headerRuBtn.classList.contains('lng-chosen')) {
      headerRuBtn.classList.remove('lng-chosen');
      headerEngBtn.classList.add('lng-chosen');
      console.log("Ru btn contains the class!");
    }else{
      headerEngBtn.classList.remove('lng-chosen');
      headerRuBtn.classList.add('lng-chosen');
    }
    
})

headerEngBtn.addEventListener('click', () => {
  
  if (headerEngBtn.classList.contains('lng-chosen')) {
    headerEngBtn.classList.remove('lng-chosen');
    headerRuBtn.classList.add('lng-chosen');
    console.log("Eng btn contains the class!");
  }else{
    headerRuBtn.classList.remove('lng-chosen');
    headerEngBtn.classList.add('lng-chosen');
  }
  
})