import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
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
      <div className="post">
        <div className="image">
          <img src="" alt="img-2" />
        </div>
        <div className="texts">
          <h2>Image Title 2</h2>
          <p className="info">
            <a href="" className="author">
              Author Name
            </a>
            <time datetime="">2024-10-8 16:45</time>
          </p>
          <p className="summary">Some information about the Image</p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img src="" alt="img-3" />
        </div>
        <div className="texts">
          <h2>Image Title 3</h2>
          <p className="info">
            <a href="" className="author">
              Author Name
            </a>
            <time datetime="">2024-10-8 16:45</time>
          </p>
          <p className="summary">Some information about the Image</p>
        </div>
      </div>
    </main>
  );
}

export default App;
