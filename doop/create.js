const fs = require('fs')
const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
module.exports = () => {
  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  return new Promise((reslove, reject) => {
    fs.writeFile('gulpfile.js', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  });
};
