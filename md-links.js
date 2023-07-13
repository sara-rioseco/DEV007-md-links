// importing functions from index.js
import {
    getMdFilesArr,
    getLinks,
    checkOptions,
    readMdFile,
    separateLink,
    separateAllLinks,
    findLinksInMdFile,
    } from './index.js';

const promiseNoValidateNoStats = (arr, path) => new Promise((resolve, reject) => {
  resolve(() => (arr.map(file => (findLinksInMdFile(file)))).flat(1));
  reject(() => { throw new Error('Error reading files')});
});
const promiseValidateNoStats = (arr) => new Promise((resolve, reject) => {
/*  resolve(() => (arr.map(file => (findLinksInMdFile(file)))).flat(1));
  reject(() => { throw new Error('Error reading files')}); */
});
const promiseNoValidateStats = (arr) => new Promise((resolve, reject) => {
/*  resolve(() => (arr.map(file => (findLinksInMdFile(file)))).flat(1));
  reject(() => { throw new Error('Error reading files')}); */
});
const promiseValidateStats = (arr) => new Promise((resolve, reject) => {
/*  resolve(() => (arr.map(file => (findLinksInMdFile(file)))).flat(1));
  reject(() => { throw new Error('Error reading files')});*/
});

export const mdLinks = (path, options) => {
  const optionsEntered = checkOptions();
  options = optionsEntered;
  const filesArr = getMdFilesArr(path, []);
  if (options.validate && options.stats) {
    console.log('ejecuta con validate y con stats');
    promiseValidateStats(filesArr, path)
    .then(result => console.log(result()))
    .catch(err => {throw new Error(err)})
  };
  if (options.validate && !options.stats) {
    console.log('ejecuta con validate y sin stats');
    promiseValidateNoStats(filesArr, path)
    .then(result => console.log(result()))
    .catch(err => {throw new Error(err)})
  };
  if (!options.validate && options.stats) {
    console.log('ejecuta sin validate y con stats');
    promiseNoValidateStats(filesArr, path)
    .then(result => console.log(result()))
    .catch(err => {throw new Error(err)})
  };
  if (!options.validate && !options.stats) {
    console.log('ejecuta sin validate y sin stats');
    promiseNoValidateNoStats(filesArr, path)
    .then(result => console.log(result()))
    .catch(err => {throw new Error(err)})
  }
};

mdLinks('./Examples', )