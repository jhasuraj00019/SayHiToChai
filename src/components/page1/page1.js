import React from "react";
import {Link} from 'react-router-dom'
import "./page1.css";

const PageOne = function () {
  return (
    <div>
      <div className="first">
        <div className="title">
          {/* <!-- <h4>- BOUTIQUE FACTORY -</h4> --> */}

          <h1>
            Say Hi! <br />
            <br />
            to
          </h1>
          <h1>
            <span>Chai</span>
          </h1>
          {/* <!-- <br> --> */}
          <p>
            <Link to="/ordering">ORDER ONLINE</Link>
          </p>
        </div>
      </div>
      <div className="second">
        <div className="info">
          <div className="card">
            <div className="pic left">
              <img
                src="https://static.wixstatic.com/media/5bfb6f_9187ca7d81a740878fcf167282edab65.jpg/v1/fill/w_414,h_540,al_c,q_80,usm_0.66_1.00_0.01/5bfb6f_9187ca7d81a740878fcf167282edab65.webp"
                alt=""
              />
            </div>
            <div className="text right">
              <h1>Me & Chai</h1>
              <hr style={{ margin: "auto", width: "100px" }} />
              <p>Meet the Chai Addict</p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                dolorum deserunt quasi quam corporis eveniet, accusamus ipsum
                non reprehenderit doloremque facilis, magnam voluptate
                consequatur quae voluptas hic. Magni, magnam inventore? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Ratione
                delectus dignissimos accusamus tenetur voluptas minus
                repudiandae fuga, libero a provident beatae eius deleniti fugit
                culpa blanditiis numquam at nesciunt praesentium!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="three"></div>

      <div className="four">
        <div className="card">
          <div className="pic right">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0m1IcEdJLZzmtEEiosmZH9TxbAnF8Q6iZBw&usqp=CAU"
              alt=""
              style={{
                width: "44%",
                height: "38%",
                margin: "1%",
                display: "inline-flex",
              }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQN5jJMBliST8kWkJUX35K-ejU3SAdEvPmAQ&usqp=CAU"
              alt=""
              style={{
                width: "44%",
                height: "38%",
                margin: "1%",
                display: "inline-flex",
              }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkhVW1K00GcwlOQjaqcQXmw1z_tAmZu_-rg&usqp=CAU"
              alt=""
              style={{
                width: "44%",
                height: "38%",
                margin: "1%",
                display: "inline-flex",
              }}
            />
            <img
              src="https://t4.ftcdn.net/jpg/04/18/90/39/240_F_418903929_bGlZKQrCekrpMzt1YDjNok3DwlXmQkCs.jpg"
              alt=""
              style={{
                width: "44%",
                height: "38%",
                margin: "1%",
                display: "inline-flex",
              }}
            />
          </div>
          <div className="text left">
            <h1>Deserts & Baverages</h1>
            <hr style={{ margin: "auto", width: "100px" }} />
            <p>For the things that Get you Going</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              dolorum deserunt quasi quam corporis eveniet, accusamus ipsum non
              reprehenderit doloremque facilis, magnam voluptate consequatur
              quae voluptas hic. Magni, magnam inventore? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ratione delectus dignissimos
              accusamus tenetur voluptas minus repudiandae fuga, libero a
              provident beatae eius deleniti fugit culpa blanditiis numquam at
              nesciunt praesentium!
            </p>
          </div>
        </div>
      </div>

      <div className="five">
        <div className="quote">
          <h2>“Tea will take you there” ...</h2>
        </div>
      </div>

      <div className="six">
        <div className="card">
          <div className="pic left">
            <img
              src="https://t3.ftcdn.net/jpg/01/18/23/86/240_F_118238678_1SBgG9mWnQJXCDY4ScHWCD7JBim4zDgr.jpg"
              alt=""
              style={{
                width: "40%",
                height: "90%",
                margin: "auto 2%",
                display: "inline-flex",
              }}
            />

            {/* <!-- src="https://t4.ftcdn.net/jpg/01/80/63/79/240_F_180637901_xo8qNxFYghqaLHtFc6qCIqKck0eU1j1p.jpg" --> */}
            <img
              src="https://t4.ftcdn.net/jpg/01/80/63/79/240_F_180637938_n0krofS5ObDr37xkP3AySEag4VI4nE7R.jpg"
              alt=""
              style={{
                width: "40%",
                height: "90%",
                margin: "auto 2%",
                display: "inline-flex",
              }}
            />
          </div>
          <div className="text right">
            <h1>The Leafs</h1>
            <p>TOP QUALITY LEAFS FROM AROUND INDIA</p>
            <hr style={{ margin: "auto", width: "100px" }} />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              dolorum deserunt quasi quam corporis eveniet, accusamus ipsum non
              reprehenderit doloremque facilis, magnam voluptate consequatur
              quae voluptas hic. Magni, magnam inventore? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ratione delectus dignissimos
              accusamus tenetur voluptas minus repudiandae fuga, libero a
              provident beatae eius deleniti fugit culpa blanditiis numquam at
              nesciunt praesentium!
            </p>
          </div>
        </div>
      </div>

      <div className="footer text">
        <h1>Contact Me</h1>
        <p>INFO@MYSITE.COM / TEL : 123-455-7890</p>
        <hr style={{ margin: "auto", width: "100px" }} />
        <br />

        <form action="post">
          <div className="left">
            <label for="name">Enter Your Name*</label>
            <input type="text" id="name" />
            <br />

            <label for="email">Enter Your E-mail*</label>
            <input type="email" id="email" />
            <br />
            <label for="subject">Enter your Subject*</label>
            <input type="text" name="" id="" />
            <br />
          </div>

          <div className="right">
            <label for="message">Enter your Message*</label>
            <textarea id="message" name="message" id="" cols="30" rows="10">
              Message...
            </textarea>
            <br />

            <button className="right">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageOne;
