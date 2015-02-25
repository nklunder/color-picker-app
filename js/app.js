var sliders = {
  hue: document.getElementById('hue-slider'),
  saturation: document.getElementById('saturation-slider'),
  lightness: document.getElementById('lightness-slider'),
  alpha: document.getElementById('alpha-slider')
};

var selectedColors = document.getElementById('selected-colors');
var addColorBtn = document.getElementById('add-color');

var colors = {
  h: sliders.hue.value,
  s: sliders.saturation.value,
  l: sliders.lightness.value,

  r: null,
  g: null,
  b: null,

  a: sliders.alpha.value,

  hex: null
};

var numberVals = {
  h: document.getElementById('h-val'),
  s: document.getElementById('s-val'),
  l: document.getElementById('l-val'),
  a: document.getElementById('a-val'),
};

var hsla = "hsla(" + colors.h + "," + colors.s + "%," + colors.l + "%," + colors.a + ")";
var rgba = "rgba(" + colors.r + "," + colors.g + "," + colors.b + "," + colors.a + ")";
var colorSquare = document.getElementById('color-square');


function updateValue() {
  var val = this.name.charAt(0);
  colors[val] = sliders[this.name].value;
  numberVals[val].textContent = colors[val];
  hsl2rgb(colors.h, colors.s, colors.l);
  colors.hex = rgb2hex(colors.r, colors.g, colors.b);

  hsla = "hsla(" + colors.h + "," + colors.s + "%," + colors.l + "%," + colors.a + ")";
  rgba = "rgba(" + colors.r + "," + colors.g + "," + colors.b + "," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + hsla);
}

function hsl2rgb(h, s, l) {
  var m1, m2, hue,
      r, g, b;

  s = s / 100;
  l = l / 100;
  if (s === 0) {
    r = g = b = (l * 255);
  } else {
    if (l <= 0.5) {
      m2 = l * (s + 1);
    } else {
      m2 = l + s - l * s;
    }
    m1 = l * 2 - m2;
    hue = h / 360;
    colors.r = Math.round(hue2rgb(m1, m2, hue + 1 / 3));
    colors.g = Math.round(hue2rgb(m1, m2, hue));
    colors.b = Math.round(hue2rgb(m1, m2, hue - 1 / 3));
  }
}
function hue2rgb(m1, m2, hue) {
  var v;
  if (hue < 0)
    hue += 1;
  else if (hue > 1)
    hue -= 1;

  if (6 * hue < 1)
    v = m1 + (m2 - m1) * hue * 6;
  else if (2 * hue < 1)
    v = m2;
  else if (3 * hue < 2)
    v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
  else
    v = m1;

  return 255 * v;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgb2hex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function addColor() {
  var pre = document.createElement('pre');
  pre.innerHTML = hsla + "<br>" + rgba + "<br>" + colors.hex;
  selectedColors.appendChild(pre);
}


function init() {
  colorSquare.setAttribute("style", "background:" + hsla);

  numberVals.h.textContent = colors.h;
  numberVals.s.textContent = colors.s;
  numberVals.l.textContent = colors.l;
  numberVals.a.textContent = colors.a;

  hsl2rgb(colors.h, colors.s, colors.l);

  rgba = "rgba(" + colors.r + "," + colors.g + "," + colors.b + "," + colors.a + ")";

  colors.hex = rgb2hex(colors.r, colors.g, colors.b);
}

sliders.hue.oninput = updateValue;
sliders.saturation.oninput = updateValue;
sliders.lightness.oninput = updateValue;
sliders.alpha.oninput = updateValue;

addColorBtn.onclick = addColor;

// sliders.hue.onchange = function() {
//   document.getElementById('css-vals').textContent = hsla + rgba + colors.hex;
// };
// sliders.saturation.onchange = function() {
//   document.getElementById('css-vals').textContent = hsla + rgba + colors.hex;
// };
// sliders.lightness.onchange = function() {
//   document.getElementById('css-vals').textContent = hsla + rgba + colors.hex;
// };
// sliders.alpha.onchange = function() {
//   document.getElementById('css-vals').textContent = hsla + rgba + colors.hex;
// };

init();
