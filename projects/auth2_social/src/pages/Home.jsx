import Card from "../components/Card";
import { posts } from "../data";
import "../components/Card.css";
import Post from "./Post";

export default function Home() {
  // const handleOnClick = () =>{

  // }
  return (
    <>
      <div className="cards">
        {posts.map((post) => (
          <Card
            key={post.id}
            posts={post}
            handleOnClick={<Post key={post.id} posts={post} />}
          />
        ))}
      </div>
    </>
  );
}
