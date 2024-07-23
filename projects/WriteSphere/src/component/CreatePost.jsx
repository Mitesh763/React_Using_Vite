import { useContext } from "react";
import "./css/CreatePost.css";
import { Form, redirect, useNavigate } from "react-router-dom";
import { PostLists } from "../store/Post-list-store";
import { createPostAction } from "../actions/createPostAction.jsx";

export default function CreatePost() {
  // useContext hoook
  const { addPost } = useContext(PostLists);
  // const navigate = useNavigate();

  // useRef hook
  // const userIdele = useRef();
  // const postTitleele = useRef();
  // const postBodyele = useRef();
  // const reactionele = useRef();
  // const tagEle = useRef();

  // const handleOnsubmit = (event) => {
  // event.preventDefault();
  // const userId = userIdele.current.value;
  // const postTitle = postTitleele.current.value;
  // const postBody = postBodyele.current.value;
  // const reactions = reactionele.current.value;
  // const tages = tagEle.current.value.split(" ");
  // userIdele.current.value = "";
  // postTitleele.current.value = "";
  // postBodyele.current.value = "";
  // reactionele.current.value = "";
  // tagEle.current.value = "";
  // console.log("Outside fetch add");
  //   addPost(
  //   userId.current.value,
  //   postTitle.current.value,
  //   postBody.current.value,
  //   reaction.current.value,
  //   tagsList
  // );
  // };

  return (
    <>
      <Form
        method="POST"
        action={async (data) => createPostAction(data, addPost)}
      >
        <div className="form-heading">
          <h1>Create new Post</h1>
          <p>share your new post</p>
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            UserID:
          </label>
          <input
            type="text"
            className="form-control"
            name="userId"
            id="userId"
            placeholder="Enter your ID...."
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Title your Post"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            name="body"
            id="description"
            cols="10"
            placeholder="write your post...."
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Reactions :
          </label>
          <input
            type="text"
            className="form-control"
            name="reactions"
            id="reaction"
            placeholder="Enter Post Reaction...."
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags:
          </label>
          <input
            type="text"
            className="form-control"
            name="tags"
            id="tags"
            placeholder="Enter Post tags using Space...."
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-warning">
          ADD POST
        </button>
      </Form>
    </>
  );
}

// export const createPostaction = async (data) => {
//   // useContext
//   // const { addPost } = useContext(PostLists);

//   //object and data of form
//   const formDataObject = await data.request.formData();
//   console.log("Object", formDataObject);
//   const formData = Object.fromEntries(formDataObject);
//   formData.tags = formData.tags.split(" ");
//   console.log("DAtA", formData);
//   // console.log("enter in fetch add");

//   //fetching
//   fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(
//       formData
//       //   {
//       //   title: postTitle,
//       //   body: postBody,
//       //   reactions: reactions,
//       //   userId: userId,
//       //   tags: tages,
//       // }
//     ),
//   })
//     .then((res) => res.json())
//     .then((post) => {
//       console.log("Fetched Data : ", post);
//       addPost(post);
//     })
//     .catch((error) => {
//       console.error("Error adding post:", error);
//     });

//   return redirect("/");
// };
