exports.convert = (temp, type, totype) => {
  if (typeof type == "string" && typeof totype == "string") {
    throw new Error("ConvTemp temp convertion failed.");
  }
  if (typeof temp != "string" && typeof temp != "number") {
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
