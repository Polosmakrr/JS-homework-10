
const Items = [{
    id: "XWaQXcbk0",
    nameDishes: "Картофель, запеченный в мундире",
    description: "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.",
    image: "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
    price: 100,
    ingredients: [
      "Картофель",
      "Чеснок",
      "Сметана",
      "Бекон",
      "Твердый сыр",
      "Зеленый лук"
    ]
},
{
    id: "pkXzyRp1P",
    nameDishes: "Томатный магрибский суп",
    description: "Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.",
    image: "https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg",
    price: 150,
    ingredients: [
      "Помидоры",
      "Куриный бульон",
      "Мед",
      "Петрушка",
      "Кинза",
      "Паприка"
    ]
  },];

const menu = document.querySelector('.menu');
const menuBlock = createMenu(Items);

menu.insertAdjacentHTML('beforeend', menuBlock);

function createMenu(menuItem) {
    
   return menuItem.map(({ id, nameDishes, description, image, price,ingredients }) => { 
            return `
    <li class="menu__item" id="${id}">
<article class="card">
    <img src="${image}"
        alt="${nameDishes}" class="card__image" />
    <div class="card__content">
        <h2 class="card__name">${nameDishes}</h2>
        <p class="card__price">
            <i class="material-icons"> monetization_on </i>
            ${price} кредитов
        </p>

        <p class="card__descr">
            ${description}
        </p>

        <ul class="tag-list">
            <li class="tag-list__item">${ingredients[0]}</li>
            <li class="tag-list__item">${ingredients[1]}</li>
            <li class="tag-list__item">${ingredients[2]}</li>
            <li class="tag-list__item">${ingredients[3]}</li>
            <li class="tag-list__item">${ingredients[4]}</li>
            <li class="tag-list__item">${ingredients[5]}</li>
        </ul>
    </div>

    <button class="card__button button">
        <i class="material-icons button__icon"> shopping_cart </i>
        В корзину
    </button>
</article>
</li>
        `;return
        
    })
    .join('');
}




