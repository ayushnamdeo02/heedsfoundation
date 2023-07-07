import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./squad/squad.css";
import squad_head from "./squad/head-squad.png";

class Squads extends Component {
  render() {
    return (
      <div className="squad-page" id='squads'>
        <Helmet>
          <title>Squads - Heeds Foundation</title>
          <meta name="description" content="Explore the passionate teams and dedicated volunteers of Heeds Foundation. Our squads are committed to making a positive impact through education, healthcare, sustainable development, and humanitarian response. Join us in our mission to empower communities and create a better future." />
        </Helmet>
        <img src={squad_head} alt='head'></img>
        <h2 className="page-title">Squads</h2>
        <div className="squad-container">
          <p>Welcome to Heeds Foundation, a dynamic organization driven by a passionate team, dedicated volunteers, and impactful partnerships. Our mission is to empower communities through education, healthcare, sustainable development, and humanitarian response. With a strong focus on creating positive change, we work hand in hand with volunteers who bring their skills, compassion, and energy to our initiatives.</p>
          <h6>To Know More</h6>
        </div>
        <div className="circle-buttons">
          <Link className="circle-button-1" to="/"></Link>
          <Link className="circle-button-2" to="/members"></Link>
          <Link className="circle-button-3" to="/"></Link>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Squads;
