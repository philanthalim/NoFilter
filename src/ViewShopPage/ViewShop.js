import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router";
import lovet from "../images/LB3.jpeg";
import Footer from "../components/Footer";

const ViewShop = () => {
  const location = useLocation();

  const shop = location.state.shop; //get state from SearchResults Routing
  const [reviews, setReviewsList] = useState([]);
  let avg = 1;
  const fetchReviews = async () => {
    await Axios.get(`https://zyla-app.herokuapp.com/api/reviews/${shop}`)
      .then((res) => setReviewsList(res.data))
      .then(() => setTimeout(() => updateState(), 1000));

    //setReviewsList(res.data);
  };

  const updateState = () => {
    //console.log(reviews.length,'len');
    let sum = 0;
    for (let i in reviews) {
      sum += reviews[i].rating;
    }
    //console.log(sum,'sum');
    avg = sum / reviews.length;
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <h3 className="overlay-header">{shop}</h3>
          <h3 className="overlay-sub-header">
            {reviews.length} Reviews ({Math.round(avg)})
          </h3>
        </div>
      </div>

      <div>
        <div style={{ height: "15px" }}></div>
        {reviews.length === 0 ? (
          <div
            style={{
              fontSize: "1.2rem",
              minHeight: "30vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>No reviews yet!</p>
            <p>Be the first to leave a review ;) !</p>
          </div>
        ) : (
          <> </>
        )}
        {reviews.map((item) => (
          <div className="rating-container">
            <div className="rating-container-1">
              <p>{item.item.toUpperCase()}</p>
              <p style={{}}>{item.rating}.0</p>
            </div>
            <div className="rating-container-2">
              <p>{item.comment}</p>
              <img className="user-img" src={item.image} alt="userImg"></img>
              <p>Reviewed on {item.dateCreated.slice(3, 15)}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ViewShop;
