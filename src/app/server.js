import express from 'express';
import gatsbyExpress from 'gatsby-plugin-express';
import cors from 'cors';
import compress from 'compression';
import helmet from 'helmet';

const app = express();

app.use(cors());

app.use(compress());

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
      // imgSrc: ["'self'", 'data:', '*.amazonaws.com']
      fontSrc: ["'self'", 'fonts.gstatic.com']
    }
  })
);
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

// serve static files before gatsbyExpress
app.use(express.static('public/'));
app.use(
  gatsbyExpress(`config/gatsby-express.json`, {
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
