
var app = {

  init: function () {
    console.log("app.init !");
    app.addListnersToActions();
  },

  addListnersToActions: () => {

    let addListButton = document.getElementById("addListButton");
    addListButton.addEventListener("click", app.showAddListModal);


    let closeModalButtons = document.querySelectorAll(".modal .close");
    for(let button of closeModalButtons) {
      button.addEventListener("click", app.hideModals);
    }

    let addListForm = document.querySelector("#addListModal form");
    addListForm.addEventListener("submit", app.handleAddListForm);


    let addCardForm = document.querySelector("#addCardModal form");
    addCardForm.addEventListener("submit", app.handleAddCardForm);
  },

  //*********************************** */

  showAddListModal: () => {
    let modal = document.getElementById("addListModal");
    modal.classList.add("is-active");
  },


  hideModals: () => {
    let modals = document.querySelectorAll(".modal");
    for(let modal of modals) {
      modal.classList.remove("is-active");
    }
  },

  handleAddListForm : (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);

    app.makeListInDOM(formData);

    app.hideModals();
  },

  handleAddCardForm: (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    app.makeCardInDOM(formData);

    app.hideModals();
  },

  // **********************

  makeCardInDOM: (formData) => {
    let template = document.getElementById("template-card");
    let newCard = document.importNode(template.content, true);
    newCard.querySelector(".card-name").textContent = formData.get("name");

    let theGoodList = document.
      querySelector(`[data-list-id="${formData.get("list_id")}"] .panel-block`);

    theGoodList.appendChild(newCard);
  },

  makeListInDOM: (formData) => {

    let template = document.getElementById("template-list");

    let newList = document.importNode(template.content, true);

    newList.querySelector("h2").textContent = formData.get("name");

    const lastColumn = document.getElementById("addListButton").closest(".column");

    newList.querySelector(".add-card-btn").addEventListener("click", app.showAddCardModal);

    console.log(newList);

    // TODO: A CHANGER PAR LA VRAI ID APRES
    // POUR AVOIR UNE ID UNIQUE JE VAIS TEMPORAIREMENT UTILISER UN TIMESTAMP
    const timestamp = (new Date()).getTime();
    newList.querySelector(".column").dataset.listId = timestamp;

    // J'ajoute ensuite ma nouvelle liste AVANT la dernière colonne dans le DOM
    lastColumn.before(newList);

    // console.log("makeListInDOM: TODO");
    // //TODO !!!!!!!!!!!!!!
  },


  showAddCardModal: (e) => {
    let modal = document.getElementById("addCardModal");
    modal.classList.add("is-active");

    //En utilisant closest (cf.makeListInDOM ) je récupère
    // l'element commun unique qui est .panel et j'utilise le dataset pour récupérer l'id de la liste
    const listId = e.target.closest(".panel").dataset.listId;
    //Sur mon modal je récupère mon input caché et j'affecte l'id
    modal.querySelector("input[name=\"list_id\"]").value = listId;
  }


};


document.addEventListener("DOMContentLoaded", app.init );