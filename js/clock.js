const Clock = function(target, rule = 'YYYY.MM.DD[Ae1] HH:mm:ss'){
  this.template = rule;
  this.date = new Date();
  this.target = target;
  this.isTick = false;

  this.start = function() {
    this.isTick = true;
    this.tick();
  };
  this.tick = function() {
    if(!this.isTick) return;
    this.date = new Date();
    this.target.innerText = this.date.setTemplate(this.template);
    setTimeout(()=>{this.tick()}, 1000-this.date.getMilliseconds());
  };
  this.stop = function() {
    this.isTick = false;
  };
  this.setTemplate = function(rule) {
    this.template = rule;
    this.date.setTemplate(rule);
  };

  this.constructor = function(target) {
    if(target == undefined) throw 'Clock Error';
    this.start();
  }
};
