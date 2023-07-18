// importing functions from ./index.js
import { getMdFilesArr, Validate, NoValidate, countStats } from "./index.js";

// declaring main fx
const mdLinks = (path, options) => {
  const filesArr = getMdFilesArr(path, []);
  if (filesArr.length < 1) {
    throw new Error('No markdown files were found')
  }
  if (options.validate && options.stats) {
    Promise.all(Validate(filesArr)).then(result => console.log(result, countStats(result)));
    console.log ('Successfully retrieved links from .md files with validation and stats')
  };
  if (options.validate && !options.stats) {
    Promise.all(Validate(filesArr)).then(result => console.log(result))
    console.log('Successfully retrieved links from .md files with validation')
  };
  if (!options.validate && options.stats) {
    Promise.all(NoValidate(filesArr)).then(result => console.log(result, countStats(result)))
    console.log('Successfully retrieved links from .md files with stats')
  };
  if (!options.validate && !options.stats) {
    Promise.all(NoValidate(filesArr)).then(result => console.log(result))
    console.log('Successfully retrieved links from .md files without validation nor stats')
  };
};

export default mdLinks;