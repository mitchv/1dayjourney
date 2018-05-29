function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function checkCookie() {
  var aValue = getCookie('aValue');
  if (aValue != '') {
    alert('A = ' + aValue);
  } else {
    aValue = prompt(
      'On a scale from 0 to 9, rate your current need for Acceptance:',
      ''
    );
    if (aValue != '' && aValue != null) {
      setCookie('aValue', aValue, 365);
    }
  }
}














function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;      
    default:
      return state;
  }
}

var store = Redux.createStore(counter);

function render() {
  document.querySelector('#counter').innerText = store.getState();
}

store.subscribe(render);
render();

document.querySelector('#increment').addEventListener('click', function(){
  store.dispatch({ type:'INCREMENT' })
});

document.querySelector('#decrement').addEventListener('click', function(){
  store.dispatch({ type:'DECREMENT' })
});

document.querySelector('#reset').addEventListener('click', function(){
  store.dispatch({ type:'RESET' })
});