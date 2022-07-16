/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePosts = /* GraphQL */ `
  subscription OnCreatePosts($owner: String) {
    onCreatePosts(owner: $owner) {
      id
      title
      owner
      description
      file {
        bucket
        region
        key
      }
      likes {
        items {
          id
          postID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
    }
  }
`;
export const onUpdatePosts = /* GraphQL */ `
  subscription OnUpdatePosts($owner: String) {
    onUpdatePosts(owner: $owner) {
      id
      title
      owner
      description
      file {
        bucket
        region
        key
      }
      likes {
        items {
          id
          postID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
    }
  }
`;
export const onDeletePosts = /* GraphQL */ `
  subscription OnDeletePosts($owner: String) {
    onDeletePosts(owner: $owner) {
      id
      title
      owner
      description
      file {
        bucket
        region
        key
      }
      likes {
        items {
          id
          postID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String) {
    onCreateLike(owner: $owner) {
      id
      postID
      user {
        id
        username
        name
        email
        owner
        image {
          bucket
          region
          key
        }
        createdAt
        about
        preference {
          id
          name
        }
        updatedAt
        website
        country
        posts {
          nextToken
        }
        searches {
          name
        }
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String) {
    onUpdateLike(owner: $owner) {
      id
      postID
      user {
        id
        username
        name
        email
        owner
        image {
          bucket
          region
          key
        }
        createdAt
        about
        preference {
          id
          name
        }
        updatedAt
        website
        country
        posts {
          nextToken
        }
        searches {
          name
        }
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String) {
    onDeleteLike(owner: $owner) {
      id
      postID
      user {
        id
        username
        name
        email
        owner
        image {
          bucket
          region
          key
        }
        createdAt
        about
        preference {
          id
          name
        }
        updatedAt
        website
        country
        posts {
          nextToken
        }
        searches {
          name
        }
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      username
      name
      email
      owner
      image {
        bucket
        region
        key
      }
      createdAt
      about
      preference {
        id
        name
      }
      updatedAt
      website
      country
      posts {
        items {
          id
          title
          owner
          description
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      searches {
        name
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      username
      name
      email
      owner
      image {
        bucket
        region
        key
      }
      createdAt
      about
      preference {
        id
        name
      }
      updatedAt
      website
      country
      posts {
        items {
          id
          title
          owner
          description
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      searches {
        name
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      username
      name
      email
      owner
      image {
        bucket
        region
        key
      }
      createdAt
      about
      preference {
        id
        name
      }
      updatedAt
      website
      country
      posts {
        items {
          id
          title
          owner
          description
          createdBy
          createdAt
          updatedAt
        }
        nextToken
      }
      searches {
        name
      }
    }
  }
`;
export const onCreateTrending = /* GraphQL */ `
  subscription OnCreateTrending {
    onCreateTrending {
      id
      resultData {
        image
        name
        source
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTrending = /* GraphQL */ `
  subscription OnUpdateTrending {
    onUpdateTrending {
      id
      resultData {
        image
        name
        source
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTrending = /* GraphQL */ `
  subscription OnDeleteTrending {
    onDeleteTrending {
      id
      resultData {
        image
        name
        source
      }
      createdAt
      updatedAt
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
