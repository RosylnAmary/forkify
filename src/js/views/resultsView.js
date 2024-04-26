import View from './view';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _hideResults = document.querySelector('.btn--close-searchResults');
  _showResults = document.querySelector('.show-results');
  _parentElement = document.querySelector('.results');
  _parentDivElement = document.querySelector('.search-results');
  _errorMessage = 'No recipes found for your query! Please try again';
  _message = ' ';

  constructor() {
    super();
    this._addHandlerHideResults();
    this._addHandlerShowResults();
  }
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
  _addHandlerHideResults() {
    this._hideResults.addEventListener('click', this.closeResults.bind(this));
  }
  closeResults() {
    this._parentDivElement.classList.remove('search-results-open');
    this._showResults.classList.remove('show-results-hide');
  }
  _addHandlerShowResults() {
    this._showResults.addEventListener('click', this.showResults.bind(this));
  }
  showResults() {
    this._parentDivElement.classList.add('search-results-open');
    console.log('aa');
  }
}

export default new ResultsView();
