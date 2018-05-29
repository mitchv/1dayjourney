let A = 5;
let x = A;
function increase(x) {
  ++x;
  alert(x);
}
function decrease(x) {
  --x;
  alert(x);
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
    var aValue = getCookie("aValue");
    if (aValue != "") {
        alert("A = " + aValue);
    } else {
        aValue = prompt("On a scale from 0 to 9, rate your current need for Acceptance:", "");
        if (aValue != "" && aValue != null) {
            setCookie("aValue", aValue, 365);
        }
    }
}