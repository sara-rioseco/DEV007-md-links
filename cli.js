#!/usr/bin/env node

// importing mdLinks function
import mdLinks from './md-links.js';

// getting arguments from command line
const dir = process.argv[2];
const opts = process.argv[3];

// calling function with args entered in command line
while (dir) {
  mdLinks(dir, opts);
};