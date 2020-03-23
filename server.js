import express from 'express';
import gatsbyExpress from 'gatsby-plugin-express';

const app = express();

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(
  gatsbyExpress('config/gatsby-express.json', {
    publicDir: 'public/',
    template: 'public/404/index.html',

    // redirects all /path/ to /path
    // should be used with gatsby-plugin-remove-trailing-slashes
    redirectSlashes: true
  })
);

app.listen(3000, function() {
  console.log('App started on port 3000');
});
