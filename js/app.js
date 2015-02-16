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

var colorSquare = document.getElementById('color-square');

sliders.hue.oninput = function () {
  colors.h = sliders.hue.value;
  var computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + computedColor);
};
sliders.saturation.oninput = function () {
  colors.s = sliders.saturation.value;
  var computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + computedColor);
};
sliders.lightness.oninput = function () {
  colors.l = sliders.lightness.value;
  var computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + computedColor);
};
sliders.alpha.oninput = function () {
  colors.a = sliders.alpha.value;
  var computedColor = "hsla(" + colors.h + "," + colors.s + "%," + colors.l +"%," + colors.a + ")";
  colorSquare.setAttribute("style", "background:" + computedColor);
};
