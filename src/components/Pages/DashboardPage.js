const DashboardPage = () => {
    return (
        <section id="dashboard">
          <h2>Job Offers</h2>

          <div className="offer">
            <img src="./images/example1.png" alt="example1" />
            <p>
              <strong>Title: </strong><span className="title">Sales Manager</span>
            </p>
            <p><strong>Salary:</strong><span className="salary">1900</span></p>
            <a className="details-btn" href="">Details</a>
          </div>
          <div className="offer">
            <img src="./images/example2.png" alt="example2" />
            <p>
              <strong>Title: </strong
              ><span className="title">Senior Frontend Software Engineer</span>
            </p>
            <p><strong>Salary:</strong><span className="salary">7000</span></p>
            <a className="details-btn" href="">Details</a>
          </div>
          <div className="offer">
            <img src="./images/example3.png" alt="./images/example3.png" />
            <p>
              <strong>Title: </strong
              ><span className="title">Invoice Administrator</span>
            </p>
            <p><strong>Salary:</strong><span className="salary">1700</span></p>
            <a className="details-btn" href="">Details</a>
          </div>

          <h2>No offers yet.</h2>
        </section>
    );
}

export default DashboardPage;