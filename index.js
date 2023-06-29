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
    .catch(err => err));
  const promiseWithoutValidate = () => new Promise((resolve, reject)
    .then(links.forEach(link => { 
      const linkObj = new Object;
      linkObj.href = '';
      linkObj.text = '';
      linkObj.file = '';
      linksArr.push(linkObj);
      return linksArr;
    }))
    .catch(err => err));
  options = {validate : true} ? promiseWithValidate() : promiseWithoutValidate();
};

export const findLinksInMdFile = path => {

};