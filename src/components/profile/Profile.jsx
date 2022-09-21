/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../states/useFetch";
import FetchUsers from "../fetchusers/FetchUsers";
import "./profile.css";
import Img from "../img/Img";
import Aside from "../aside/Aside";
import MainFooter from "../addpost/AddPost";
import profileImg from "../../img/profile-settings.png";
import ProfileDetails from "../../ProfileDetails";
import NavBar from "../nav/NavBar";
export default function Profile() {
  const { id } = useParams();
  const {
    data: user,
    error,
    isFetching,
  } = useFetch("http://localhost:5000/users/" + id);

  const [showBar, setShowBar] = useState(true);
  const toggler = () => {
    const bar = document.querySelector(".navbar");
    if (showBar) {
      bar.style.minWidth = "250px";
      setShowBar((prev) => !prev);
      
    } else {
      bar.style.minWidth = "0";
      setShowBar((prev) => !prev);
    }
  };
  const [prevTab, setPrevTab] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);
  useEffect(() => {
    currentTab
      ? ((document.getElementById(currentTab).style.borderBottom =
          "2px solid red"),
        setPrevTab(currentTab),
        prevTab
          ? (document.getElementById(prevTab).style.borderBottom = "")
          : "")
      : "";
  }, [currentTab]);
  const [prev, setPrev] = useState(null);
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    current
      ? ((document.getElementById(current).style.borderBottom =
          "2px solid red"),
        setPrev(current),
        prev ? (document.getElementById(prev).style.borderBottom = "") : "")
      : "";
  }, [current]);

  return (
    <>
      <div id="profile">
        {isFetching && <div> {
        <h1>
          fetching User Profile....
        </h1>
        } </div>}
        {error && (
          <div>
            <section>
              <div id="profile-header">
                <div id="profile-menu-header">
    <div id="profile-toggle-bar" onClick={toggler}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span id="profile-title">Profile</span>
                  <Img cls="profile-setting-icon" src={profileImg} />
                </div>
                <Img
                  src={
                    "https://via.placeholder.com/300.png/09f/000?text=User+Not+Found"}
                />
              </div>
            </section>
          </div>
        )}
        {user && (
          <section>
<NavBar toggle={toggler} />
            <div id="profile-header">
              <div id="profile-menu-header">
                <Img cls="profile-setting-icon" src={profileImg} />
                <span id="profile-title">Profile</span>
                <div id="profile-toggle-bar" onClick={toggler}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>
              <Img
                src={
                  "https://via.placeholder.com/300.png/09f/000?text=" +
                  user.username
                }
                cls="profile-avatar"
                alt="profile-avatar"
              />
              <h2 className="profile-name"> {user["full name"]} </h2>

              <div className="profile-info-container">
                <div className="profile-info-tabs">
                  <div className="info-tab">
                    <span className="profile-tabs-value" id="art-value">
                      90
                    </span>
                    <span
                      className="profile-tabs-title"
                      id="art"
                      onClick={(e) => setCurrentTab(e.target.id)}
                    >
                      Articles
                    </span>
                  </div>
                  <div className="info-tab">
                    <span className="profile-tabs-value" id="fol-ers-value">
                      2.5k
                    </span>
                    <span
                      className="profile-tabs-title"
                      id="follow"
                      onClick={(e) => setCurrentTab(e.target.id)}
                    >
                      Followers
                    </span>
                  </div>
                  <div className="info-tab">
                    <span className="profile-tabs-value" id="fol-ins-value">
                      10
                    </span>
                    <span
                      className="profile-tabs-title"
                      id="followi-n"
                      onClick={(e) => setCurrentTab(e.target.id)}
                    >
                      Following
                    </span>
                  </div>
                </div>
              </div>

              <div className="profile-details-tabs">
                <div
                  className="details-tab"
                  id="popular"
                  onClick={(e) => setCurrent(e.target.id)}
                >Popular
                </div>
                <div
                  className="details-tab"
                  id="artcles"
                  onClick={(e) => setCurrent(e.target.id)}
                >
                  Airticles
                </div>
                <div
                  className="details-tab"
                  id="podcast"
                  onClick={(e) => setCurrent(e.target.id)}
                >
                  Podcast
                </div>
              </div>
            </div>

            {/* details after the order of the info tab selection */}

            <div className="profile-details-cont">

              {<ProfileDetails user={user.userId} />}
            </div>
          </section>
        )}

        {/* <Aside /> */}
      </div>
      <div id="copyright">Javascript Enthusiast &copy;2022</div>
    </>
  );
}
