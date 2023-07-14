// importing functions from index.js
import {
    getMdFilesArr,
    checkOptions,
    NoValidateNoStats,
    ValidateNoStats,
    NoValidateStats,
    ValidateStats,
    getStats
    } from './index.js';

export const mdLinks = (path, options) => {
  const optionsEntered = checkOptions();
  options = optionsEntered;
  const filesArr = getMdFilesArr(path, []);
  if (options.validate && options.stats) {
    console.log('ejecuta con validate y con stats');
    Promise.all(ValidateStats(filesArr)).then(result => console.log((result), getStats(result)))
  };
  if (options.validate && !options.stats) {
    console.log('ejecuta con validate y sin stats');
    Promise.all(ValidateNoStats(filesArr)).then(result => console.log(result))
  };
  if (!options.validate && options.stats) {
    console.log('ejecuta sin validate y con stats');
    Promise.all(NoValidateStats(filesArr)).then(result => console.log(result, getStats(result)))
  };
  if (!options.validate && !options.stats) {
    console.log('ejecuta sin validate y sin stats');
    Promise.all(NoValidateNoStats(filesArr)).then(result => console.log(result))
  };
};

mdLinks('./Examples/example.md', )