export const getUnAuthPosts = /* GraphQL */ `
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

      createdBy

      createdAt
      updatedAt
      owner
    }
  }
`;

export const getPosts = /* GraphQL */ `
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

export const getAuthPosts = /* GraphQL */ `
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
          replise {
            items {
              reply
              createdBy
              createdAt
              commentID
              id
              updatedAt
              owner
            }
          }
        }

        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;

export const unAuthlistPosts = /* GraphQL */ `
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
        # comments {
        #   items {
        #     content
        #     createdAt
        #     createdBy
        #     id
        #     postID
        #     replise {
        #       nextToken
        #     }
        #   }
        #   nextToken
        # }
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
