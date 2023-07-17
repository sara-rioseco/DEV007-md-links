#!/usr/bin/env node

// importing mdLinks function
import mdLinks from './md-links';

// getting arguments from command line
const dir = process.argv[2];
const opts = process.argv[3];

// calling function with args entered in command line

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

while (dir) {
  mdLinks(dir, opts);
};