const Clock = (function() {
  let clock = {
    year : 0,
    month : 0,
    date : 0,
    day : 0,
    hour : 0,
    minute : 0,
    second : 0,
    update : function() {
      let date = new Date();
      this.year = date.getYear();
      this.month = date.getMonth() + 1;
      this.date = date.getDate();
      this.day =  0;
    },
    toString : function() {

    }
  }
  return;
})();
