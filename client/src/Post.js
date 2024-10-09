export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="" alt="img-1" />
      </div>
      <div className="texts">
        <h2>Image Title 1</h2>
        <p className="info">
          <a href="" className="author">
            Author Name
          </a>
          <time datetime="">2024-10-8 16:45</time>
        </p>
        <p className="summary">Some information about the Image</p>
      </div>
    </div>
  );
}
