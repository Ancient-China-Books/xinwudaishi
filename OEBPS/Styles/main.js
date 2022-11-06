var g;

function changeColor(e) {
  var id = e.href.split('#')[1];
  var p = document.getElementById(id);
  if (g) {
    g.style.backgroundColor = 'transparent';
  }
  p.style.backgroundColor = '#dafbe1';
  g = p;
  return true;
}

var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

window.onload = function() {
  var href = window.location.href.split('#');
  if (typeof href !== 'undefined' && href.length > 1) {
    g = document.getElementById(href[1]);
    g.style.backgroundColor = '#dafbe1';
  }

  var z = qs['zhu'];
  if (z === '0') {
    var a = document.getElementsByClassName("jiazhu");
    for (var i = 0; i < a.length; i++) {
      a.item(i).style.display = 'none';
    }
    var a = document.getElementsByClassName("jiaozhusup");
    for (var i = 0; i < a.length; i++) {
      a.item(i).style.display = 'none';
    }
  }
};
