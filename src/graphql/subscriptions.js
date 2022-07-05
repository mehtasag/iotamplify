/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($owner: String) {
    onCreatePosts(owner: $owner) {
      id
      title
      description
      file {
        bucket
        region
        key
      }
      # likes
      # comments {
      #   items {
      #     id
      #     postID
      #     content
      #     createdBy
      #     createdAt
      #     updatedAt
      #     owner
      #   }
      #   nextToken
      # }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($owner: String) {
    onUpdatePosts(owner: $owner) {
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
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($owner: String) {
    onDeletePosts(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      postID
      content
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      postID
      content
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      postID
      content
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
