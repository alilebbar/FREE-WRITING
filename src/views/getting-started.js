import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import "./getting-started.css";

const GettingStarted = (props) => {
  const [textInput, setTextInput] = useState("");
  const [textShow, setTextShow] = useState([]);
  const clickHandel = async () => {
    await postData();
    await getData();
  };
  const show = textShow.map((t, index) => {
    return (
      <span key={index} className="getting-started-text01">
        {t}
      </span>
    );
  });
  const postData = async () => {
    try {
      const response = await axios.post(
        "https://monpremierapi.onrender.com/Articale",
        { body: textInput }
      );
      setTextInput("");
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://monpremierapi.onrender.com/Articale"
      );
      const data = response.data.map((t) => t.body);
      setTextShow(data);
      //setTextShow(data.body);
      //console.log(data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="getting-started-container">
      <Helmet>
        <title>Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Intro to teleportHQ" />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/624674f0-042d-4c0d-ae3c-8e43bd7fe130/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="getting-started-container1">
        <h1 className="getting-started-text">free writing</h1>
      </div>
      <div className="getting-started-container2">
        <input
          maxLength="300"
          type="text"
          placeholder="write"
          className="getting-started-textinput input"
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <button
          type="button"
          className="getting-started-button button"
          onClick={clickHandel}
        >
          Button
        </button>
      </div>
      <div className="getting-started-container3">{show}</div>
    </div>
  );
};

export default GettingStarted;
