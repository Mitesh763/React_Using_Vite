import { useContext } from "react";
import "./css/CreatePost.css";
import { MdOutlineDelete, MdAddReaction } from "react-icons/md";
import { PostLists } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostLists);

  return (
    <div className="card" style={{ width: "24rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ cursor: "pointer" }}
            onClick={() => deletePost(post.id)}
          >
            <MdOutlineDelete />
          </span>
        </h5>
        <p className="card-text">@{post.userId}</p>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashTag">
            #{tag}
          </span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          Reactions: {post.reactions.likes} <MdAddReaction />
        </div>
      </div>
    </div>
  );
};

export default Post;
