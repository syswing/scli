module.exports = async (options) => {
  const config = require('../scli.config')
  await config[options].cmd()
  // console.log(config,)
}

