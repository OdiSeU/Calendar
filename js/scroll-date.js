//require date.js

const ScrollDate = function(parent) {
  this.parent = parent;
  this.element = document.createElement('div');
  this.template = 'YYYY-MM-DD hh:mm:ss'
  this.date = new Date();

  this.constructor = function(parent) {
    if(parent == undefined) throw 'scroll date error';
    parent.append(this.element);
  }

}
const ScrollDateBox = function(parent) {
  this.element = document.createElement('div');

  this.constructor = function(parent) {
    this.element.style.display = 'inline';
    this.element.style.overflow = 'hidden';
    this.element.style.height = '100%';
  }
}
