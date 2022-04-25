const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

//Change Style loader

let obj = document.getElementById("loader_menu")
let classChange = document.getElementsByClassName("example_loader")[0]

function onclickAdd(e){
  e.preventDefault()
  classChange.classList.add("example_visible");
}

function onclickRemove(e){
  e.preventDefault()
  classChange.classList.remove("example_visible");
}

function onclickKey(e){
  if(e.keyCode === 27){
    classChange.classList.remove("example_visible");
  }
}

obj.addEventListener("click", onclickAdd)
classChange.addEventListener("click", onclickRemove)
document.addEventListener("keydown", onclickKey)


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

// Reset title
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  selectSingle_title.textContent =
    selectSingle_title.getAttribute("data-default");
});

let checkBoxButton = document.querySelector(".checkbox_big");
checkBoxButton.addEventListener("click", () => {
  checkBoxButton.classList.toggle("checkbox_big_inactive");
});

function getElementY(query) {
  return (
    window.pageYOffset +
    document.querySelector(query).getBoundingClientRect().top
  );
}

function doScrolling(element, duration) {
  var startingY = window.pageYOffset;
  var elementY = getElementY(element);
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY =
    document.body.scrollHeight - elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY;
  var diff = targetY - startingY;
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  var start;

  if (!diff) return;

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start;
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1);
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

// Apply event handlers. Example of firing the scrolling mechanism.
document
  .getElementById("check_menu")
  .addEventListener("click", doScrolling.bind(null, "#checkbox", 1000));
document
  .getElementById("nav")
  .addEventListener("click", doScrolling.bind(null, "#buttons", 1000));
  document
  .getElementById("fonts_menu")
  .addEventListener("click", doScrolling.bind(null, "#fonts", 1000));
  document
  .getElementById("forms_menu")
  .addEventListener("click", doScrolling.bind(null, "#forms", 1000));
  document
  .getElementById("fonts_menu")
  .addEventListener("click", doScrolling.bind(null, "#fonts", 1000));

  document
  .getElementById("icons_menu")
  .addEventListener("click", doScrolling.bind(null, "#icons", 1000));
  document
  .getElementById("lists_menu")
  .addEventListener("click", doScrolling.bind(null, "#lists", 1000));
  document
  .getElementById("search_menu")
  .addEventListener("click", doScrolling.bind(null, "#search", 1000));
  document
  .getElementById("colors_menu")
  .addEventListener("click", doScrolling.bind(null, "#colors", 1000));


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
popup.setEventListeners();
popup.open();

