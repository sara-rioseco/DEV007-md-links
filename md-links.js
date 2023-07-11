// importing functions from index.js
import {
    getMdFilesArr,
    readMdFile,
    getLinks,
    separateLink,
    separateAllLinks,
    findLinksInMdFile,
    findLinksInAllMdFilesInDir
    } from './index.js';

// getting all the links in all the md files in path (and every sub-path) with options
export const mdLinks = (path, options) => {
    const linksArr = [];
    const links = findLinksInMdFile(path);
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
    options = {validate : true} ? promiseWithValidate() : promiseWithoutValidate();
  };