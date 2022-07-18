/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPosts = /* GraphQL */ `
  query GetPosts($id: ID!) {
    getPosts(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts {
    listPosts {
      items {
        id
        title
        owner
        description
        file {
          bucket
          region
          key
        }
        # likes {
        #   nextToken
        # }
        createdBy
        comments {
          items {
            content
            createdAt
            createdBy
            id
            postID
            replise {
              nextToken
            }
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
    # listPosts {
    #   items {
    #     id
    #     description
    #     title
    #     comments {
    #       items {
    #         content
    #         createdAt
    #         createdBy
    #         id
    #         postID
    #         replise {
    #           nextToken
    #         }
    #       }
    #       nextToken
    #     }
    #   }
    # }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        user {
          id
          username
          name
          email
          owner
          createdAt
          about
          updatedAt
          website
          country
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTrending = /* GraphQL */ `
  query GetTrending($id: ID!) {
    getTrending(id: $id) {
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
export const listTrendings = /* GraphQL */ `
  query ListTrendings(
    $filter: ModelTrendingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrendings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resultData {
          image
          name
          source
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdBy
        replise {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getReplies = /* GraphQL */ `
  query GetReplies($id: ID!) {
    getReplies(id: $id) {
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
export const listReplies = /* GraphQL */ `
  query ListReplies(
    $filter: ModelRepliesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
