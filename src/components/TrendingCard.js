// Importing React, Tag, Typography, Avatar, Row, Col components, and UserOutlined icon from Ant Design library
import React from "react";
import { Tag, Typography, Avatar, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Importing formatDate utility function from Utils
import { formatDate } from "../Utils";

// Destructuring Text component from Ant Design Typography
const { Text } = Typography;

// Common styles object to hold shared styles for the component
const commonStyles = {
  TrendingCard: {
    border: "1px solid #f0f0f0",
    padding: "12px 20px 12px 12px ",
    borderRadius: "8px",
    marginRight: "15px",
  },
  TrendingCardDesc: {
    padding: "20px 0px 30px 0px",
    fontWeight: "700",
    fontSize: "26px",
  },
  ArticleCardDescCol: { padding: "10px" },
  TrendingCardName: {
    marginInline: "10px",
    margin: "auto 0",
    padding: "0 10px",
  },
  TrendingCardDate: { marginInline: "10px", margin: "auto 0" },
  TrendingCardContactRow: {
    fontSize: "16px",
    fontWeight: "500",
  },
  TrendingCardTag: {
    border: "none",
    borderRadius: "4px",
    fontSize: "18px",
    padding: "4px 14px",
    borderRadius: "4px",
    fontWeight: "500",
  },
};

// Functional component for a trending card
const TrendingCard = ({
  imgSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  categoryText = "blue",
  date = "12/12/2023",
  userName = "jack",
  title = "The Impact Of Technology On The Workplace: How Technology Is Changing",
  userImg = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
}) => (
  // Row component with styles for the trending card
  <Row style={commonStyles.TrendingCard} justify={"space-between"}>
    {/* Column for the image */}
    <Col xs={24} sm={10} md={10} lg={10} xl={10}>
      {/* Image for the trending card */}
      <img
        alt="example"
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </Col>
    {/* Column for the card content */}
    <Col
      xs={24}
      sm={14}
      md={14}
      lg={14}
      xl={14}
      style={commonStyles.ArticleCardDescCol}
    >
      {/* Tag for the story category */}
      <Tag color="blue" style={commonStyles.TrendingCardTag}>
        {categoryText}
      </Tag>
      {/* Row for the story description */}
      <Row style={commonStyles.TrendingCardDesc}>
        <span>{title}</span>
      </Row>
      {/* Row for user information */}
      <Row style={commonStyles.TrendingCardContactRow}>
        {/* Avatar for the user */}
        <Avatar size="large" icon={<UserOutlined />} src={userImg} />
        {/* Text components for user name and article date */}
        <Text style={commonStyles.TrendingCardName}>{userName}</Text>
        <Text style={commonStyles.TrendingCardDate}> {formatDate(date)}</Text>
      </Row>
    </Col>
  </Row>
);

// Exporting the TrendingCard component as the default export
export default TrendingCard;
