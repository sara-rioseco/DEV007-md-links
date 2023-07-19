// importing functions from ./index.js
import chalk from 'chalk';
import { getMdFilesArr, validate, noValidate, countStats } from "./index.js";

// declaring main fx
const mdLinks = (path, options) => {
  const filesArr = getMdFilesArr(path, []);
  if (filesArr.length < 1) {
    throw new Error('No markdown files were found')
  }
  if (options.validate && options.stats) {
    Promise.all(validate(filesArr)).then(result => console.log(result, countStats(result)));
    console.log(chalk.bold.inverse('Successfully retrieved links from .md files with validation and stats'))
  };
  if (options.validate && !options.stats) {
    Promise.all(validate(filesArr)).then(result => console.log(result))
    console.log(chalk.bold.inverse('Successfully retrieved links from .md files with validation'))
  };
  if (!options.validate && options.stats) {
    Promise.all(noValidate(filesArr)).then(result => console.log(result, countStats(result)))
    console.log(chalk.bold.inverse('Successfully retrieved links from .md files with stats'))
  };
  if (!options.validate && !options.stats) {
    Promise.all(noValidate(filesArr)).then(result => console.log(result))
    console.log(chalk.bold.inverse('Successfully retrieved links from .md files without validation nor stats'))
  };
};

export default mdLinks;