// importing functions from index.js
import {
    getMdFilesArr,
    checkOptions,
    NoValidate,
    ValidateNoStats,
    ValidateStats,
    countStats
    } from './index.js';

export const mdLinks = (path, options) => {
  const optionsEntered = checkOptions();
  options = optionsEntered;
  const filesArr = getMdFilesArr(path, []);
  if (options.validate && options.stats) {
    console.log('ejecuta con validate y con stats');
    Promise.all(ValidateStats(filesArr)).then(result => console.log((result), countStats(result)))
  };
  if (options.validate && !options.stats) {
    console.log('ejecuta con validate y sin stats');
    Promise.all(ValidateNoStats(filesArr)).then(result => console.log(result))
  };
  if (!options.validate && options.stats) {
    console.log('ejecuta sin validate y con stats');
    Promise.all(NoValidate(filesArr)).then(result => console.log(result, countStats(result)))
  };
  if (!options.validate && !options.stats) {
    console.log('ejecuta sin validate y sin stats');
    Promise.all(NoValidate(filesArr)).then(result => console.log(result))
  };
};

mdLinks('./Examples', )