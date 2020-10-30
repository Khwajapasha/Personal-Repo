import React from "react";
import { Container } from "react-bootstrap";
import "./BlogPage.css";
import FirstPost from "./BlogImages/AmjadSir.jpg";
import SecondPost from "./BlogImages/Tausif.jpg";
import ThirdPost from "./BlogImages/Zuber.jpg";
import FourthPost from "./BlogImages/Salman.jpg";
const BlogPage = () => {
  return (
    <Container>
      <div>
        <header className="main-header">
          <div className=" d-flex justify-content-center align-item-center flex-column py-5 ">
            <h1 className="main-heading "> KHWAJA PASHA</h1>
            <p className=" main-heading--para ">
              Welcome to wolrd of{" "}
              <span className="text-capitalize bg-dark text-white py-2 px-3">
                KHWAJA
              </span>{" "}
            </p>
          </div>

          {/* The main image section */}
          <div className="main-header--div d-flex align-items-start justify-content-center pl-5 flex-column shadow">
            <p>Khwaja pasha</p>
            <h2 className="animateWord">
              <span>Our Service</span>
              <div>
                <ul className="flip">
                  <li> React </li>
                  <li> Flutter</li>
                  <li> Angular</li>
                  <li> Awesome</li>
                </ul>
              </div>
            </h2>
            <button className="text-uppercase">Subscribe</button>
          </div>
        </header>

        {/* Header completed here */}
        {/* Two sided div start here */}

        <div className="container-fluid">
          <div className="row">
            {/* To get left and right side div space */}
            <div className="col-xl-10 col-lg-10 col-md-11 mx-auto my-5">
              <div className="row gx-5 mx-sm-auto">
                {/* To get the left side of the div space */}
                <div className="col-lg-8 col-md-11 col-11 mx-auto">
                  <div className="row gy-5">
                    {/* Our first post code */}
                    <div className="col-12 card p-4 shadow blog-left--div">
                      <div className="d-flex justify-content-center align-item-center flex-column py-2 ">
                        <h1>BEST LAPTOP IN 2020 2020</h1>
                        <p className="blog-title  ">
                          <span className="font-weight-bold">
                            Title discription
                          </span>{" "}
                          10-10-2020{" "}
                        </p>
                      </div>
                      <figure className="right-side-img mb-5">
                        <img
                          className="img-fluid shadow"
                          src={FirstPost}
                          alt=" "
                        />
                      </figure>
                      <p>
                        {" "}
                        <b>PickupBiz</b> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Temporibus alias molestiae, possimus
                        natus eligendi libero atque aperiam ducimus, sit at
                        dolorum voluptatibus autem labore repellendus repellat
                        dicta eaque! Architecto, ullam?
                      </p>
                      <div className="d-flex justify-content-between left-div-btns">
                        <div>
                          <button className="left-div--like" id="like-btn">
                            {" "}
                            Like{" "}
                          </button>
                        </div>
                        <div>
                          <button
                            className="left-div--reply"
                            onClick="reply('reply1')"
                          >
                            {" "}
                            Replies{" "}
                            <badge className="bg-white text-dark p-2">
                              1
                            </badge>{" "}
                          </button>
                        </div>
                      </div>
                      <div className="replies" id="reply1">
                        <div className="d-flex justify-content-start flex-row align-self-center card reply-card py-3">
                          <div className="reply-image mx-2 align-item-center">
                            <img
                              src=" https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png "
                              alt=" "
                            />
                          </div>
                          <div className="reply-text--left">
                            <p className="blog-title">
                              <b>Khwaja,</b> Oct 10 2020 3:55 AM
                            </p>
                            <p>Awesome bro i like your content</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* our second post div */}
                    <div className="col-12 card p-4 shadow blog-left--div">
                      <div className="d-flex justify-content-center align-item-center flex-column py-2 ">
                        <h1>BEST LAPTOP IN 2020 2020</h1>
                        <p className="blog-title  ">
                          <span className="font-weight-bold">
                            Title discription
                          </span>{" "}
                          10-10-2020{" "}
                        </p>
                      </div>
                      <figure className="right-side-img mb-5">
                        <img
                          className="img-fluid shadow"
                          src={SecondPost}
                          alt=" "
                        />
                      </figure>
                      <p>
                        {" "}
                        <b>PickupBiz</b> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Temporibus alias molestiae, possimus
                        natus eligendi libero atque aperiam ducimus, sit at
                        dolorum voluptatibus autem labore repellendus repellat
                        dicta eaque! Architecto, ullam?
                      </p>
                      <div className="d-flex justify-content-between left-div-btns">
                        <div>
                          <button className="left-div--like" id="like-btn">
                            {" "}
                            Like{" "}
                          </button>
                        </div>
                        <div>
                          <button
                            className="left-div--reply"
                            onClick="reply('reply1')"
                          >
                            {" "}
                            Replies{" "}
                            <badge className="bg-white text-dark p-2">
                              1
                            </badge>{" "}
                          </button>
                        </div>
                      </div>
                      <div className="replies" id="reply1">
                        <div className="d-flex justify-content-start flex-row align-self-center card reply-card py-3">
                          <div className="reply-image mx-2 align-item-center">
                            <img
                              src=" https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png "
                              alt=" "
                            />
                          </div>
                          <div className="reply-text--left">
                            <p className="blog-title">
                              <b>Khwaja,</b> Oct 10 2020 3:55 AM
                            </p>
                            <p>Awesome bro i like your content</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* our Third post div */}
                    <div className="col-12 card p-4 shadow blog-left--div">
                      <div className="d-flex justify-content-center align-item-center flex-column py-2 ">
                        <h1>BEST LAPTOP IN 2020 2020</h1>
                        <p className="blog-title  ">
                          <span className="font-weight-bold">
                            Title discription
                          </span>{" "}
                          10-10-2020{" "}
                        </p>
                      </div>
                      <figure className="right-side-img mb-5">
                        <img
                          className="img-fluid shadow"
                          src={ThirdPost}
                          alt=" "
                        />
                      </figure>
                      <p>
                        {" "}
                        <b>PickupBiz</b> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Temporibus alias molestiae, possimus
                        natus eligendi libero atque aperiam ducimus, sit at
                        dolorum voluptatibus autem labore repellendus repellat
                        dicta eaque! Architecto, ullam?
                      </p>
                      <div className="d-flex justify-content-between left-div-btns">
                        <div>
                          <button className="left-div--like" id="like-btn">
                            {" "}
                            Like{" "}
                          </button>
                        </div>
                        <div>
                          <button
                            className="left-div--reply"
                            onClick="reply('reply1')"
                          >
                            {" "}
                            Replies{" "}
                            <badge className="bg-white text-dark p-2">
                              1
                            </badge>{" "}
                          </button>
                        </div>
                      </div>
                      <div className="replies" id="reply1">
                        <div className="d-flex justify-content-start flex-row align-self-center card reply-card py-3">
                          <div className="reply-image mx-2 align-item-center">
                            <img
                              src=" https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png "
                              alt=" "
                            />
                          </div>
                          <div className="reply-text--left">
                            <p className="blog-title">
                              <b>Khwaja,</b> Oct 10 2020 3:55 AM
                            </p>
                            <p>Awesome bro i like your content</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* our Fourth post div */}
                    <div className="col-12 card p-4 shadow blog-left--div">
                      <div className="d-flex justify-content-center align-item-center flex-column py-2 ">
                        <h1>BEST LAPTOP IN 2020 2020</h1>
                        <p className="blog-title  ">
                          <span className="font-weight-bold">
                            Title discription
                          </span>{" "}
                          10-10-2020{" "}
                        </p>
                      </div>
                      <figure className="right-side-img mb-5">
                        <img
                          className="img-fluid shadow"
                          src={FourthPost}
                          alt=" "
                        />
                      </figure>
                      <p>
                        {" "}
                        <b>PickupBiz</b> Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Temporibus alias molestiae, possimus
                        natus eligendi libero atque aperiam ducimus, sit at
                        dolorum voluptatibus autem labore repellendus repellat
                        dicta eaque! Architecto, ullam?
                      </p>
                      <div className="d-flex justify-content-between left-div-btns">
                        <div>
                          <button className="left-div--like" id="like-btn">
                            {" "}
                            Like{" "}
                          </button>
                        </div>
                        <div>
                          <button
                            className="left-div--reply"
                            onClick="reply('reply1')"
                          >
                            {" "}
                            Replies{" "}
                            <badge className="bg-white text-dark p-2">
                              1
                            </badge>{" "}
                          </button>
                        </div>
                      </div>
                      <div className="replies" id="reply1">
                        <div className="d-flex justify-content-start flex-row align-self-center card reply-card py-3">
                          <div className="reply-image mx-2 align-item-center">
                            <img
                              src=" https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png "
                              alt=" "
                            />
                          </div>
                          <div className="reply-text--left">
                            <p className="blog-title">
                              <b>Khwaja,</b> Oct 10 2020 3:55 AM
                            </p>
                            <p>Awesome bro i like your content</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* To get the left side of the div space */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
