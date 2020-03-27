const path = require('path');
const slugify = require('@sindresorhus/slugify');

// const { createFilePath } = require(`gatsby-source-filesystem`);

// PCCI
// PCCI_Instructor
// exports.onCreateNode = ({ node }) => {
//   console.log('PCCI Instructor', node.internal.type);
//   // console.log('PCCI Instructor: ' + node.internal.type);
//   // if (node.internal.type === `GraphQLSource`) {
//   //   console.log(node.id, node.parent, node.children);
//   // }
// };

exports.createPages = async ({ graphql, getNode, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions;

  try {
    const result = await graphql(`
      query {
        pcci {
          instructors {
            name
            photo
            bio
          }
        }
      }
    `);

    const siteNode = getNode('Site');

    result.data.pcci.instructors.forEach(instructor => {
      const slug = '/instructor/' + slugify(instructor.name);

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
  } catch (err) {
    console.log(err);
  }
};
