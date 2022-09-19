var app = {
  // contient l'url de base de notre API (l'url de notre backend)
  base_url: "http://localhost:3000/api",

  init: function () {
    console.log(" hello, app.init !");
    app.addListenerToActions();

  },
  addListenerToActions: function() {
    // open modal
    const addListButton = document.getElementById("addListButton");
    addListButton.addEventListener("click", app.showAddListModal);


    // listening of all closing buttons
    const closeButtons = document.querySelectorAll(".modal .close");
    for (let button of closeButtons) {
      button.addEventListener("click", app.closeModals);
    }
  },
  showAddListModal: function() {
    // open modal
    const listModal = document.getElementById("addListModal");
    listModal.classList.add("is-active");
  }, 
  closeModals: function() {
    const modals = document.querySelectorAll(".modal");

    for (let modal of modals) {
      modal.classList.remove("is-active");
    }
  }
};


// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener("DOMContentLoaded", app.init);