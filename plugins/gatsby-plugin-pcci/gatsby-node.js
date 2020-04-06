const path = require('path');
const slugify = require('@sindresorhus/slugify');

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/app/*';

    // Update the page.
    createPage(page);
  }
};

exports.createPages = async ({ graphql, getNode, actions }) => {
  const { createPage } = actions;

  try {
    const {
      data: {
        pcci: { courseCategories, instructors, courses },
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
          courseCategories {
            _id
            name
          }
          courses {
            _id
            title
            description
            category {
              _id
              name
            }
            fee
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

    // Create Course pages
    courses.forEach(course => {
      const slug = '/course/' + slugify(course.title);
      course.slug = slug;

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/course.js`),
        context: {
          url: slug,
          course: course,
          frontmatter: {
            title: course.title,
          },
          site: {
            siteMetadata: siteNode.siteMetadata,
          },
        },
      });
    });

    // Create Courses Page which lists courses
    createPage({
      path: '/courses/',
      component: path.resolve(`./src/templates/courses.js`),
      context: {
        url: '/courses/',
        courses: courses,
        frontmatter: {
          title: 'Courses',
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

    // Login
    createPage({
      path: '/login/',
      component: path.resolve(`./src/templates/login.js`),
      context: {
        url: '/login/',
        frontmatter: {
          title: 'Login',
        },
        site: {
          siteMetadata: siteNode.siteMetadata,
        },
      },
    });

    // SignUp
    createPage({
      path: '/register/',
      component: path.resolve(`./src/templates/register.js`),
      context: {
        url: '/register/',
        frontmatter: {
          title: 'Register',
        },
        site: {
          siteMetadata: siteNode.siteMetadata,
        },
      },
    });

    // createPage({});
  } catch (err) {
    console.log(err);
  }
};
