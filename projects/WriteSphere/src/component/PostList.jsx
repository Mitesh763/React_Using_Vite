import { useContext } from "react";
import Post from "./Post";
import "./css/PostList.css";
import { PostLists as PostListData } from "../store/Post-list-store";
import WelcomeMSG from "./WelcomeMSG";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
  const { postLists, fetching } = useContext(PostListData);

  return (
    <div className="post-list">
      {fetching && <LoadingSpinner />}
      {!fetching && postLists.length === 0 && <WelcomeMSG />}
      {!fetching && postLists.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
