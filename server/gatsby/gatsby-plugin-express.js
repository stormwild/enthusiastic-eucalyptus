import fs from 'fs';
import path from 'path';

const redirect = (data = 'gatsby-express.json', options = {}) => {
  const publicDir = options.publicDir || path.resolve('public/');
  const template = path.resolve(publicDir, options.template);

  if (typeof data === 'string') {
    data = fs.readFileSync(data);
    data = JSON.parse(data);
  }

  const join = p => path.join(publicDir, p);
  const paths = data.pages.map(p => p.path);

  return (req, res, next) => {
    try {
      if (paths.indexOf(req.path) > -1) {
        const index = path.resolve(join(req.path), 'index.html');
        if (index) {
          // remove trailing slashes in request
          if (options.redirectSlashes && req.path.endsWith('/')) {
            return res.redirect(req.path.substr(0, req.path.length - 1));
          }
          return res.sendFile(index);
        }
      }
      return res.sendFile(template);
    } catch (error) {
      console.log(template);
      throw error;
    }
  };
};

export default redirect;
