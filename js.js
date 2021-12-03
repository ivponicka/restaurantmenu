const menu = [
  {
    id: 1,
    title: "Sandwich",
    category: "Breakfast",
    price: 8.99,
    img: "./img/1.jpg",
    description: `2 delicious sandwiches with cheese, ham, bacon, egg, tomatoes and pickles.`,
  },
  {
    id: 2,
    title: "Eggs",
    category: "Breakfast",
    price: 6.99,
    img: "./img/2.jpg",
    description: `3 delicious eggs served with bread and butter.`,
  },
  {
    id: 3,
    title: "Porridge",
    category: "Breakfast",
    price: 7.99,
    img: "./img/3.jpg",
    description: `Freshly made porridge with fruit, nuts or syrup.`,
  },
   {
    id: 4,
    title: "Avocado toast",
    category: "Breakfast",
    price: 11.99,
    img: "./img/4.jpg",
    description: `2 delicious butter toast with avocado and eggs.`,
  },
  {
    id: 5,
    title: "Pancakes",
    category: "Breakfast",
    price: 10.99,
    img: "./img/5.jpg",
    description: `Butter pancakes with fruit, chocolate cream, maple syrup or whipped cream.`,
  },
  {
    id: 6,
    title: "Spaghetti",
    category: "Lunch",
    price: 13.50,
    img: "./img/6.jpg",
    description: `Freshly made pasta served with a beef sause.`,
  },
  {
    id: 7,
    title: "Salmon",
    category: "Dinner",
    price: 14.99,
    img: "./img/7.jpg",
    description: `Grilled salmon. Can be served with mashed potatoes, fries or rice`,
  },
  {
    id: 8,
    title: "Tomato soup",
    category: "Lunch",
    price: 8.99,
    img: "./img/8.jpg",
    description: `Freshly made tomato soup served with crotouns or bread.`,
  },
  {
    id: 9,
    title: "Pumpkin cream",
    category: "Lunch",
    price: 9.99,
    img: "./img/9.jpg",
    description: `Freshly made pumpkin cream served with sunflower seeds, crotouns or bread.`  
  },
  {
    id: 10,
    title: "Chicken",
    category: "Lunch",
    price: 13.99,
    img: "./img/10.jpg",
    description: `Juicy chicken served with vegeteables and rice, fries or potatoes.`,
  },
  {
    id: 11,
    title: "Burger",
    category: "Dinner",
    price: 14.99,
    img: "./img/11.jpg",
    description: `Chiken/beef home-made-style burger with veggies and fries..`,
  },
  {
    id: 12,
    title: "Pizza",
    category: "Dinner",
    price: 15.99,
    img: "./img/12.jpg",
    description: `Crispy pizza with cheese, ham, vegetables and others.`,
  },
  {
    id: 13,
    title: "Salad",
    category: "Lunch",
    price: 11.99,
    img: "./img/13.jpg",
    description: `Chicken/salmon salad with veggies and crutouns.`,
  },
  {
    id: 14,
    title: "Steak",
    category: "Dinner",
    price: 16.99,
    img: "./img/14.jpg",
    description: `Juicy steak served with fries, potato wedges or veggies.`,
  },
  {
    id: 15,
    title: "Carbonara",
    category: "Lunch",
    price: 10.50,
    img: "./img/15.jpg",
    description: `Delicious carbonara with bacon and parmezan.`,
  },
   {
    id: 16,
    title: "Pudding",
    category: "Dessert",
    price: 5.99,
    img: "./img/16.jpg",
    description: `Chocolate/vanilla pudding with whipped cream.`,
  },
  {
    id: 17,
    title: "Chocolate cake",
    category: "Dessert",
    price: 4.99,
    img: "./img/17.jpg",
    description: `Delicious soft chocolate cake. Can be served with ice-cream and whipped cream.`,
  },
  {
    id: 18,
    title: "Cheesecake",
    category: "Dessert",
    price: 5.50,
    img: "./img/18.jpg",
    description: `Home-made-style cheese cake served with fruit.`,
  },
  {
    id: 19,
    title: "Strawberry dessert",
    category: "Dessert",
    price: 6.99,
    img: "./img/19.jpg",
    description: `Delicious vanilla cream with straberries.`,
  },
  {
    id: 20,
    title: "Cupcake",
    category: "Dessert",
    price: 8.99,
    img: "./img/20.jpg",
    description: `Vanilla/chocolate cupcakes with the cream.`,
  },
  {
    id: 21,
    title: "Smoothie",
    category: "Drinks",
    price: 7.99,
    img: "./img/21.jpg",
    description: `Freshly made fruit or vegetable smoothie.`  
  },
  {
    id: 22,
    title: "Lemonade",
    category: "Drinks",
    price: 4.50,
    img: "./img/22.jpg",
    description: `Fresh home-made-style lemonade served with ice.`,
  },
  {
    id: 23,
    title: "Juice",
    category: "Drinks",
    price: 4.99,
    img: "./img/23.jpg",
    description: `Freshly squeezed orange/apple juice.`,
  },
  {
    id: 24,
    title: "Coffee",
    category: "Drinks",
    price: 3.99,
    img: "./img/24.jpg",
    description: `Freshly brewed coffee served with milk or cream.`,
  }, 

  {
    id: 26,
    title: "Tea",
    category: "Drinks",
    price: 3.99,
    img: "./img/24.jpg",
    description: `Original British tea.`,
  },
  {
    id: 27,
    title: "Wine",
    category: "Drinks",
    price: 5.99,
    img: "./img/24.jpg",
    description: `White/red/rose.`,
  },
];


const sectionCenter = document.querySelector(".section-center");
const buttonsContainer = document.querySelector(".buttons-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  showMenuButtons();
});

function diplayMenuItems(menuItems) {
  let showMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-description">
              ${item.description}
            </p>
          </div>
        </article>`;
  });
  showMenu = showMenu.join("");
  // console.log(showMenu);

  sectionCenter.innerHTML = showMenu;
}
function showMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-button" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  buttonsContainer.innerHTML = categoryBtns;
  const filterBtns = buttonsContainer.querySelectorAll(".filter-button");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

