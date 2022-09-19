var app = {
  // contient l'url de base de notre API (l'url de notre backend)
  base_url: "http://localhost:3000/api",

  init: function () {
    console.log(" hello, app.init !");
    app.addListenerToActions();

  },
  addListenerToActions: function() {
    const addListButton = document.getElementById("addListButton");
    addListButton.addEventListener("click", app.showAddListModal);
  },
  showAddListModal: function() {
    const listModal = document.getElementById("addListModal");
    listModal.classList.add("is-active");
  }

};


// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener("DOMContentLoaded", app.init);