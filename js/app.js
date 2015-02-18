var sliders = {
  hue:        document.getElementById('hue-slider'),
  saturation: document.getElementById('saturation-slider'),
  lightness:  document.getElementById('lightness-slider'),
  alpha:      document.getElementById('alpha-slider')
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

var computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
var colorSquare = document.getElementById('color-square');


function updateValue() {
  var val = this.name.charAt(0);
  colors[val] = sliders[this.name].value;
  numberVals[val].textContent = colors[val];
  computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + computedColor);
}

function init() {
  colorSquare.setAttribute("style", "background:" + computedColor);

  numberVals.h.textContent = colors.h;
  numberVals.s.textContent = colors.s;
  numberVals.l.textContent = colors.l;
  numberVals.h.textContent = colors.h;
}

sliders.hue.oninput = updateValue;
sliders.saturation.oninput = updateValue;
sliders.lightness.oninput = updateValue;
sliders.alpha.oninput = updateValue;

init();
