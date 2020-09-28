Date.prototype.getDays = function(template = 'e2'){
  var days = {
    e : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    E : ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'],
    k : ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    c : ['日','月','火','水','木','金','土'],
  };
  let length;
  if(template[1] == 1) {
    switch (template[0]) {
      case 'e' || 'E':
        length = 3;
        break;
      case 'k':
        length = 1;
        break;
      case 'c':
        length = 1;
        break;
    };
  }
  return days[template[0]].map((item)=>item.slice(0, length));
};

Date.prototype.setTemplate = function(rule = this.template) {
  this.templateString = this.template = rule || 'YYYY-MM-DD Ae2 hh:mm:ss';

  let replace = (expArr, value)=>{
    for(i in expArr) {
      if(this.templateString.search(RegExp(expArr[i])) != - 1) {
        if(expArr[i].length != 1) value = ('0'+value).slice(-expArr[i].length);
        this.templateString = this.templateString.replace(expArr[i], value);
        return value;
      }
    }
    return '';
  }
  this.year = replace(['YYYY', 'YY'], 1900 + this.getYear());
  this.month = replace(['MM', 'M'], 1 + this.getMonth());
  this.date = replace(['DD', 'D'], this.getDate());
  this.day = (()=>{
    let idx = this.templateString.indexOf('A');
    if(idx != -1) {
      let a = this.templateString.slice(idx+1, idx+3);
      this.days = this.getDays(a);
      this.templateString = this.templateString.replace('A'+a, this.days[this.getDay()]);
      return this.days[this.getDay()];
    }
    else return '';
  })();

  this.hour = (()=>{
    if(this.templateString.indexOf('H') != -1) return replace(['HH','H'], this.getHours());
    if(this.templateString.indexOf('h') != -1) return replace(['hh','h'], (this.getHours()+11)%12+1);
  })();
  this.minute = replace(['mm','m'], this.getMinutes());
  this.second = replace(['ss','s'], this.getSeconds());

  return this.templateString;
}


//2019-09-27 Sun 01:12:12
//YYYY-MM-DD e hh:mm:ss

//19.09.27(일요일) 13:12:12
//YY.MM.DD(kk) HH:mm:ss
