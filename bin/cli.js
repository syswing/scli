#!/usr/bin/env node

const cli = require("cac")();
const doop = require('../doop/index')
process.on("unhandledRejection", error => {
  console.error(error);
  process.exit(1);
});

function main() {
  try {
    cli
      .command("[...entries]", "Entry files to start bundling", {
        ignoreOptionDefaultValue: true
      })
      .usage("[...entries] [options]")
      .action((options, args) => {
        console.log(options, args);
        doop(options)
        // console.log(process.argv);
        // console.log(process.cwd())
      });
    cli.parse(process.argv)
  } catch (e) {

  }
}

main()
