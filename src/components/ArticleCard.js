// Importing necessary components and functions from Ant Design library and custom utility function
import { Card, Tag, Row, Typography, Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { formatDate } from "../Utils";

// Destructuring Typography component from Ant Design
const { Text } = Typography;

// Common styles object to hold shared styles for the component
const commonStyles = {
  ArticleCard: { padding: "12px 12px 0px 12px", borderRadius: "8px" },
  ArticleCardImg: { borderRadius: "8px" },
  ArticleCardTag: {
    border: "none",
    borderRadius: "4px",
    fontSize: "18px",
    padding: "4px 14px",
    fontWeight: "500",
  },
  ArticleCardDesc: { padding: "15px 0px", fontWeight: "700", fontSize: "26px" },
  ArticleCardName: {
    marginInline: "10px",
    margin: "auto 0",
    padding: "0 10px",
  },
  ArticleCardDate: { marginInline: "10px", margin: "auto 0" },
  ArticleCardContactRow: {
    fontSize: "16px",
    fontWeight: "500",
  },
};

// Functional component for an article card
const ArticleCard = ({
  imgSrc = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  categoryText = "blue",
  date = "12/12/2023",
  userName = "jack",
  title = "The Impact Of Technology On The Workplace: How Technology Is Changing",
  userImg = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fman-avatar-image-for-profile_13001882.html&psig=AOvVaw1-76VXwtiuJZNrdxWXao9K&ust=1705335051116000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKi36aWi3YMDFQAAAAAdAAAAABAD",
}) => (
  // Card component with hover effect and custom styling
  <Card
    hoverable
    style={commonStyles.ArticleCard}
    // Cover image with custom styling
    cover={
      <img
        height={180}
        alt="example"
        src={imgSrc}
        style={commonStyles.ArticleCardImg}
      />
    }
  >
    {/* Tag for article category with custom styling */}
    <Tag color="blue" style={commonStyles.ArticleCardTag}>
      {" "}
      {categoryText}
    </Tag>
    {/* Row for article description with custom styling */}
    <Row style={commonStyles.ArticleCardDesc}>
      {" "}
      <span>{title}</span>
    </Row>
    {/* Row for user information with custom styling */}
    <Row style={commonStyles.ArticleCardContactRow}>
      {/* Avatar component for user image */}
      <Avatar size="large" icon={<UserOutlined />} src={userImg} />
      {/* Text components for user name and article date with custom styling */}
      <Text style={commonStyles.ArticleCardName}>{userName}</Text>
      <Text style={commonStyles.ArticleCardDate}> {formatDate(date)}</Text>
    </Row>
  </Card>
);

// Exporting the ArticleCard component as the default export
export default ArticleCard;
