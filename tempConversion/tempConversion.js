const ftoc = function(fahrenheit) {
  return +((fahrenheit - 32) / 1.8).toFixed(1);

}

const ctof = function(celsius) {
  return +((celsius * 1.8) + 32).toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
