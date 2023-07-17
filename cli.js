#!/usr/bin/env node
// importing functions from index.js
import {
  getMdFilesArr,
  checkOptions,
  NoValidate,
  Validate,
  countStats
} from './index.js';

// getting arguments from command line
const dir = process.argv[2];
const opts = process.argv[3];

// declaring main fx
export const mdLinks = (path, options) => {
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

// calling function with args entered in command line
mdLinks(dir, opts);