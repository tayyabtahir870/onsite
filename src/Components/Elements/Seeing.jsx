import React, { useState } from "react";

function Seeing() {
  const [isListVisible1, setListVisible1] = useState(false);
  const [isListVisible2, setListVisible2] = useState(false);
  const [isListVisible3, setListVisible3] = useState(false);
  const [isListVisible4, setListVisible4] = useState(false);
  const [isListVisible5, setListVisible5] = useState(false);

  const toggleListVisibility1 = () => {
    setListVisible1(!isListVisible1);
  };
  const toggleListVisibility2 = () => {
    setListVisible2(!isListVisible2);
  };
  const toggleListVisibility3 = () => {
    setListVisible3(!isListVisible3);
  };
  const toggleListVisibility4 = () => {
    setListVisible4(!isListVisible4);
  };
  const toggleListVisibility5 = () => {
    setListVisible5(!isListVisible5);
  };

  const [selectedVideo, setSelectedVideo] = useState("salesManagement");

  const videos = {
    salesManagement: "Assests/salesmanagement.mp4",
    sitetakeoffs: "Assests/Sitetakeoffs.mp4",
    jobManagement: "Assests/JobManagement.mp4",
    businessOperations: "Assests/BusinessOperations.mp4",
    customerExperiences: "Assests/CustomerExperiences.mp4",
  };

  const toggleVideoVisibility = (videoKey) => {
    setSelectedVideo(selectedVideo === videoKey ? null : videoKey);
    // Reset list visibility when a new video is selected
    setListVisible1(false);
    setListVisible2(false);
    setListVisible3(false);
    setListVisible4(false);
    setListVisible5(false);

    // Set list visibility based on the selected video
    switch (videoKey) {
      case "salesManagement":
        setListVisible1(true);
        break;
      case "businessOperations":
        setListVisible2(true);
        break;
      case "customerExperiences":
        setListVisible3(true);
        break;
      case "jobManagement":
        setListVisible4(true);
        break;
      case "sitetakeoffs":
        setListVisible5(true);
        break;

      default:
        break;
    }
  };

  return (
    <div className="container">
      <div>
        <h5 className="seeing-text text-center my-5">SEEING IS BELIEVING</h5>
      </div>
      <div className="row ">
        <div className="col-md-6 ">
          {selectedVideo && (
            <video
              className="onsiteimg"
              loop
              autoPlay
              controls
              src={videos[selectedVideo]}
            ></video>
          )}
        </div>
        <div className="col-md-6">
          <div>
            <h6
              className="list-heading"
              onClick={() => toggleVideoVisibility("salesManagement")}
            >
              Sales Management
            </h6>
            {isListVisible1 && selectedVideo === "salesManagement" && (
              <ul className="listed-item my-4">
                <li>Lead Management</li>
                <li className="mt-2">CRM</li>
                <li className="mt-2">Estimate Requests</li>
                <li className="mt-2">Sales Rep Dashboard</li>
              </ul>
            )}
          </div>
          <div className="my-4">
            <h6
              className="list-heading"
              onClick={() => toggleVideoVisibility("businessOperations")}
            >
              Business Operations
            </h6>
            {isListVisible2 && selectedVideo === "businessOperations" && (
              <ul className="listed-item my-4">
                <li>Lead Management</li>
                <li className="mt-2">CRM</li>
                <li className="mt-2">Estimate Requests</li>
                <li className="mt-2">Sales Rep Dashboard</li>
              </ul>
            )}
          </div>
          <div className="my-4">
            <h6
              className="list-heading"
              onClick={() => toggleVideoVisibility("customerExperiences")}
            >
              Customer Experience
            </h6>
            {isListVisible3 && selectedVideo === "customerExperiences" && (
              <ul className="listed-item my-4">
                <li>Lead Management</li>
                <li className="mt-2">CRM</li>
                <li className="mt-2">Estimate Requests</li>
                <li className="mt-2">Sales Rep Dashboard</li>
              </ul>
            )}
          </div>
          <div className="my-4">
            <h6
              className="list-heading"
              onClick={() => toggleVideoVisibility("jobManagement")}
            >
              Job Management
            </h6>
            {isListVisible4 && selectedVideo === "jobManagement" && (
              <ul className="listed-item my-4">
                <li>Lead Management</li>
                <li className="mt-2">CRM</li>
                <li className="mt-2">Estimate Requests</li>
                <li className="mt-2">Sales Rep Dashboard</li>
              </ul>
            )}
          </div>
          <div className="my-4">
            <h6
              className="list-heading"
              onClick={() => toggleVideoVisibility("sitetakeoffs")}
            >
              Automations
            </h6>
            {isListVisible5 && selectedVideo === "sitetakeoffs" && (
              <ul className="listed-item my-4">
                <li>Lead Management</li>
                <li className="mt-2">CRM</li>
                <li className="mt-2">Estimate Requests</li>
                <li className="mt-2">Sales Rep Dashboard</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seeing;
