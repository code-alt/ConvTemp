```bash
npm install convtemp
```

# ConvTemp (WIP)

Use it for converting temps, it does it.

No dependencies at all. Just use the convert function like so:

```nodejs
const convTemp = require("convtemp");
console.log(parseFloat(convTemp(300, "Kelvin", "Fahrenheit").toFixed(1))); // 80.3
```

> NOTE: I really, really reccomend you just use a Number instead of a String for the temp to convert, because it can sometimes show un-reliable results.
