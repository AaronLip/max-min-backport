// A mini module created with some assistance from the foundry community
// Send some love their way at https://ko-fi.com/trioderegion and https://ko-fi.com/kandashi
Hooks.on("init", () => {

  Die.MODIFIERS["min"] = function(modifier) {
    const minimum = parseInt(modifier.match(/\d+/));

    if (!minimum || !Number.isNumeric(minimum)) return;

    this.results = this.results.flatMap(result => {
      if (result.result < minimum && !result.discarded) {
        result.active = false;
        result.discarded = true;
        return [ result, { result: minimum, active: true }];
      } else {
        return [ result ];
      }
    });
  };

  Die.MODIFIERS["max"] = function(modifier) {
    const maximum = parseInt(modifier.match(/\d+/));

    if (!maximum || !Number.isNumeric(maximum)) return;

    this.results = this.results.flatMap(result => {
      if (result.result > maximum && !result.discarded) {
        result.active = false;
        result.discarded = true;
        return [ result, { result: maximum, active: true }];
      } else {
        return [ result ];
      }
    });
  };
});