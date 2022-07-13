/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPosts = /* GraphQL */ `
  mutation CreatePosts(
    $input: CreatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    createPosts(input: $input, condition: $condition) {
      id
      title
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
      owner
    }
  }
`;
export const updatePosts = /* GraphQL */ `
  mutation UpdatePosts(
    $input: UpdatePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    updatePosts(input: $input, condition: $condition) {
      id
      title
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
      owner
    }
  }
`;
export const deletePosts = /* GraphQL */ `
  mutation DeletePosts(
    $input: DeletePostsInput!
    $condition: ModelPostsConditionInput
  ) {
    deletePosts(input: $input, condition: $condition) {
      id
      title
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
      owner
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createReplies = /* GraphQL */ `
  mutation CreateReplies(
    $input: CreateRepliesInput!
    $condition: ModelRepliesConditionInput
  ) {
    createReplies(input: $input, condition: $condition) {
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
export const updateReplies = /* GraphQL */ `
  mutation UpdateReplies(
    $input: UpdateRepliesInput!
    $condition: ModelRepliesConditionInput
  ) {
    updateReplies(input: $input, condition: $condition) {
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
export const deleteReplies = /* GraphQL */ `
  mutation DeleteReplies(
    $input: DeleteRepliesInput!
    $condition: ModelRepliesConditionInput
  ) {
    deleteReplies(input: $input, condition: $condition) {
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
