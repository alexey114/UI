const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

// Toggle menu

selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// Toggle menu for multiple imputs

// const selects = document.querySelectorAll('.__select');
// selects.forEach(function(select) {
//   select.addEventListener('click', function() {
//     let isActive = 'active' === this.getAttribute('data-state');
//     selects.forEach(i => i.setAttribute('data-state', ''));
//     this.setAttribute('data-state', isActive ? '' : 'active');
//   });
//   select.querySelectorAll('.__select__label').forEach(function(label) {
//     label.addEventListener('click', function() {
//       select.setAttribute('data-state', '');
//       select.querySelector('.__select__title').textContent = this.textContent;
//     });
//   });
// });

// Reset title
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  selectSingle_title.textContent =
    selectSingle_title.getAttribute("data-default");
});

// checkBox
let checkBoxButton = document.querySelector(".checkbox_big");
checkBoxButton.addEventListener("click", () => {
  checkBoxButton.classList.toggle("checkbox_big_inactive");
});

// Popup
export class Popup {
  constructor (popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
      this._popup.classList.add('popup_active');
      document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
      this._popup.classList.remove('popup_active');
      document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
      if(evt.key === 'Escape') {
          this.close();
  }
}

  setEventListeners() {
          this._popup.addEventListener('click', (evt) => {
              if (evt.target.classList.contains('popup_active')) {
                  this.close();
              }
              if (evt.target.classList.contains('popup__close-button')) {
                  this.close();
                }
          })
  }
}

const popup = new Popup ('.popup');
const popupButton = document.querySelector('.popup_button');
popup.setEventListeners();
popupButton.addEventListener('click', ()=> {
  popup.open();
})
