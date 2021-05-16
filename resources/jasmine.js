const Jasmine = require("jasmine");
const JasmineConsoleReporter = require("jasmine-console-reporter");

const jasmine = new Jasmine();
jasmine.loadConfig({
  spec_dir: "src/test",
  spec_files: ["**/*[sS]pec.js"],
  helpers: ["helpers/**/*.js"],
  stopSpecOnExpectationFailure: false,
  random: true,
});
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

const reporter = new JasmineConsoleReporter({
  colors: 1,
  cleanStack: 1,
  verbosity: 4,
  listStyle: "indent",
  timeUnit: "ms",
  timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
  activity: true,
  emoji: true,
  deep: true,
});

jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();
