// Importing React, Menu, Row, Col, Button, Input components, and SearchOutlined icon from Ant Design library
import React from "react";
import { Menu, Row, Col, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import greyDot from "../greyDot.png"; // Importing the grey dot image

// Functional component for the navigation bar
const Navbar = () => {
  // Common styles object to hold shared styles for the component
  const commonStyle = {
    displayFlexJustifyContentSpaceBetween: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "10px 5px 10px 5px",
      flexWrap: "wrap",
    },
    dFlex: {
      display: "flex",
    },
    paddingX: {
      cursor: "pointer",
      paddingLeft: "10px",
      paddingRight: "10px",
      fontSize: "20px",
      fontWeight: 700,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    paddingXDot: {
      marginRight: "25px",
      width: "46px",
      borderRadius: "160px",
      background: "#dfdfdf",
    },
    paddingXDotLeft: {
      marginLeft: "20px",
      width: "46px",
      borderRadius: "160px",
      background: "#dfdfdf",
    },
    btnStyles: {
      fontWeight: 700,
      fontSize: "18px",
      background: "black",
      color: "white",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "44px",
    },
    inputHeight: { borderRadius: "15px", height: "37px", width: "230px" },
    dotSize: { width: "50px" },
  };

  // Rendering the navigation bar with menu items, search input, and create article button
  return (
    <Menu mode="horizontal">
      <div style={commonStyle.displayFlexJustifyContentSpaceBetween}>
        {/* Left section of the navigation bar */}
        <div style={commonStyle.dFlex}>
          <div className="d-none">
            {/* Grey dot image */}
            <img
              style={commonStyle.dotSize}
              alt="grey dot"
              src={greyDot}
              className="dotSize45"
            />
          </div>
          {/* Home menu item */}
          <div className="fontSize15" style={commonStyle.paddingX}>
            <span>Home</span>
          </div>
          {/* My Articles menu item */}
          <div className="fontSize15" style={commonStyle.paddingX}>
            <span>My Articles</span>
          </div>
        </div>

        {/* Right section of the navigation bar */}
        <div style={commonStyle.dFlex}>
          {/* Search input */}
          <div
            style={commonStyle.paddingX}
            className="bar-input textFieldSize150 "
          >
            <Input
              style={commonStyle.inputHeight}
              prefix={<SearchOutlined />}
              placeholder="Search"
            />
          </div>
          {/* Create Article button */}
          <div style={commonStyle.paddingX}>
            <Button
              className="fontSize15 btnHeight40"
              style={commonStyle.btnStyles}
            >
              Create Article
            </Button>
          </div>
          <div className="d-none">
            {/* Grey dot image */}
            <img
              style={commonStyle.dotSize}
              alt="grey dot"
              src={greyDot}
              className="dotSize45"
            />
          </div>
        </div>
      </div>
    </Menu>
  );
};

// Exporting the Navbar component as the default export
export default Navbar;
