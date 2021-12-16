module.exports = (temp, type, totype) => {
  if (type instanceof String == true && totype instanceof String == true) {
    throw new Error("ConvTemp temp convertion failed. The values are malformed.");
  }
  if (temp instanceof String == true && temp instanceof Number == true) {
    throw new Error("The temp value (to convert) must be a String or a Number value.");
  }
  switch (type) {
    case 'Kelvin':
      switch (totype) {
        case 'Fahrenheit':
          var _t = temp - 273.15;
          _t *= 1.8;
          _t += 32;
          return _t;
          break;
        case 'Celsius':
          var _t = temp - 273.15;
          return _t;
          break;
        default:
          return temp;
      }
      break;
      case 'Celsius':
      switch (totype) {
        case 'Fahrenheit':
          _t *= 1.8;
          var _t = temp + 32;
          return _t;
          break;
        case 'Kelvin':
          var _t = temp + 273.15;
          return _t;
          break;
        default:
          return temp;
      }
      break;
      case 'Fahrenheit':
      switch (totype) {
        case 'Celsius':
          var _t = temp - 32;
          _t /= 1.8;
          return _t;
          break;
        case 'Kelvin':
          var _t = temp - 32;
          _t += 273.15;
          return _t;
          break;
        default:
          return temp;
      }
      break;
    default:
      return temp;
  }
}
