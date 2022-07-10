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
      likes
      createdBy
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
      createdBy
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
      createdBy
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
      # replise {
      #   items {
      #     id
      #     commentID
      #     reply
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      postID
      content
      createdBy
      replise {
        items {
          id
          commentID
          reply
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      postID
      content
      createdBy
      replise {
        items {
          id
          commentID
          reply
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
export const onCreateReplies = /* GraphQL */ `
  subscription OnCreateReplies($owner: String) {
    onCreateReplies(owner: $owner) {
      id
      commentID
      reply
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateReplies = /* GraphQL */ `
  subscription OnUpdateReplies($owner: String) {
    onUpdateReplies(owner: $owner) {
      id
      commentID
      reply
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteReplies = /* GraphQL */ `
  subscription OnDeleteReplies($owner: String) {
    onDeleteReplies(owner: $owner) {
      id
      commentID
      reply
      createdBy
      createdAt
      updatedAt
      owner
    }
  }
`;
