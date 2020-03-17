

import React from 'react';
import { graphql } from "gatsby";
import { Layout } from '../components/index';

class Teachers extends React.Component {
   render() {
       const { instructors } = this.props.data.fauna
        return (
            <Layout {...this.props}>
              <ul>
                {instructors.data.map(instructor => (
                  <li key={instructor._id}>{instructor.name} - {instructor.excerpt}</li>
                ))}
              </ul>
            </Layout>
          )
   } 
} 

export const query = graphql`
{
  fauna {
    instructors {
      data { _id name excerpt }
    }
  }
}
`

export default Teachers