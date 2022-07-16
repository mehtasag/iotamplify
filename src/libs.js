import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import * as mutation from "./graphql/mutations";
import aws_exports from "./aws-exports";
import toast from "react-hot-toast";

/***  Delete Post  ***/
export const deletePost = async (data) => {
  console.log(data);
  console.log(data.file.key);
  await Storage.remove(`${data.file.key}`);
  const deletePostId = {
    id: data.id,
  };
  API.graphql({
    query: mutation.deletePosts,
    variables: { input: deletePostId },
    authMode: "AMAZON_COGNITO_USER_POOLS",
  });

  toast.success("Post Deleted Successfully");
};

/***  Create Post  ***/
export const createPost = async (image, postData) => {
  try {
    const fileName = `${Date.now()}-${image.name}`;

    const uploadedFile = await Storage.put(fileName, image, {
      contentType: image.name.type,
    });

    const file = {
      key: uploadedFile.key,
      bucket: aws_exports.aws_user_files_s3_bucket,
      region: aws_exports.aws_project_region,
    };

    await API.graphql({
      query: mutation.createPosts,
      variables: {
        input: { ...postData, file },
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("Post has created");
  } catch (err) {
    console.log("error creating post:", err);
  }
};

/***  Create Comment  ***/
export const createComment = async (commentData) => {
  try {
    await API.graphql({
      query: mutation.createComment,
      variables: {
        input: commentData,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toast.success("Post has been created successfully");
  } catch (err) {
    console.log(err);
    toast.error("Error creating comment");
  }
};

/*** Create Reply on Comment  ***/

export const createCommentReply = async (replyData, replyTo) => {
  try {
    await API.graphql({
      query: mutation.createReplies,
      variables: {
        input: replyData,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toast.success(`You just replied to ${replyTo}`);
  } catch (err) {
    toast.error("Error creating comment");
    console.log(err);
  }
};

/***  Like Post (Update)  ***/

export const likePost = async (data) => {
  try {
    await API.graphql({
      query: mutation.updatePosts,
      variables: {
        input: data,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toast.success("You just liked this post !!😄");
  } catch (err) {
    toast.error("Please Sign In to Like this Post");
  }
};

/***  Update Profile (Update)  ***/
export const updateProfile = async (data) => {
  try {
    await API.graphql({
      query: mutation.updateUser,
      variables: {
        input: data,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    toast.success("Profile Updated");
  } catch (err) {
    console.log(err);
    toast.error("Failed to update your profile");
  }
};
