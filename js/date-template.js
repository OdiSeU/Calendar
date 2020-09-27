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

Date.prototype.toTemplate = function(rule = this.template) {
  this.template = rule || 'YYYY-MM-DD Ae2 hh:mm:ss';
  this.string = this.template;

  this.year = (()=>{
    let y = `${1900 + this.getYear()}`;
    if(this.template.search(/YYYY/) != -1) {
      this.string = this.string.replace('YYYY', y);
      return y;
    }
    else if(this.template.search(/YY/) != - 1) {
      y = y.slice(-2);
      this.string = this.string.replace('YY', y);
      return y;
    }
    else return '';
  })();

  this.month = (()=>{
    let m = 1 + this.getMonth();
    if(this.template.search(/MM/) != -1) {
      m = m > 9 ? m.toString() : `0${m}`;
      this.string = this.string.replace('MM',m);
      return m;
    }
    else if(this.template.search(/M/) != - 1) {
      m = m.toString();
      this.string = this.string.replace('M',m);
      return m;
    }
    else return '';
  })();

  this.date = (()=>{
    let d = this.getDate();
    if(this.template.search(/DD/) != -1) {
      d = d > 9 ? d.toString() : `0${d}`;
      this.string = this.string.replace('DD',d);
      return d;
    }
    else if(this.template.search(/D/) != - 1) {
      d = d.toString();
      this.string = this.string.replace('D',d);
      return d;
    }
    else return '';
  })();

  this.day = (()=>{
    let idx = this.template.indexOf('A');
    if(idx != -1) {
      let a = this.template.slice(idx+1, idx+3);
      this.days = this.getDays(a);
      this.string = this.string.replace('A'+a,this.days[this.getDay()]);
      return this.days[this.getDay()];
    }
    else return '';
  })();

  return this.string;
}


//2019-09-27 Sun 01:12:12
//YYYY-MM-DD e hh:mm:ss

//19.09.27(일요일) 13:12:12
//YY.MM.DD(kk) HH:mm:ss
