import { gql } from "@apollo/client";

const projectsDocument = gql`
  query Projects {
    projects {
      id
      authorId
      createdAt
      updatedAt
      github
      website
      category
      name
      title
      logo
      content
    }
  }
`;

export default projectsDocument;
