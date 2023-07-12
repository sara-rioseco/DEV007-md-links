// importing functions from index.js
import {
    getMdFilesArr,
    readMdFile,
    getLinks,
    separateLink,
    separateAllLinks,
    findLinksInMdFile,
    checkOptions,
    } from './index.js';

export const mdLinks = (path, options) => {
  const optionsEntered = checkOptions();
  options = optionsEntered;
  const linksArr = [];
  console.log(options);
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
    const promiseWithoutValidate = () => new Promise((resolve, reject)
      .then(links.forEach(link => { 
        const linkObj = new Object;
        linkObj.href = '';
        linkObj.text = '';
        linkObj.file = '';
        linksArr.push(linkObj);
        return linksArr;
      }))
      .catch(error => 'there was an error'));
  };

  mdLinks('./Examples', {});
