export const getUnAuthPosts = `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
      id
      title
      description
      file {
        bucket
        region
        key
      }
      likes
     
      createdAt
      updatedAt
      owner
    }
  }
`;

export const getAuthPosts = `
query GetPosts($id: ID!) {
  getPosts(id: $id) {
    id
    title
    description
    file {
      bucket
      region
      key
    }
    likes
    comments {
      items {
        id
        postID
        content
        createdBy
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
    createdAt
    updatedAt
    owner
  }
}
`;
