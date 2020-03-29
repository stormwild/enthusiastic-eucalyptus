// require('isomorphic-fetch');

// exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions;
//   try {
//     //     require('isomorphic-fetch');

//     // fetch('https://1jzxrj179.lp.gql.zone/graphql', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ query: '{ posts { title } }' }),
//     // })
//     //   .then(res => res.json())
//     //   .then(res => console.log(res.data));
//     // const data = await graphql(`
//     //   query {
//     // pcci {
//     //   instructors {
//     //     _id
//     //     name
//     //     photo
//     //     bio
//     //   }
//     // }
//     //   }
//     // `);
//     // require('isomorphic-fetch');

//     // fetch('https://1jzxrj179.lp.gql.zone/graphql', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ query: '{ posts { title } }' }),
//     // })
//     //   .then(res => res.json())
//     //   .then(res => console.log(res.data));

//     //     var dice = 3;
//     // var sides = 6;
//     //     var query = `query RollDice($dice: Int!, $sides: Int) {
//     //   rollDice(numDice: $dice, numSides: $sides)
//     // }`;

//     // fetch('/graphql', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     'Accept': 'application/json',
//     //   },
//     //   body: JSON.stringify({
//     //     query,
//     //     variables: { dice, sides },
//     //   })
//     // })
//     //   .then(r => r.json())
//     //   .then(data => console.log('data returned:', data));

//     console.log('url', process.env.PCCI_API_GRAPHQL_URL);
//     const query = `
//     query {
//       instructors {
//         _id
//         name
//         photo
//         bio
//       }
//     }
//     `;

//     const { data } = await (
//       await fetch(`${process.env.PCCI_API_GRAPHQL_URL}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
//         body: JSON.stringify({ query }),
//       })
//     ).json();

//     // Helper function that processes a photo to match Gatsby's node structure
//     const processInstructor = instructor => {
//       const nodeId = createNodeId(`pcci-instructor-${instructor._id}`);
//       const nodeContent = JSON.stringify(instructor);
//       const nodeData = Object.assign({}, instructor, {
//         id: nodeId,
//         parent: null,
//         children: [],
//         internal: {
//           type: `PCCI_Instructor`,
//           content: nodeContent,
//           contentDigest: createContentDigest(instructor),
//         },
//       });
//       return nodeData;
//     };

//     if (data) {
//       console.log('Data: ', data);

//       // Process data into nodes.
//       data.instructors.forEach(datum => createNode(processInstructor(datum)));
//     } else {
//       console.log('Data: ', data);
//     }

//     // You're done, return.
//     return;
//   } catch (err) {
//     console.log(err);
//   }
// };

// // exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
// //   const { createNode } = actions

// //   // Data can come from anywhere, but for now create it manually
// //   const myData = {
// //     key: 123,
// //     foo: `The foo field of my node`,
// //     bar: `Baz`
// //   }

// //   const nodeContent = JSON.stringify(myData)

// //   const nodeMeta = {
// //     id: createNodeId(`my-data-${myData.key}`),
// //     parent: null,
// //     children: [],
// //     internal: {
// //       type: `MyNodeType`,
// //       mediaType: `text/html`,
// //       content: nodeContent,
// //       contentDigest: createContentDigest(myData)
// //     }
// //   }

// //   const node = Object.assign({}, myData, nodeMeta)
// //   createNode(node)
// // }
