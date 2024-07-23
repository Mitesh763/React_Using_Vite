import "./Card.css";

export default function Card({ posts, handleOnClick }) {
  return (
    <>
      <div className="card">
        <span className="title">{posts.title}</span>
        <img src={posts.img} alt="" className="img" />
        <p className="desc">{posts.desc}</p>
        <button onClick={handleOnClick}>Read more</button>
      </div>
    </>
  );
}
