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

var computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
var colorSquare = document.getElementById('color-square');
  colorSquare.setAttribute("style", "background:" + computedColor);

function updateValue() {
  var val = this.name.charAt(0);
  colors[val] = sliders[this.name].value;
  computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + computedColor);
}

sliders.hue.oninput = updateValue;
sliders.saturation.oninput = updateValue;
sliders.lightness.oninput = updateValue;
sliders.alpha.oninput = updateValue;
