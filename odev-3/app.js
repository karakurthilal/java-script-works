const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let divDom = document.querySelector(".btn-container")
let btnAll = document.createElement("button")
btnAll.innerText = "All"
btnAll.setAttribute("id","btn1")
btnAll.classList.add("btn")
btnAll.classList.add("ms-3")
btnAll.classList.add("btn-warning")
divDom.appendChild(btnAll)

let btnKorea = document.createElement("button")
btnKorea.innerText = "Korea"
btnKorea.setAttribute("id","btn2")
btnKorea.classList.add("btn")
btnKorea.classList.add("ms-3")
btnKorea.classList.add("btn-warning")
divDom.appendChild(btnKorea)

let btnJapan = document.createElement("button")
btnJapan.innerText = "Japan"
btnJapan.setAttribute("id","btn3")
btnJapan.classList.add("btn")
btnJapan.classList.add("ms-3")
btnJapan.classList.add("btn-warning")
divDom.appendChild(btnJapan)

let btnChina = document.createElement("button")
btnChina.innerText = "China"
btnChina.setAttribute("id","btn4")
btnChina.classList.add("btn")
btnChina.classList.add("ms-3")
btnChina.classList.add("btn-warning")
divDom.appendChild(btnChina)

let centerDivDom = document.querySelector(".section-center");
for(var i=0;i<menu.length-1;i++){
  centerDivDom.innerHTML +=`
  <div class="card mb-3 border-0" style="max-width: 540px; background-color: #f1f5f8;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${menu[i].img}" class="img-fluid rounded-3 border border-5" alt="${menu[i].title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fw-bolder" style="color:#E74646">${menu[i].title} <p class="card-text float-end" style="color:#FA9884"> <small>${menu[i].price}</small></p></h5>
          <hr>
          <p class="card-text">${menu[i].desc}</p>
        </div>
      </div>
    </div>
  </div>`
}

btnAll.addEventListener("click",function() {
  let centerDivDom = document.querySelector(".section-center");
  centerDivDom.innerHTML=''
  for(var i=0;i<menu.length-1;i++){
    centerDivDom.innerHTML +=`
    <div class="card mb-3 border-0" style="max-width: 540px; background-color: #f1f5f8;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${menu[i].img}" class="img-fluid rounded-3 border border-5" alt="${menu[i].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fw-bolder" style="color:#E74646">${menu[i].title} <p class="card-text float-end" style="color:#FA9884"> <small>${menu[i].price}</small></p></h5>
            <hr>
            <p class="card-text">${menu[i].desc}</p>
          </div>
        </div>
      </div>
    </div>`
  }
})

btnChina.addEventListener("click",function() {
  let centerDivDom = document.querySelector(".section-center");
  centerDivDom.innerHTML=''
  for(var i=0;i<menu.length-1;i++){
    if(`${menu[i].category}`=="China"){
      centerDivDom.innerHTML +=`
  <div class="card mb-3 border-0" style="max-width: 540px; background-color: #f1f5f8;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${menu[i].img}" class="img-fluid rounded-3 border border-5" alt="${menu[i].title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fw-bolder" style="color:#E74646">${menu[i].title} <p class="card-text float-end" style="color:#FA9884"> <small>${menu[i].price}</small></p></h5>
          <hr>
          <p class="card-text">${menu[i].desc}</p>
        </div>
      </div>
    </div>
  </div>`
    }
  }
})

btnJapan.addEventListener("click",function() {
  let centerDivDom = document.querySelector(".section-center");
  centerDivDom.innerHTML=''
  for(var i=0;i<menu.length-1;i++){
    if(`${menu[i].category}`=="Japan"){
      centerDivDom.innerHTML +=`
  <div class="card mb-3 border-0" style="max-width: 540px; background-color: #f1f5f8;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${menu[i].img}" class="img-fluid rounded-3 border border-5" alt="${menu[i].title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fw-bolder" style="color:#E74646">${menu[i].title} <p class="card-text float-end" style="color:#FA9884"> <small>${menu[i].price}</small></p></h5>
          <hr>
          <p class="card-text">${menu[i].desc}</p>
        </div>
      </div>
    </div>
  </div>`
    }
  }
})

btnKorea.addEventListener("click",function() {
  let centerDivDom = document.querySelector(".section-center");
  centerDivDom.innerHTML=''
  for(var i=0;i<menu.length-1;i++){
    if(`${menu[i].category}`=="Korea"){
      centerDivDom.innerHTML +=`
  <div class="card mb-3 border-0" style="max-width: 540px;  background-color: #f1f5f8;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${menu[i].img}" class="img-fluid rounded-3 border border-5" alt="${menu[i].title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fw-bolder" style="color:#E74646">${menu[i].title} <p class="card-text float-end" style="color:#FA9884"> <small>${menu[i].price}</small></p></h5>
          <hr>
          <p class="card-text">${menu[i].desc}</p>
        </div>
      </div>
    </div>
  </div>`
    }
  }
})