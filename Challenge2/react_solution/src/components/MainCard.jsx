

const MainCard = () => {
  return (
    <div className="main-container">

      <div className="main-container_text">
        <div className="container-title">
          <h1>Get <span>insights</span> that help your business grow.</h1>
        </div>

        <div className="container_description">
          <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer
            experience, and overall efficiency.</p>
        </div>

        <div className="main-container_stats">
          <div className="container_stats">
            <h2>10k+</h2> <span>companies</span>
          </div>

          <div className="container_stats">
            <h2>314</h2> <span>templates</span>
          </div>

          <div className="container_stats">
            <h2>12M+</h2> <span>queries</span>
          </div>
        </div>

      </div>

      <div className="main-container_image">
      </div>


    </div>
  );
}

export default MainCard;