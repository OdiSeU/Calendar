const Days = function(lang = 'en', length = undefined, alphaCase = 0){
  var days = {
    en : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    kr : ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
    ch : ['日','月','火','水','木','金','土'],
  };
  let custom = [];
  switch (alphaCase) {
    case -1:
      custom = days[lang].map((item)=>item.toLowerCase());
      break;
    case 1:
      custom = days[lang].map((item)=>item.toUpperCase());
      break;
    default:
      custom = days[lang];
  };
  return custom.map((item)=>item.slice(0, length));
};
