
function App() {
  return (
    <div>
       <div id="wrapper">
      <header>
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.jpg" alt=""
        /></a>

        <nav>
          <div>
            <a href="#">Dashboard</a>
          </div>

          <div className="user">
            <a href="#">Create Offer</a>
            <a href="#">Logout</a>
          </div>

          <div className="guest">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <img
            src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
            alt="home"
          />
          <h2>Searching for a job?</h2>
          <h3>The right place for a new career start!</h3>
        </section>

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

        <section id="register">
          <div className="form">
            <h2>Register</h2>
            <form className="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p className="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>

        <section id="login">
          <div className="form">
            <h2>Login</h2>
            <form className="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>

        <section id="create">
          <div className="form">
            <h2>Create Offer</h2>
            <form className="create-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>

        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="./images/example2.png" alt="example1" />
            <p id="details-title">Senior Frontend Software Engineer</p>
            <p id="details-category">
              Category: <span id="categories">IT, Developer, WEB</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">7000</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span
                  >We are looking for programmers with a keen eye for design for
                  the position of front end developer. Front end developers are
                  responsible for ensuring the alignment of web design and user
                  experience requirements, optimizing web pages for maximum
                  efficiency, and maintaining brand consistency across all web
                  pages, among other duties.</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >Degree in computer science or related field. Understanding of
                  key design principles. Proficiency in HTML, CSS, JavaScript.
                  Experience with responsive and adaptive design. Good
                  problem-solving skills. Excellent verbal communication skills.
                  Good interpersonal skills.</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">1</strong></p>

            <div id="action-buttons">
              <a href="" id="edit-btn">Edit</a>
              <a href="" id="delete-btn">Delete</a>

              <a href="" id="apply-btn">Apply</a>
            </div>
          </div>
        </section>

        <section id="edit">
          <div className="form">
            <h2>Edit Offer</h2>
            <form className="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
      </main>
    </div>
    <footer>
      <p>@ClearCareer</p>
    </footer>
    </div>
  );
}

export default App;
