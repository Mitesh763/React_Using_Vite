export default function Post({ posts }) {
  return (
    <>
      <div className="post">
        <img src={posts.img} alt="" className="postImg" />
        <h3 className="postTitle">{posts.title}</h3>
        <p className="postDesc">{posts.desc}</p>
        <p className="postDesc2">{posts.long_desc}</p>
      </div>
    </>
  );
}
