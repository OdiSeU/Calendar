const Clock = (function() {
  let clock = {
    days : {
      'en' : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      'kr' : ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      'ch' : ['日','月','火','水','木','金','土']
    },
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
      this.day =
    },
    toString : function() {

    }
  }
  return
})();
