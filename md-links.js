// importing functions from index.js
import {
    getMdFilesArr,
    getLinks,
    checkOptions,
    } from './index.js';

export const mdLinks = (path, options) => {
  const optionsEntered = checkOptions();
  options = optionsEntered;
  if (options.validate && options.stats) {
    console.log('ejecuta con validate y con stats');
  };
  if (options.validate && !options.stats) {
    console.log('ejecuta con validate y sin stats') 
  };
  if (!options.validate && options.stats) {
    console.log('ejecuta sin validate y con stats')
  };
  if (!options.validate && !options.stats) {
    console.log('ejecuta sin validate y sin stats')
    return new Promise((resolve, reject) => {
      const mdFilesArr = getMdFilesArr(path, []);
      resolve(() => console.log(getLinks(mdFilesArr)));
      reject(() => { throw new Error('Error reading files')} );
    })
  } else {
    throw new Error('invalid command')
  }

  const promiseWithValidate = () => new Promise((resolve, reject)
  .then(links.forEach(link => { 
    const linkObj = new Object;
    linkObj.href = '';
    linkObj.text = '';
    linkObj.file = `${path}`;
    linkObj.status = '';
    linkObj.ok = '';
    linksArr.push(linkObj);
    return linksArr;
  }))
  .catch(error => 'there was an error'));
const promiseNoValidateNoStats = () => new Promise((resolve, reject) => {
  resolve(() => getLinks(mdFilesArr));
  reject(() => { throw new Error('Error reading files')} );
});
const promiseValidateNoStats = () => new Promise((resolve, reject) => {
  resolve(() => getLinks(mdFilesArr));
  reject(() => { throw new Error('Error reading files')} );
});
const promiseNoValidateStats = () => new Promise((resolve, reject) => {
  resolve(() => getLinks(mdFilesArr));
  reject(() => { throw new Error('Error reading files')} );
});
const promiseValidateStats = (

) => new Promise((resolve, reject) => {
  resolve(() => getLinks(mdFilesArr));
  reject(() => { throw new Error('Error reading files')} );
});
};

console.log(mdLinks('./Examples', ));
