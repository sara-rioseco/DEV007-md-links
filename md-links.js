// importing functions from index.js
import {
    getMdFilesArr,
    checkOptions,
    NoValidate,
    Validate,
    countStats
  } from './index.js';

// import { checkOptions } from './cli.js';
  
// declaring main fx
const mdLinks = (path, options) => {
  const optionsEntered = checkOptions();
  options = optionsEntered;
  const filesArr = getMdFilesArr(path, []);
  if (options.validate && options.stats) {
    Promise.all(Validate(filesArr)).then(result => console.log((result), countStats(result)))
  };
  if (options.validate && !options.stats) {
    Promise.all(Validate(filesArr)).then(result => console.log(result))
  };
  if (!options.validate && options.stats) {
    Promise.all(NoValidate(filesArr)).then(result => console.log(result, countStats(result)))
  };
  if (!options.validate && !options.stats) {
    Promise.all(NoValidate(filesArr)).then(result => console.log(result))
  };
};

  export default mdLinks;