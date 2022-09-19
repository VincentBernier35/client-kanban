var app = {
  // contient l'url de base de notre API (l'url de notre backend)
  base_url: "http://localhost:3000/api",

  init: function () {
    console.log("app.init !");

  },
  addList: function() {

  },
};

// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener("DOMContentLoaded", app.init);