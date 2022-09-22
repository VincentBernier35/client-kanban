```js


  init: function () {
    app.addListnersToActions();
  },

  addListnersToActions: () => {
    showAddListModal();
    hideModals();
    handleAddListForm();
    handleAddCardForm();
  },

  showAddListModal(){.....},

  hideModals(){......},

  handleAddListForm(){
    makeListInDom();
    hideModals();
  },

  makeListInDom(){
    showAddCardModal();
  },

  showAddCardModal(){......},
  
  handleAddCardForm(){
    makeCardInDom();
    hideModals();
  },

  makeCardInDom(){....},







};


document.addEventListener("DOMContentLoaded", app.init );


```