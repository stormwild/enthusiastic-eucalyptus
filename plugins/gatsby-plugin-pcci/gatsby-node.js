const path = require('path');
const slugify = require('@sindresorhus/slugify');

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions;

  try {
    const {
      data: {
        pcci: { instructors },
      },
    } = await graphql(`
      query {
        pcci {
          instructors {
            _id
            name
            photo
            excerpt
            bio
          }
        }
      }
    `);

    const siteNode = getNode('Site');

    // Create Instructor pages
    instructors.forEach(instructor => {
      const slug = '/instructor/' + slugify(instructor.name);
      instructor.slug = slug;

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/instructor.js`),
        context: {
          url: slug,
          instructor: instructor,
          frontmatter: {
            title: instructor.name,
          },
          site: {
            siteMetadata: siteNode.siteMetadata,
          },
        },
      });
    });

    // Create Faculty Page which lists instructors
    createPage({
      path: '/faculty/',
      component: path.resolve(`./src/templates/faculty.js`),
      context: {
        url: '/faculty/',
        instructors: instructors,
        frontmatter: {
          title: 'Faculty',
        },
        site: {
          siteMetadata: siteNode.siteMetadata,
        },
      },
    });

    // Create App Page
    createPage({
      path: '/app/',
      component: path.resolve(`./src/templates/app.js`),
      context: {
        url: '/app/',
        frontmatter: {
          title: 'App Dashboard',
        },
        site: {
          siteMetadata: siteNode.siteMetadata,
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};
