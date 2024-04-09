import View from './view';
import icons from 'url:../../img/icons.svg';
import fracty from 'fracty';

export let click = 3;

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnSubmit = document.querySelector('.upload__btn');
  _btnAddIng = document.querySelector('.btn--add-ing');
  _ingColumn = document.querySelector('.upload__column__ing');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this._addHandlerAddIngredient();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      console.log(data);
      handler(data);
    });
  }
  _AddIngredient() {
    click++;
    console.log(click);
    const markup = `
    <label>Ingredient ${click}</label>
    <div class="ingredient--input" name="ingredient-1">
      <div class="ammount">
        <input
          type="text"
          required
          name="quantity-${click}"
          placeholder="Quantity"
        />
        <input type="text" required name="unit-${click}" placeholder="Unit" />
      </div>
      <input
        type="text"
        required
        name="description-${click}"
        placeholder="Description"
      />
    </div> `;
    this._ingColumn.insertAdjacentHTML('beforeend', markup);
  }

  _addHandlerAddIngredient() {
    this._btnAddIng.addEventListener('click', this._AddIngredient.bind(this));
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
