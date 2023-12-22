const coffeeWrapper = document.querySelector(".menu-cards-wrapper");
const filterButtons = document.querySelectorAll(".filter-item");
const buttonLoader = document.querySelector(".menu-cards-button-active");

filterButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault;
    e.stopPropagation;
    const activeButton = document.querySelector(
      ".filter-item.filter-item-active"
    );
    activeButton ? activeButton.classList.remove("filter-item-active") : "";
    this.classList.add("filter-item-active");

    const tab = this.getAttribute("id");
    const newCards = coffee.filter((elem) => elem.category === tab);
    coffeeWrapper.innerHTML = "";

    newCards.forEach(function (el, index) {
      const classHidden = index > 3 ? "card-hidden" : "";
      const card = `
                        <div class="card ${classHidden}" data-id="${el.name}">
                            <div class='card-image-wrapper'>
                            <img class="card-image" src="${el.image}"/>
                            </div>
                            <div class="card-text-wrapper">
                                <h3 class="card-title">${el.name}</h3>
                                <p class="card-description">${
                                  el.description
                                }</p>
                                <span class="card-price">${"$"}${
        el.price
      }</span>
                            </div>
                        </div>
                    `;
      coffeeWrapper.innerHTML += card;
    });

    const card = document.querySelectorAll(".card");
    card.forEach(function (card) {
      card.addEventListener("click", function (event) {
        openModal(this);
      });
    });

    const cardHidden = document.querySelectorAll(".card-hidden");
    !cardHidden.length
      ? buttonLoader.classList.add("inactive")
      : buttonLoader.classList.remove("inactive");

    buttonLoader.addEventListener("click", function () {
      cardHidden.forEach((el) => el.classList.remove("card-hidden"));
      const updateCardHidden = document.querySelectorAll(".card-hidden");
      !updateCardHidden.length
        ? this.classList.add("inactive")
        : this.classList.remove("inactive");
    });
  });
});

function openModal(elem) {
  const cardID = elem.getAttribute("data-id");
  const el = coffee.find((elem) => elem.name == cardID);
  const modalWrapper = document.querySelector(".modal");
  const modal = `
        <div class="modal-wrapper">
        <div class="modal-image-wrapper">
            <img class="modal-image" src="${el.image}"/>
        </div>
        <div class="modal-discription-wrapper">
            <div class="modal-title-wrapper">
                <h3 class="modal-title">${el.name}</h3>
                <p class="modal-subtitle">${el.description}</p>
            </div>
            <form class="modal-form" onchange="handleFormChange()">
            <div class="modal-filter-wrapper">
          
                <span class="modal-subtitle">Size</span>
                <div class="modal-filters">
                    <a class="filter-item" onclick="handleInputValue(this)">
                        <div class="modal-button-icon icon">S</div>
                        <input hidden type='radio' checked  name='size' value="${
                          el.sizes.s["add-price"]
                        }"/>
                        <p>${el.sizes.s.size}</p>
                    </a>
                    <a class="filter-item" onclick="handleInputValue(this)">
                        <div class="modal-button-icon icon">M</div>
                        <input hidden type='radio' name='size' value="${
                          el.sizes.m["add-price"]
                        }"/>
                        <p>${el.sizes.m.size}</p>
                    </a>
                    <a class="filter-item" onclick="handleInputValue(this)">
                        <div class="modal-button-icon icon">L</div>
                        <input hidden  type='radio' name='size' value="${
                          el.sizes.l["add-price"]
                        }"/>
                        <p>${el.sizes.l.size}</p>
                    </a>
                </div>
            </div>
            <div class="modal-filter-wrapper">
                <span class="modal-subtitle">Additives</span>
                <div class="modal-filters">
                    <a class="filter-item" onclick="handleInputValue(this)">
                        <div class="modal-button-icon icon">1</div>
                        <input hidden type='checkbox'
                        name='${el.additives[0].name}' 
                        value="${el.additives[0]["add-price"]}"/>
                        <p>${el.additives[0].name}</p>
                    </a>
                    <a class="filter-item" onclick="handleInputValue(this)">
                        <div class="modal-button-icon icon">2</div>
                        <input hidden type='checkbox' name='${
                          el.additives[1].name
                        }' value="${el.additives[1]["add-price"]}"/>
                        <p>${el.additives[1].name}</p>
                    </a>
                    <a class="filter-item" onclick="handleInputValue(this)">
                        <div class="modal-button-icon icon">3</div>
                        <input hidden type='checkbox' name='${
                          el.additives[2].name
                        }' value="${el.additives[2]["add-price"]}"/>
                        <p>${el.additives[2].name}</p>
                    </a>
                </div>
            </div>
            <div class="modal-price-wrapper">
                <span>Total:</span>
                <input hidden  name='total' value="${el.price}"/>
                <span class="total">${"$"}${el.price}</span>
            </div>
            </form>
            <div class="modal-warning-wrapper">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_268_9737)">
                            <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z"
                                stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_268_9737">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <span class="modal-warning-message">
                    The cost is not final. Download our mobile app to
                    see the final price and place your order. Earn
                    loyalty points and enjoy your favorite
                    coffee with up to 20% discount.
                </span>
            </div>
            <a class="modal-close filter-item" onclick="closeModal()">Close</a>       
        </div>
        
    </div>
    `;
  modalWrapper.innerHTML += modal;
  modalWrapper.style.display = "block";
  document.body.classList.add("modal-open");
}

function handleInputValue(elem) {
  const sizeInput = elem.querySelector("input");
  sizeInput.click();
}

function handleFormChange() {
  const form = document.querySelector(".modal-form");
  const formData = new FormData(form);
  let totalPrice = 0;
  formData.forEach((value) => (totalPrice += +value));

  document.querySelector(".total").innerHTML = "$" + totalPrice.toFixed(2);
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalChild = document.querySelector(".modal-wrapper");
  modal.removeChild(modalChild);
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("../products.json")
    .then((response) => response.json())
    .then((cards) => {
      coffee = cards;
      document.querySelector("#coffee").click();
    });
});

window.addEventListener("resize", function (event) {
  let widthWindow = event.currentTarget.innerWidth;
  widthWindow > 768
    ? buttonLoader.classList.add("inactive")
    : buttonLoader.classList.remove("inactive");
});
