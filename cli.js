#!/usr/bin/env node
// importing functions from index.js
import {
  getMdFilesArr,
  NoValidate,
  Validate,
  countStats
} from './index.js';
import mdLinks from './md-links.js';

//checking if options validate and stats are true or not
export const checkOptions = () => {
  const options = new Object
  options.validate = '';
  options.stats = '';
  if(process.argv.includes('--validate')) {
    if (process.argv.includes('--stats')) {
      options.validate = true;
      options.stats = true;
    } else {
      options.validate = true;
      options.stats = false;
    }
  } if (!process.argv.includes('--validate')) {
    if (process.argv.includes('--stats')) {
      options.validate = false;
      options.stats = true;
    } else {
      options.validate = false;
      options.stats = false;
    }
  }
return options
};

// getting arguments from command line
const dir = process.argv[2];
const opts = checkOptions();

// calling function with args entered in command line
mdLinks(dir, opts)