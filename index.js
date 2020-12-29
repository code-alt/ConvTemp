exports.convert = (temp, type, totype) => {
  switch (type) {
    case 'Kelvin':
      switch (totype) {
        case 'Fahrenheit':
          let _t = temp - 273.15;
          _t *= 1.8;
          _t += 32;
          return _t;
          break;
        case 'Celsius':
          let _t = temp - 273.15;
          return _t;
          break;
      }
      break;
      case 'Celsius':
      switch (totype) {
        case 'Fahrenheit':
          let _t = temp + 32;
          return _t;
          break;
        case 'Kelvin':
          let _t = temp + 273.15;
          return _t;
          break;
      }
      break;
      case 'Fahrenheit':
      switch (totype) {
        case 'Celsius':
          let _t = temp - 32;
          return _t;
          break;
        case 'Kelvin':
          let _t = temp - 32;
          _t += 273.15;
          return _t;
          break;
      }
      break;
  }
}
