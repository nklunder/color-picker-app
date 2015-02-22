var sliders = {
  hue: document.getElementById('hue-slider'),
  saturation: document.getElementById('saturation-slider'),
  lightness: document.getElementById('lightness-slider'),
  alpha: document.getElementById('alpha-slider')
};

var colors = {
  h: sliders.hue.value,
  s: sliders.saturation.value,
  l: sliders.lightness.value,
  a: sliders.alpha.value
};

var numberVals = {
  h: document.getElementById('h-val'),
  s: document.getElementById('s-val'),
  l: document.getElementById('l-val'),
  a: document.getElementById('a-val'),
}

var hsla = "hsla(" + colors.h + "," + colors.s + "%," + colors.l + "%," + colors.a + ")";
var colorSquare = document.getElementById('color-square');


function updateValue() {
  var val = this.name.charAt(0);
  colors[val] = sliders[this.name].value;
  numberVals[val].textContent = colors[val];
  rgba = hsl2rgb(colors.h, colors.s, colors.l);
  hsla = "hsla(" + colors.h + "," + colors.s + "%," + colors.l + "%," + colors.a + ")";
  rgba = "rgba(" + colors.h + "," + colors.s + "," + colors.l + "," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + hsla);
}

function hsl2rgb(h, s, l) {
  var m1, m2, hue,
      r, g, b;

  s /= 100;
  l /= 100;
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

function init() {
  colorSquare.setAttribute("style", "background:" + hsla);

  numberVals.h.textContent = colors.h;
  numberVals.s.textContent = colors.s;
  numberVals.l.textContent = colors.l;
  numberVals.h.textContent = colors.h;
}

sliders.hue.oninput = updateValue;
sliders.saturation.oninput = updateValue;
sliders.lightness.oninput = updateValue;
sliders.alpha.oninput = updateValue;

sliders.hue.onchange = function() {
  document.getElementById('css-vals').textContent = hsla + rgba;
};
sliders.saturation.onchange = function() {
  document.getElementById('css-vals').textContent = hsla + rgba;
};
sliders.lightness.onchange = function() {
  document.getElementById('css-vals').textContent = hsla + rgba;
};
sliders.alpha.onchange = function() {
  document.getElementById('css-vals').textContent = hsla + rgba;
};

init();
