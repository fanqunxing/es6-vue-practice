import '../lib/jquery.js';

let loadXML = (url) => {
  let data = '';
  $.ajax({
    url,
    async: false,
    type: 'get',
    success: (res) => {
      data = res;
    }
  });
  return data;
};

let loadCss = (url) => {
  var style = document.createElement('link');
  style.href = url;
  style.rel = 'stylesheet';
  style.type = 'text/css';
  document.getElementsByTagName('HEAD').item(0).appendChild(style);
};

let require = (url) => {
  if (url.includes('.css')) {
    loadCss(url);
  } else {
    return loadXML(url);
  }
};


window.require = require;

