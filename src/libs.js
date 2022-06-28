import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import * as mutation from "./graphql/mutations";
import aws_exports from "./aws-exports";

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
  });
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

    await API.graphql(
      graphqlOperation(mutation.createPosts, { input: { ...postData, file } })
    );
    console.log("Post has created");
  } catch (err) {
    console.log("error creating todo:", err);
  }
};
